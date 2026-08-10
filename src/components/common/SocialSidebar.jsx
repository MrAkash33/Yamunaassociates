"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/Yamunassociates",
    bg: "bg-blue-600",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/yamuna_associates/",
    bg: "bg-pink-600",
  },
  // {
  //   name: "LinkedIn",
  //   icon: FaLinkedinIn,
  //   href: "https://linkedin.com",
  //   bg: "bg-blue-700",
  // },
  // {
  //   name: "YouTube",
  //   icon: FaYoutube,
  //   href: "https://youtube.com",
  //   bg: "bg-red-600",
  // },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/918700088376",
    bg: "bg-green-500",
  },
];

export default function SocialSidebar() {
  return (
    <>
      {/* Desktop */}

      <div className="fixed right-0 top-1/2 z-[999] hidden -translate-y-1/2 lg:flex flex-col gap-4">
        {socialLinks.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center"
            >
              <span
                className="
                mr-3
                max-w-0
                overflow-hidden
                whitespace-nowrap
                rounded-lg
                bg-black/80
                px-0
                py-2
                text-sm
                text-white
                transition-all
                duration-300
                group-hover:max-w-[120px]
                group-hover:px-3
              "
              >
                {item.name}
              </span>

              <div
                className={`
                ${item.bg}
                flex h-12 w-12 items-center justify-center
                rounded-full
                text-white
                shadow-xl
                transition-all
                duration-300
                hover:scale-110
              `}
              >
                <Icon size={20} />
              </div>
            </a>
          );
        })}
      </div>

      {/* Mobile */}

      <div
        className="
        fixed
        bottom-4
        left-1/2
        z-[999]
        flex
        -translate-x-1/2
        gap-3
        rounded-full
        border
        border-white/10
        bg-black/70
        px-4
        py-3
        backdrop-blur-xl
        lg:hidden
      "
      >
        {socialLinks.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
              ${item.bg}
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              text-white
              shadow-lg
              transition-transform
              hover:scale-110
            `}
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    </>
  );
}