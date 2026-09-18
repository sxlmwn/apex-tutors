"use client";

import { useState } from "react";
import Link from "next/link";
import { GraduationCap, ArrowLeft, CheckCircle2, ShieldCheck, Sparkles, DollarSign, Clock, BookCheck } from "lucide-react";

export default function ApplyTutorPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    university: "",
    program: "",
    fscMarks: "",
    city: "Lahore",
    mode: "Both Online & Physical",
    subjects: [] as string[],
  });

  const availableSubjects = [
    "Physics (Matric / FSc)",
    "Chemistry (Organic & Inorganic)",
    "Biology (Zoology / Botany)",
    "Mathematics (Calculus / Algebra)",
    "Computer Science / ICS",
    "English & Urdu",
  ];

  const toggleSubject = (subject: string) => {
    if (formData.subjects.includes(subject)) {
      setFormData({
        ...formData,
        subjects: formData.subjects.filter((s) => s !== subject),
      });
    } else {
      setFormData({
        ...formData,
        subjects: [...formData.subjects, subject],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#18181B] flex flex-col justify-between">
      {/* Header Bar */}
      <header className="bg-[#FAF7F2] border-b border-[#E8E1D5] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#2E8B57] text-white flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Apex<span className="text-[#2E8B57]">Tutors</span>
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#2E8B57] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 w-full">
        {submitted ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-slate-200/80 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#2E8B57] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              Application Submitted Successfully!
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto">
              Thank you for applying, <span className="font-bold text-slate-800">{formData.name}</span>. Our tutor onboarding team will review your academic credentials and contact you via WhatsApp at <span className="font-bold text-slate-800">{formData.phone}</span> for the initial screening interview and document verification.
            </p>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-xs text-emerald-800 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-[#2E8B57]" />
              <span>Please keep your CNIC copy and Student Card / Transcript handy for verification.</span>
            </div>

            <div className="pt-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#2E8B57] hover:bg-[#246e45] text-white font-bold text-sm shadow-md transition-all"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Top Value Banner for Tutors */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#E8E1D5] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EAE2D4] text-[#2E8B57] flex items-center justify-center shrink-0">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#18181B]">Rs. 40k–90k+/mo</p>
                  <p className="text-[11px] text-[#71717A]">Competitive hourly pay</p>
                </div>
              </div>
              <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#E8E1D5] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#18181B]">Flexible Hours</p>
                  <p className="text-[11px] text-[#71717A]">Teach around classes</p>
                </div>
              </div>
              <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#E8E1D5] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                  <BookCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#18181B]">Verified Badge</p>
                  <p className="text-[11px] text-[#71717A]">CV &amp; career booster</p>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 shadow-xl border border-[#E8E1D5] space-y-8">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2E8B57] bg-emerald-50 px-3 py-1 rounded-full">
                  Join Elite University Mentors
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Apply to Become an Apex Tutor
                </h1>
                <p className="text-sm text-slate-600">
                  Empower Matric &amp; FSc students in Pakistan while earning flexible, rewarding income.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bilal Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E8B57] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0321 9876543"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E8B57] text-sm"
                    />
                  </div>
                </div>

                {/* University & Degree */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      University Attended / Enrolled *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. LUMS, NUST, AKU, FAST, GIKI"
                      value={formData.university}
                      onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E8B57] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Degree &amp; Major *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. BS Electrical Eng / MBBS / BS CS"
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E8B57] text-sm"
                    />
                  </div>
                </div>

                {/* FSc/Matric marks & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Matric / FSc Score or Grade *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 1020/1100 (FSc) or 3 A*s"
                      value={formData.fscMarks}
                      onChange={(e) => setFormData({ ...formData, fscMarks: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E8B57] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      City of Residence *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E8B57] text-sm bg-white"
                    >
                      <option value="Lahore">Lahore</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Islamabad">Islamabad</option>
                      <option value="Rawalpindi">Rawalpindi</option>
                      <option value="Multan">Multan</option>
                      <option value="Faisalabad">Faisalabad</option>
                      <option value="Bahawalpur">Bahawalpur</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Tutoring Mode */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Available Tutoring Modes
                  </label>
                  <select
                    value={formData.mode}
                    onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E8B57] text-sm bg-white"
                  >
                    <option value="Both Online & Physical">Both Online &amp; In-Person Home Visits</option>
                    <option value="Online Only">Online Only (Digital Whiteboard)</option>
                    <option value="Physical Only">In-Person Only (DHA / Bahria / Islamabad Sectors)</option>
                  </select>
                </div>

                {/* Subjects check boxes */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Subjects You Can Confidently Teach
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {availableSubjects.map((subject) => (
                      <label
                        key={subject}
                        className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                          formData.subjects.includes(subject)
                            ? "border-[#2E8B57] bg-emerald-50 text-[#1a5234]"
                            : "border-slate-200 bg-slate-50/50 text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.subjects.includes(subject)}
                          onChange={() => toggleSubject(subject)}
                          className="rounded text-[#2E8B57] focus:ring-[#2E8B57]"
                        />
                        <span>{subject}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#2E8B57] hover:bg-[#246e45] text-white font-bold text-base shadow-lg shadow-emerald-700/20 hover:shadow-xl transition-all cursor-pointer"
                >
                  Submit Tutor Application
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-[#2E8B57]" />
                  <span>Only university students with verified credentials &amp; CNIC are accepted.</span>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Footer minimal */}
      <footer className="py-6 text-center text-xs text-slate-500 border-t border-slate-200">
        © {new Date().getFullYear()} Apex Tutors Pakistan. All rights reserved.
      </footer>
    </div>
  );
}
