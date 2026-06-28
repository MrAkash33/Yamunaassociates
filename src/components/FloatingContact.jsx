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

  const contacts = [
    {
      icon: Phone,
      title: "+91 7428452995",
      href: "tel:+917428452995",
      color: "text-blue-600",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      href: "https://wa.me/917428452995",
      color: "text-green-600",
      target: "_blank",
    },
    {
      icon: Mail,
      title: "info@yamunaassociations.com",
      href: "mailto:info@yamunaassociations.com",
      color: "text-red-500",
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">

      {/* Contact Card */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="absolute bottom-20 right-0 w-72 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
          >
            <div className="border-b bg-gray-50 px-5 py-4">
              <h3 className="font-semibold text-gray-900">
                Contact Us
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                We're always happy to help.
              </p>
            </div>

            <div className="p-3">

              {contacts.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.target}
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-gray-100"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <Icon size={18} className={item.color} />
                    </div>

                    <span className="text-sm font-medium text-gray-800">
                      {item.title}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}

      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => setOpen(!open)}
        className="flex h-14 items-center gap-3 rounded-full bg-yellow-400 px-5 shadow-xl"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
          <Headset size={18} />
        </div>

        <span className="hidden text-sm font-semibold text-gray-900 sm:block">
          We're Here
        </span>

        {open ? <X size={16} /> : null}
      </motion.button>
    </div>
  );
}