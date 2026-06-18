"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menus = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Available Plots", href: "/available-plots" },
    { label: "Maps", href: "/maps" },
    { label: "Services", href: "/services" },
    { label: "Blogs", href: "/blogs" },
    { label: "FAQ", href: "/faq" },
    { label: "Gallery", href: "/gallery" },
    { label: "About Us", href: "/about-us" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed top-5 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2">
        <div
          className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl"
          style={{ padding: "9px 20px" }}
        >
          <div>
            <img
              src="/goldlogo.png"
              alt="Logo"
              style={{ width: "200px", height: "72px" }}
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex items-center gap-8">
            {menus.map((menu) => (
              <Link
                key={menu.label}
                href={menu.href}
                className={`transition duration-300 ${
                  isActive(menu.href)
                    ? "text-yellow-400 font-semibold"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {menu.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            className="hidden xl:block rounded-xl bg-yellow-400 font-semibold text-black"
            style={{ padding: "8px 16px" }}
            onClick={() => {
              document
                .getElementById("contact-cta")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book Site Visit
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="xl:hidden text-white"
          >
            <Menu size={30} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-black transition-all duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-end">
            <button onClick={() => setOpen(false)}>
              <X size={35} className="text-white" />
            </button>
          </div>

          <div className="mt-16 flex flex-col gap-8 text-center">
            {menus.map((menu) => (
              <Link
                key={menu.label}
                href={menu.href}
                onClick={() => setOpen(false)}
                className={`text-2xl transition duration-300 ${
                  isActive(menu.href)
                    ? "text-yellow-400 font-bold"
                    : "text-white"
                }`}
              >
                {menu.label}
              </Link>
            ))}

            <button
              className="mt-8 rounded-xl bg-yellow-400 py-4 font-bold text-black"
              onClick={() => {
                setOpen(false);
                document
                  .getElementById("contact-cta")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book Site Visit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}