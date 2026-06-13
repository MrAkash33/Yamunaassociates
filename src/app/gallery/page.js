export const metadata = {
  title: "Gallery | Yamuna Associations",
};

const galleryItems = [
  {
    title: "Lush green boulevard",
    description: "Wide tree-lined avenues and landscaped pathways planned for every project.",
  },
  {
    title: "Modern clubhouse",
    description: "Community amenities designed for fitness, socializing, and relaxation.",
  },
  {
    title: "Sunset view plot",
    description: "Premium plots with open views and thoughtful orientation.",
  },
  {
    title: "Retail frontage",
    description: "Street-facing retail plots and commercial spaces for long-term rental income.",
  },
  {
    title: "Resident plaza",
    description: "Open community plazas with seating, fountains, and event spaces.",
  },
];

const galleryNotes = [
  {
    name: "Design quality",
    text: "Each project is planned with premium road widths, landscaped greens, and future-ready infrastructure.",
  },
  {
    name: "Neighbourhood access",
    text: "Our locations are chosen for schools, hospitals, and retail hubs within a 10-minute drive.",
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.14),_transparent_40%)] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Gallery</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Visual highlights from our properties and layouts</h1>
          <p className="mt-5 max-w-3xl text-slate-300 sm:text-lg">Browse concept visuals, project highlights, and location previews arranged for buyers and investors.</p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl grid gap-6 md:grid-cols-3">
          {galleryItems.map((item) => (
            <figure key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/20">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-slate-900" aria-hidden="true" />
              <figcaption className="mt-5 text-white">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-slate-300">{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-2">
          {galleryNotes.map((note) => (
            <article key={note.name} className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20">
              <h3 className="text-2xl font-semibold text-white">{note.name}</h3>
              <p className="mt-4 text-slate-300">{note.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20">
          <h2 className="text-3xl font-bold text-white">Location highlight map</h2>
          <p className="mt-4 text-slate-300">See where our showcased plots, clubhouses, and commercial streets sit in the greater corridor.</p>
          <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
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
