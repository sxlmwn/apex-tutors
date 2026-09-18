"use client";

import { useState } from "react";
import Link from "next/link";
import { GraduationCap, ArrowLeft, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";

export default function SignUpPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "Lahore",
    area: "",
    grade: "FSc Pre-Medical",
    board: "Federal Board (FBISE)",
    mode: "Online (1-on-1)",
    notes: "",
  });

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
              Free Demo Request Received!
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto">
              Thank you, <span className="font-bold text-slate-800">{formData.name}</span>. An Apex academic advisor will call or WhatsApp you at <span className="font-bold text-slate-800">{formData.phone}</span> within 2 hours to confirm your tutor match and demo time.
            </p>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-xs text-emerald-800 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-[#2E8B57]" />
              <span>Remember: Your 45-minute demo class is 100% free with zero upfront payment.</span>
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
          <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 shadow-xl border border-[#E8E1D5] space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2E8B57] bg-emerald-50 px-3 py-1 rounded-full">
                Zero Financial Obligation
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
                Find Your Tutor &amp; Book Free Demo
              </h1>
              <p className="text-sm text-slate-600">
                Fill in your learning requirements below. We will match you with a vetted university student mentor within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Student / Parent Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Mahmood"
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
                    placeholder="e.g. 0300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E8B57] text-sm"
                  />
                </div>
              </div>

              {/* City & Area */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    City *
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
                    <option value="Other">Other City (Online)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Area / Sector / Society
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. DHA Phase 5 / Bahria Town"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E8B57] text-sm"
                  />
                </div>
              </div>

              {/* Grade & Board */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Academic Grade / Track *
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E8B57] text-sm bg-white"
                  >
                    <option value="FSc Pre-Medical">FSc Pre-Medical (Part 1/2)</option>
                    <option value="FSc Pre-Engineering">FSc Pre-Engineering (Part 1/2)</option>
                    <option value="ICS">ICS Computer Science</option>
                    <option value="Matric Science 10th">Matric Science (10th)</option>
                    <option value="Matric Science 9th">Matric Science (9th)</option>
                    <option value="Matric Arts/General">Matric Arts / General</option>
                    <option value="O/A Levels">O / A Levels (Bridging)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Examination Board *
                  </label>
                  <select
                    value={formData.board}
                    onChange={(e) => setFormData({ ...formData, board: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E8B57] text-sm bg-white"
                  >
                    <option value="Federal Board (FBISE)">Federal Board (FBISE)</option>
                    <option value="Punjab Board (BISE Lahore)">Punjab Board (BISE Lahore)</option>
                    <option value="BISE Rawalpindi">BISE Rawalpindi</option>
                    <option value="BISE Multan">BISE Multan</option>
                    <option value="BISE Faisalabad">BISE Faisalabad</option>
                    <option value="BISE Bahawalpur">BISE Bahawalpur</option>
                    <option value="Sindh Board (BSEK/BIEK)">Sindh Board (BSEK / BIEK)</option>
                    <option value="AKU-EB">Aga Khan Board (AKU-EB)</option>
                  </select>
                </div>
              </div>

              {/* Tutoring Mode */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Preferred Tutoring Mode
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Online (1-on-1 Interactive)", "In-Person Physical (Home Visit)"].map((modeOption) => (
                    <label
                      key={modeOption}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer text-xs font-semibold transition-all ${
                        formData.mode === modeOption
                          ? "border-[#2E8B57] bg-emerald-50 text-[#1a5234]"
                          : "border-slate-200 bg-slate-50/50 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="mode"
                        value={modeOption}
                        checked={formData.mode === modeOption}
                        onChange={() => setFormData({ ...formData, mode: modeOption })}
                        className="text-[#2E8B57] focus:ring-[#2E8B57]"
                      />
                      <span>{modeOption}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Notes / Particular Needs */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Specific Subjects or Topics Needing Focus
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Need urgent help with Physics numericals and Chemistry Organic chapters for upcoming Pre-Board..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E8B57] text-sm"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#2E8B57] hover:bg-[#246e45] text-white font-bold text-base shadow-lg shadow-emerald-700/20 hover:shadow-xl transition-all cursor-pointer"
              >
                Schedule My Free 45-Minute Demo Class
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-[#2E8B57]" />
                <span>Your information is strictly private. No fees until you approve the demo.</span>
              </div>
            </form>
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
