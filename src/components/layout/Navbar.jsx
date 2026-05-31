"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menus = [
    "Home",
    "Projects",
    "Available Plots",
    "Maps",
    "Services",
    "Blogs",
    "FAQ",
    "Gallery",
    "About Us",
  ];

  return (
    <>
      <header className="fixed top-5 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2">

        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl" style={{padding:"15px 15px"}}>

          <div>
            <h2 className="text-2xl font-bold text-yellow-400">
              Yamuna Associations
            </h2>
          </div>

          <nav className="hidden xl:flex items-center gap-8 text-white">

            {menus.map((menu) => (
              <a
                key={menu}
                href="#"
                className="transition hover:text-yellow-400"
              >
                {menu}
              </a>
            ))}
          </nav>
            <button
              className="hidden xl:block rounded-xl bg-yellow-400 font-semibold text-black"
              style={{
                padding: "8px 16px",
              }}
            >
              Book Site Visit
            </button>

          <button
            onClick={() => setOpen(true)}
            className="xl:hidden text-white"
          >
            <Menu size={30} />
          </button>
        </div>
      </header>

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
              <a
                key={menu}
                href="#"
                className="text-2xl text-white"
              >
                {menu}
              </a>
            ))}

            <button className="mt-8 rounded-xl bg-yellow-400 py-4 font-bold text-black">
              Book Site Visit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}