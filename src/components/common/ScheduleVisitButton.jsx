// components/ScheduleVisitButton.tsx

"use client";

export default function ScheduleVisitButton() {
  return (
    <button
      className="rounded-xl border border-white px-8 py-4 text-white"
      onClick={() => {
        document
          .getElementById("contact-cta")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Schedule Visit
    </button>
  );
}