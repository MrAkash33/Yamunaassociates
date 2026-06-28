"use client";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero2.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex h-full items-center">

        <div className="mx-auto max-w-7xl px-6">

          <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm text-yellow-300">
            Trusted Real Estate Partner
          </span>

          <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-tight text-white md:text-7xl">
            Discover Premium Land Investment Opportunities
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Explore YEIDA approved residential and commercial projects
            with maximum growth potential.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black">
              <a href="/projects">
                Explore Projects
              </a>
            </button>

            <button className="rounded-xl border border-white px-8 py-4 text-white"
            >
              <a target="blank" href="https://wa.me/917428452995">
                Contact Us
              </a>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}