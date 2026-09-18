"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
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
            className="w-full max-w-lg bg-[#FAF7F2] border border-[#E8E1D5]/80 rounded-3xl p-6 sm:p-10 text-[#18181B] relative cursor-default overflow-hidden my-auto"
          >
            {/* Close Button (X) */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#EAE2D4] hover:bg-[#DDD3C2] text-[#18181B] flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
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
                  Thanks, <span className="font-semibold text-[#18181B]">{formData.name}</span>! We will match you with a verified university tutor in{" "}
                  <span className="font-semibold text-[#18181B]">{formData.city}</span> soon. Expect a WhatsApp message shortly.
                </p>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full py-3.5 px-6 rounded-full bg-[#2E8B57] hover:bg-[#236d44] text-white font-medium text-sm transition-all"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Lead Capture Form */
              <div className="space-y-6">
                {/* Header Info */}
                <div className="space-y-2 pr-8">
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

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Student Name */}
                  <div>
                    <label className="block text-xs font-medium text-[#18181B] uppercase tracking-wider mb-1.5">
                      Student Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ahmed Khan"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8E1D5] focus:border-[#2E8B57] focus:ring-1 focus:ring-[#2E8B57] outline-none text-sm text-[#18181B] transition-all placeholder:text-[#A1A1AA]"
                    />
                  </div>

                  {/* WhatsApp Phone */}
                  <div>
                    <label className="block text-xs font-medium text-[#18181B] uppercase tracking-wider mb-1.5">
                      Phone Number (WhatsApp)
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0300 1234567"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8E1D5] focus:border-[#2E8B57] focus:ring-1 focus:ring-[#2E8B57] outline-none text-sm text-[#18181B] transition-all placeholder:text-[#A1A1AA]"
                    />
                  </div>

                  {/* Class Level & City Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Class Level Dropdown */}
                    <div>
                      <label className="block text-xs font-medium text-[#18181B] uppercase tracking-wider mb-1.5">
                        Class Level
                      </label>
                      <select
                        value={formData.classLevel}
                        onChange={(e) => setFormData({ ...formData, classLevel: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl bg-white border border-[#E8E1D5] focus:border-[#2E8B57] focus:ring-1 focus:ring-[#2E8B57] outline-none text-sm text-[#18181B] transition-all"
                      >
                        <option value="Matric (9th / 10th)">Matric (9th / 10th)</option>
                        <option value="FSc Pre-Engineering">FSc Pre-Engineering</option>
                        <option value="FSc Pre-Medical">FSc Pre-Medical</option>
                        <option value="ICS (Computer Science)">ICS (Computer Science)</option>
                      </select>
                    </div>

                    {/* City Dropdown */}
                    <div>
                      <label className="block text-xs font-medium text-[#18181B] uppercase tracking-wider mb-1.5">
                        City
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl bg-white border border-[#E8E1D5] focus:border-[#2E8B57] focus:ring-1 focus:ring-[#2E8B57] outline-none text-sm text-[#18181B] transition-all"
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
                      className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#2E8B57] hover:bg-[#236d44] text-white font-medium text-sm transition-all active:scale-95 cursor-pointer"
                    >
                      Request a Tutor
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
