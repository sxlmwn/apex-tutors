"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, GraduationCap, Sparkles, ArrowRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { backdropVariants, springModalVariants } from "@/lib/motion";

export default function SpringModal() {
  const { isModalOpen, closeModal } = useModal();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    classLevel: "Matric (9th / 10th)",
    city: "Lahore",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      classLevel: "Matric (9th / 10th)",
      city: "Lahore",
    });
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
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto flex items-center justify-center cursor-pointer"
        >
          {/* Spring Modal Card */}
          <motion.div
            key="modal-card"
            variants={springModalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-[#FAF7F2] border border-[#E8E1D5] rounded-3xl shadow-2xl p-6 sm:p-8 text-[#18181B] relative cursor-default overflow-hidden my-auto"
          >
            {/* Subtle decorative glow */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#2E8B57]/10 rounded-full blur-2xl pointer-events-none" />

            {/* Close Button (X) */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#EAE2D4] hover:bg-[#DDD3C2] text-[#18181B] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
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
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-[#2E8B57] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#18181B] tracking-tight">
                  Demo Request Received!
                </h3>
                <p className="text-sm text-[#52525B] max-w-sm mx-auto leading-relaxed">
                  Thanks, <span className="font-bold text-[#18181B]">{formData.name}</span>! We&apos;ll match you with a verified university tutor in{" "}
                  <span className="font-bold text-[#18181B]">{formData.city}</span> soon. Expect a WhatsApp message shortly.
                </p>

                <div className="p-3.5 bg-[#EAE3D6]/70 rounded-2xl border border-[#DDD3C2] text-xs text-[#1E5638] font-semibold flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#2E8B57] shrink-0" />
                  <span>First 45-minute demo class is 100% free!</span>
                </div>

                <div className="pt-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full py-3.5 px-6 rounded-full bg-[#2E8B57] hover:bg-[#236d44] text-white font-bold text-sm shadow-md transition-all active:scale-95"
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
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D4] border border-[#DDD3C2] text-[11px] font-bold text-[#1E5638]">
                    <GraduationCap className="w-3.5 h-3.5 text-[#2E8B57]" />
                    <span>Quick Get Started</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#18181B] tracking-tight">
                    Request Your Tutor
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52525B]">
                    Fill in your details below to get matched with a verified scholar from LUMS, NUST, AKU, FAST, or GIKI.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Student Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#18181B] uppercase tracking-wider mb-1.5">
                      Student Name <span className="text-emerald-700">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ahmed Khan"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8E1D5] focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20 outline-none text-sm text-[#18181B] transition-all placeholder:text-[#A1A1AA]"
                    />
                  </div>

                  {/* WhatsApp Phone */}
                  <div>
                    <label className="block text-xs font-bold text-[#18181B] uppercase tracking-wider mb-1.5">
                      Phone Number (WhatsApp) <span className="text-emerald-700">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0300 1234567"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8E1D5] focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20 outline-none text-sm text-[#18181B] transition-all placeholder:text-[#A1A1AA]"
                    />
                  </div>

                  {/* Class Level & City Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Class Level Dropdown */}
                    <div>
                      <label className="block text-xs font-bold text-[#18181B] uppercase tracking-wider mb-1.5">
                        Class Level
                      </label>
                      <select
                        value={formData.classLevel}
                        onChange={(e) => setFormData({ ...formData, classLevel: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl bg-white border border-[#E8E1D5] focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20 outline-none text-xs sm:text-sm text-[#18181B] transition-all"
                      >
                        <option value="Matric (9th / 10th)">Matric (9th / 10th)</option>
                        <option value="FSc Pre-Engineering">FSc Pre-Engineering</option>
                        <option value="FSc Pre-Medical">FSc Pre-Medical</option>
                        <option value="ICS (Computer Science)">ICS (Computer Science)</option>
                      </select>
                    </div>

                    {/* City Dropdown */}
                    <div>
                      <label className="block text-xs font-bold text-[#18181B] uppercase tracking-wider mb-1.5">
                        City
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl bg-white border border-[#E8E1D5] focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20 outline-none text-xs sm:text-sm text-[#18181B] transition-all"
                      >
                        <option value="Karachi">Karachi</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Islamabad">Islamabad</option>
                        <option value="Rawalpindi">Rawalpindi</option>
                        <option value="Multan">Multan</option>
                        <option value="Faisalabad">Faisalabad</option>
                        <option value="Bahawalpur">Bahawalpur</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#2E8B57] hover:bg-[#236d44] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 group"
                    >
                      <span>Request a Tutor</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                  <p className="text-[11px] text-[#71717A] text-center pt-1">
                    Free demo • Zero advance fee • 100% verified scholars
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
