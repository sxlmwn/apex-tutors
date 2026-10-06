interface RateLimitEntry {
  count: number;
  resetAt: number;
}

// In-memory IP tracking store: max 5 requests per 10 minutes
const ipStore = new Map<string, RateLimitEntry>();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

/**
 * Checks and increments rate limiting for a given client IP.
 */
export function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = ipStore.get(ip);

  // Periodic cleanup if store grows excessively
  if (ipStore.size > 2000) {
    for (const [key, value] of ipStore.entries()) {
      if (now > value.resetAt) {
        ipStore.delete(key);
      }
    }
  }

  if (!entry || now > entry.resetAt) {
    ipStore.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  entry.count += 1;
  return { allowed: true, remaining: MAX_REQUESTS - entry.count };
}

/**
 * Extracts best-effort client IP from incoming request headers.
 */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const firstIp = forwarded.split(",")[0]?.trim();
    if (firstIp) return firstIp;
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return "127.0.0.1";
}
