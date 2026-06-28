import Image from "next/image";

export const metadata = {
  title: "Gallery | Yamuna Associations",
};

const galleryItems = [
  {
    image: "/videos/1.png",
    title: "Lush Green Boulevard",
    description:
      "Wide tree-lined avenues and landscaped pathways planned for every project.",
  },
  {
    image: "/videos/2.png",
    title: "Modern Clubhouse",
    description:
      "Community amenities designed for fitness, socializing, and relaxation.",
  },
  {
    image: "/videos/3.png",
    title: "Sunset View Plot",
    description:
      "Premium plots with open views and thoughtful orientation.",
  },
  {
    image: "/videos/4.png",
    title: "Retail Frontage",
    description:
      "Street-facing retail plots and commercial spaces for long-term rental income.",
  },
  {
    image: "/videos/5.png",
    title: "Resident Plaza",
    description:
      "Open community plazas with seating, fountains, and event spaces.",
  },
];

const galleryNotes = [
  {
    name: "Design Quality",
    text: "Each project is planned with premium road widths, landscaped greens, and future-ready infrastructure.",
  },
  {
    name: "Neighbourhood Access",
    text: "Our locations are chosen for schools, hospitals, and retail hubs within a 10-minute drive.",
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      {/* Hero */}
      <section className="bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.14),_transparent_40%)] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
            Gallery
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Visual Highlights from Our Properties and Layouts
          </h1>

          <p className="mt-5 max-w-3xl text-slate-300 sm:text-lg">
            Browse concept visuals, project highlights, and location previews
            arranged for buyers and investors.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <figure
              key={item.title}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl shadow-slate-950/20 transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                />
              </div>

              <figcaption className="p-6">
                <h2 className="text-2xl font-semibold text-white">
                  {item.title}
                </h2>

                <p className="mt-3 text-slate-300">{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Notes */}
      <section className="border-t border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          {galleryNotes.map((note) => (
            <article
              key={note.name}
              className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20"
            >
              <h3 className="text-2xl font-semibold text-white">
                {note.name}
              </h3>

              <p className="mt-4 text-slate-300">{note.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20">
          <h2 className="text-3xl font-bold text-white">
            Location Highlight Map
          </h2>

          <p className="mt-4 text-slate-300">
            See where our showcased plots, clubhouses, and commercial streets
            sit in the greater corridor.
          </p>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10">
            <iframe
              src="https://maps.google.com/maps?q=greater%20noida%20sector%2011&t=&z=12&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              className="border-0"
              title="Gallery location map"
            />
          </div>
        </div>
      </section>
    </main>
  );
}