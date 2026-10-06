"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ChevronDown } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { backdropVariants, springModalVariants } from "@/lib/motion";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { buildStudentWhatsAppLink } from "@/lib/whatsapp-link";
import {
  CITY_OPTIONS,
  GRADE_OPTIONS,
  BOARD_OPTIONS,
  STUDENT_MODE_OPTIONS,
} from "@/lib/form-options";

export default function SpringModal() {
  const { isModalOpen, closeModal } = useModal();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "Lahore",
    area: "",
    grade: "FSc Pre-Medical",
    board: "Federal Board (FBISE)",
    mode: "Online (1-on-1 Interactive)",
    notes: "",
  });
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);
  const [showExtraDetails, setShowExtraDetails] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [hp, setHp] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/student-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          city: formData.city,
          area: formData.area,
          grade: formData.grade,
          board: formData.board,
          mode: formData.mode,
          notes: formData.notes,
          source: "modal",
          hp,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        let message = data?.error || "Failed to submit request. Please try again.";
        if (data?.details && typeof data.details === "object") {
          const detailMsgs = Object.values(data.details).flat().join(" ");
          if (detailMsgs) message = detailMsgs;
        }
        throw new Error(message);
      }

      setSubmittedData({ ...formData });
      setSubmitted(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage(null);
    setHp("");
    setShowExtraDetails(false);
    setFormData({
      name: "",
      phone: "",
      city: "Lahore",
      area: "",
      grade: "FSc Pre-Medical",
      board: "Federal Board (FBISE)",
      mode: "Online (1-on-1 Interactive)",
      notes: "",
    });
    setSubmittedData(null);
    closeModal();
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          key="modal-backdrop"
          variants={backdropVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={closeModal}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto flex items-center justify-center cursor-pointer"
        >
          {/* Spring Modal Card */}
          <motion.div
            key="modal-card"
            variants={springModalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-[#FAF7F2] border border-[#E8E1D5]/80 rounded-3xl p-6 sm:p-8 text-[#18181B] relative cursor-default max-h-[90vh] overflow-y-auto my-auto"
          >
            {/* Close Button (X) */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#EAE2D4] hover:bg-[#DDD3C2] text-[#18181B] flex items-center justify-center transition-colors focus:outline-none cursor-pointer z-10"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              /* Success State Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-[#2E8B57]/10 text-[#2E8B57] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#18181B] tracking-tight">
                  Demo Request Received
                </h3>
                <p className="text-sm text-[#52525B] max-w-sm mx-auto leading-relaxed">
                  Thanks, <span className="font-semibold text-[#18181B]">{submittedData?.name || formData.name}</span>! We will match you with a verified university tutor in{" "}
                  <span className="font-semibold text-[#18181B]">{submittedData?.city || formData.city}</span> soon. Expect a WhatsApp message shortly.
                </p>

                <div className="pt-4 space-y-3">
                  {submittedData && (
                    <div className="space-y-1.5">
                      <a
                        href={buildStudentWhatsAppLink(submittedData)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-sm transition-all shadow-xs hover:shadow-sm active:scale-95 cursor-pointer"
                      >
                        <WhatsAppIcon className="w-4 h-4 shrink-0" />
                        <span>Send this on WhatsApp too</span>
                      </a>
                      <p className="text-xs text-[#71717A]">
                        Optional: this speeds up our reply.
                      </p>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full py-3.5 px-6 rounded-full bg-[#2E8B57] hover:bg-[#236d44] text-white font-medium text-sm transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Lead Capture Form */
              <div className="space-y-5">
                {/* Header Info */}
                <div className="space-y-1.5 pr-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#52525B]">
                    Free Demo Class
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#18181B] tracking-tight">
                    Request a Tutor
                  </h3>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    Fill in your details below to get matched with a verified university mentor.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Student Name */}
                  <div>
                    <label className="block text-xs font-medium text-[#18181B] uppercase tracking-wider mb-1.5">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ahmed Khan"
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-white border border-[#E8E1D5] focus:border-[#2E8B57] focus:ring-1 focus:ring-[#2E8B57] outline-none text-sm text-[#18181B] transition-all placeholder:text-[#A1A1AA]"
                    />
                  </div>

                  {/* WhatsApp Phone */}
                  <div>
                    <label className="block text-xs font-medium text-[#18181B] uppercase tracking-wider mb-1.5">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0300 1234567"
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-white border border-[#E8E1D5] focus:border-[#2E8B57] focus:ring-1 focus:ring-[#2E8B57] outline-none text-sm text-[#18181B] transition-all placeholder:text-[#A1A1AA]"
                    />
                  </div>

                  {/* Row 1: City & Grade */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-[#18181B] uppercase tracking-wider mb-1.5">
                        City *
                      </label>
                      <select
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-white border border-[#E8E1D5] focus:border-[#2E8B57] focus:ring-1 focus:ring-[#2E8B57] outline-none text-sm text-[#18181B] transition-all"
                      >
                        {CITY_OPTIONS.map((c) => (
                          <option key={c.value} value={c.value}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#18181B] uppercase tracking-wider mb-1.5">
                        Academic Grade *
                      </label>
                      <select
                        required
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-white border border-[#E8E1D5] focus:border-[#2E8B57] focus:ring-1 focus:ring-[#2E8B57] outline-none text-sm text-[#18181B] transition-all"
                      >
                        {GRADE_OPTIONS.map((g) => (
                          <option key={g.value} value={g.value}>
                            {g.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 2: Board & Mode */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-[#18181B] uppercase tracking-wider mb-1.5">
                        Exam Board *
                      </label>
                      <select
                        required
                        value={formData.board}
                        onChange={(e) => setFormData({ ...formData, board: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-white border border-[#E8E1D5] focus:border-[#2E8B57] focus:ring-1 focus:ring-[#2E8B57] outline-none text-sm text-[#18181B] transition-all"
                      >
                        {BOARD_OPTIONS.map((b) => (
                          <option key={b.value} value={b.value}>
                            {b.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#18181B] uppercase tracking-wider mb-1.5">
                        Tutoring Mode *
                      </label>
                      <select
                        required
                        value={formData.mode}
                        onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-white border border-[#E8E1D5] focus:border-[#2E8B57] focus:ring-1 focus:ring-[#2E8B57] outline-none text-sm text-[#18181B] transition-all"
                      >
                        {STUDENT_MODE_OPTIONS.map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Optional Extra Details Toggle */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setShowExtraDetails(!showExtraDetails)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2E8B57] hover:text-[#236d44] transition-colors cursor-pointer py-1"
                    >
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          showExtraDetails ? "rotate-180" : ""
                        }`}
                      />
                      <span>{showExtraDetails ? "Hide additional details" : "Add more details (optional)"}</span>
                    </button>

                    {showExtraDetails && (
                      <div className="mt-2.5 space-y-3 pt-1">
                        <div>
                          <label className="block text-xs font-medium text-[#18181B] uppercase tracking-wider mb-1.5">
                            Area / Sector / Society
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. DHA Phase 5 / Bahria Town"
                            value={formData.area}
                            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8E1D5] focus:border-[#2E8B57] focus:ring-1 focus:ring-[#2E8B57] outline-none text-sm text-[#18181B] transition-all placeholder:text-[#A1A1AA]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-[#18181B] uppercase tracking-wider mb-1.5">
                            Specific Subjects or Needs
                          </label>
                          <textarea
                            rows={2}
                            placeholder="e.g. Need urgent help with Physics numericals..."
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8E1D5] focus:border-[#2E8B57] focus:ring-1 focus:ring-[#2E8B57] outline-none text-sm text-[#18181B] transition-all placeholder:text-[#A1A1AA]"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Honeypot Spam Trap (visually hidden) */}
                  <input
                    type="text"
                    name="_hp"
                    value={hp}
                    onChange={(e) => setHp(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="opacity-0 absolute -z-10 w-0 h-0 pointer-events-none"
                  />

                  {/* Error Notification */}
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-medium text-red-700 leading-relaxed">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#2E8B57] hover:bg-[#236d44] text-white font-medium text-sm transition-all active:scale-95 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Request a Tutor"}
                    </button>
                  </div>

                  <p className="text-xs text-[#71717A] text-center pt-1">
                    Free 45-minute demo session • No advance payment
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
