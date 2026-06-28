"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Headset,
  Phone,
  MessageCircle,
  Mail,
  X,
} from "lucide-react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: .9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: .9 }}
            transition={{ duration: .25 }}
            className="absolute bottom-20 right-0 w-72 overflow-hidden rounded-2xl bg-white shadow-2xl border"
          >
            <div className="border-b p-4">
              <h3 className="font-semibold text-lg">
                Contact Us
              </h3>

              <p className="text-sm text-gray-500">
                We're always here to help.
              </p>
            </div>

            <div className="p-2">

              <a
                href="tel:7428452995"
                className="flex items-center gap-3 rounded-xl p-3 hover:bg-gray-100 transition"
              >
                <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Phone size={18} className="text-blue-600"/>
                </div>

                <div>
                  <p className="font-medium">7428452995</p>
                </div>
              </a>

              <a
                href="https://wa.me/917428452995"
                target="_blank"
                className="flex items-center gap-3 rounded-xl p-3 hover:bg-green-50 transition"
              >
                <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center">
                  <MessageCircle size={18} className="text-green-600"/>
                </div>

                <div>
                  <p className="font-medium">WhatsApp</p>
                </div>
              </a>

              <a
                href="mailto:info@yamunaassociations.com"
                className="flex items-center gap-3 rounded-xl p-3 hover:bg-red-50 transition"
              >
                <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center">
                  <Mail size={18} className="text-red-500"/>
                </div>

                <div>
                  <p className="font-medium">
                    info@yamunaassociations.com
                  </p>
                </div>
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: .95 }}
        onClick={() => setOpen(!open)}
        className="relative overflow-hidden flex items-center gap-3 rounded-full bg-yellow-400 px-5 py-3 shadow-xl animate-contact-glow"
      >

        {/* Water Shine */}
        <span className="absolute inset-0 rounded-full overflow-hidden">
          <span className="absolute left-[-70%] top-0 h-full w-16 rotate-12 bg-white/50 blur-md animate-water-shine"></span>
        </span>

        <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white">
          <Headset size={18}/>
        </div>

        <span className="relative z-10 hidden sm:block font-semibold">
          We're Here
        </span>

        {open && (
          <X size={16} className="relative z-10"/>
        )}
      </motion.button>

    </div>
  );
}