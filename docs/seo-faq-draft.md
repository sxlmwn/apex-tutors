# Apex Tutors — Pre-Launch FAQ Draft & FAQPage Schema

This draft contains 7 high-intent FAQ questions and answers strictly drawn from existing Apex Tutors site copy, business facts, and platform workflows.

> **Note for Development Team**:
> Per project guidelines, this FAQ is **NOT yet published to the live UI**. It is documented here for stakeholder review. Once approved, the UI component and the matching `FAQPage` Schema.org JSON-LD snippet can be embedded directly into `src/app/page.tsx`.

---

## 1. Verified FAQ Questions & Answers

### Q1: What qualifications do Apex tutors have?
**Answer**: Every Apex tutor is an actively enrolled scholar or high-achieving alumnus from Pakistan's premier universities, including LUMS, NUST, AKU, FAST, and GIKI. We vet every tutor through a rigorous 4-step selection process — verifying identity, academic transcripts, subject competency assessments, and interactive teaching pedagogy. Only the top 5% of tutor applicants are accepted onto our platform.

### Q2: Do you offer a free trial class before we commit?
**Answer**: Yes. We offer a complimentary, no-obligation demo session with your matched tutor. This allows the student and parents to assess teaching style, communication, and subject mastery before deciding to proceed with a personalized tutoring plan.

### Q3: What is the difference between Online and In-Person home tutoring?
**Answer**: Apex Tutors provides two flexible tutoring modes:
1. **Online (1-on-1 Interactive)**: Conducted live via digital whiteboards and video conferencing, featuring recorded lessons, flexible scheduling, and access to top mentors regardless of geographic location.
2. **In-Person Physical (Home Visit)**: Available for families in major urban centers (including Lahore, Karachi, Islamabad, and Rawalpindi) where a vetted tutor visits your home for direct, in-person instruction.

### Q4: Which academic curricula and exam boards do you cover?
**Answer**: We cover all major Pakistani and international educational tracks, including:
- **Cambridge International**: O Level, IGCSE, and A Level (AS & A2).
- **Pakistani Boards**: Federal Board (FBISE), Punjab Boards (BISE Lahore, Gujranwala, etc.), Sindh Board, and AKU-EB for Matric (9th & 10th) and Intermediate (FSc Pre-Medical, FSc Pre-Engineering, and ICS).
- **Junior Years**: Primary and Middle School foundational courses (Grades 1 through 8).

### Q5: In which cities is Apex Tutors available?
**Answer**: We provide in-person home tutoring across Pakistan's major academic hubs, including Lahore, Karachi, Islamabad, Rawalpindi, Multan, Faisalabad, and Bahawalpur. Our online 1-on-1 tutoring is accessible to students located anywhere across Pakistan as well as overseas Pakistani families.

### Q6: How does the tutor matching process work?
**Answer**: Getting started takes three simple steps:
1. **Submit your requirements**: Tell us the student's grade, subjects, target board, city, and preferred tutoring mode via our request form or WhatsApp.
2. **Personalized match within 24 hours**: Our academic coordinators pair you with a verified university tutor specialized in that curriculum.
3. **Take a free demo class**: Attend your trial session, align on learning goals, and schedule your regular weekly sessions.

### Q7: How are fees structured?
**Answer**: Tutoring fees are customized based on the student's academic level (e.g. Primary vs. Cambridge A Level / FSc), subject complexity, the chosen learning mode (online vs. in-person physical home visit), and weekly class frequency. Because there are no long-term lock-in contracts, parents pay transparent monthly tutoring dues after confirming satisfaction through the free demo class.

---

## 2. FAQPage JSON-LD Schema (Ready for Production)

When adding this FAQ to `src/app/page.tsx`, include this JSON-LD schema either directly or via the `<JsonLd schema={faqSchema} />` helper:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What qualifications do Apex tutors have?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every Apex tutor is an actively enrolled scholar or high-achieving alumnus from Pakistan's premier universities, including LUMS, NUST, AKU, FAST, and GIKI. We vet every tutor through a rigorous 4-step selection process — verifying identity, academic transcripts, subject competency assessments, and interactive teaching pedagogy. Only the top 5% of tutor applicants are accepted onto our platform."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer a free trial class before we commit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We offer a complimentary, no-obligation demo session with your matched tutor. This allows the student and parents to assess teaching style, communication, and subject mastery before deciding to proceed with a personalized tutoring plan."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between Online and In-Person home tutoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Apex Tutors provides two flexible tutoring modes: 1) Online 1-on-1 Interactive with digital whiteboards and recorded lessons, and 2) In-Person Physical Home Visits across major urban centers like Lahore, Karachi, Islamabad, and Rawalpindi."
      }
    },
    {
      "@type": "Question",
      "name": "Which academic curricula and exam boards do you cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We cover Cambridge O Level, IGCSE, and A Level (AS & A2), Federal Board (FBISE), Punjab Boards (BISE Lahore, Gujranwala), Sindh Board, and AKU-EB for Matric, FSc Pre-Medical, FSc Pre-Engineering, ICS, as well as Grades 1-8 foundational primary and middle school levels."
      }
    },
    {
      "@type": "Question",
      "name": "In which cities is Apex Tutors available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In-person home tutoring is available in Lahore, Karachi, Islamabad, Rawalpindi, Multan, Faisalabad, and Bahawalpur. Online 1-on-1 tutoring is available nationwide across Pakistan and internationally for overseas Pakistani students."
      }
    },
    {
      "@type": "Question",
      "name": "How does the tutor matching process work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Submit your academic requirements via our form or WhatsApp. Within 24 hours, our coordinators pair you with a verified university tutor. You then attend a free trial session to confirm compatibility before scheduling regular classes."
      }
    },
    {
      "@type": "Question",
      "name": "How are fees structured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tutoring fees are customized based on the grade level, curriculum (e.g. Primary vs. Cambridge A Level or FSc), subject complexity, tutoring mode (online vs. home visit), and weekly hours, with zero lock-in contracts."
      }
    }
  ]
}
```

---

## 3. UI Component Draft (For Future Incorporation)

```tsx
// src/components/FAQSection.tsx
import React from "react";

export function FAQSection() {
  const faqs = [
    {
      q: "What qualifications do Apex tutors have?",
      a: "Every Apex tutor is an actively enrolled scholar or alumnus from top Pakistani institutions like LUMS, NUST, AKU, FAST, and GIKI. We vet every tutor through identity verification, academic transcript reviews, and subject proficiency interviews, accepting only the top 5%."
    },
    {
      q: "Do you offer a free trial class before we commit?",
      a: "Yes. We offer a complimentary, no-obligation demo session with your matched tutor to assess compatibility and teaching style before you confirm."
    },
    {
      q: "What is the difference between Online and In-Person home tutoring?",
      a: "Online tutoring features 1-on-1 live video with interactive digital whiteboards and recorded sessions. In-person tutoring is available in selected cities (Lahore, Karachi, Islamabad, Rawalpindi) where a vetted tutor visits your home."
    },
    {
      q: "Which academic curricula and exam boards do you cover?",
      a: "We support Cambridge (O Level, IGCSE, A Level), FBISE, Punjab Boards (BISE Lahore), Sindh Board, and AKU-EB for Matric, FSc (Pre-Medical/Pre-Engineering), ICS, and Primary/Middle School (Grades 1-8)."
    },
    {
      q: "In which cities is Apex Tutors available?",
      a: "In-person tutoring is offered in Lahore, Karachi, Islamabad, Rawalpindi, Multan, Faisalabad, and Bahawalpur. Online tutoring is available nationwide and worldwide."
    },
    {
      q: "How does the tutor matching process work?",
      a: "Submit your student details, receive a verified tutor profile match within 24 hours, and attend your free demo class."
    },
    {
      q: "How are fees structured?",
      a: "Fees depend on grade level, curriculum, tutoring mode, and weekly hours. No long-term lock-in contracts; dues are paid monthly after the free demo class."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#FAF7F2] border-t border-[#E8E1D5]/60">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#52525B]">Got Questions?</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#18181B] tracking-tight">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group rounded-2xl bg-white border border-[#E8E1D5]/60 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between text-[#18181B] font-semibold text-lg">
                <span>{faq.q}</span>
                <span className="ml-4 transition-transform group-open:rotate-180 text-[#2E8B57] font-bold">↓</span>
              </summary>
              <p className="mt-4 text-[#52525B] leading-relaxed text-sm sm:text-base border-t border-[#E8E1D5]/40 pt-4">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
```
