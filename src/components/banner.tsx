import { ArrowRight } from 'lucide-react';

const searchFields = [
  { label: 'Location', value: 'Adress, City Or Zip' },
  { label: 'Date/Duration', value: 'Anywhere / 3 days' },
  { label: 'Budget', value: '$0 - $2000' },
  { label: 'People', value: '2-10' },
];

export default function Banner() {
  return (
    <section
      className="relative flex min-h-[520px] flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Banner.png')" }}
    >
      <div className="absolute inset-0 bg-black/30" aria-hidden />

      {/* Heading */}
      <div className="relative mx-auto max-w-3xl px-4 pt-16 text-center md:pt-24">
        <h1 className="text-5xl font-normal text-white drop-shadow-md md:text-6xl">
          Discover Your
          <br />
          Next Adventure
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/90 md:text-base">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded bg-cyan-500 px-7 py-3 text-sm font-semibold text-white uppercase shadow-sm transition-colors hover:bg-cyan-600"
          >
            Explore Now
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded border border-white/40 bg-white/15 px-7 py-3 text-sm font-semibold text-white uppercase backdrop-blur-sm transition-colors hover:bg-white/25"
          >
            View Destination
          </a>
        </div>
      </div>

      {/* Search bar */}
      <div className="relative mt-auto flex flex-col border-t border-white/20 bg-black/40 backdrop-blur-sm md:flex-row">
        {searchFields.map((field) => (
          <div
            key={field.label}
            className="flex-1 border-b border-white/20 px-6 py-3 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
          >
            <p className="text-sm font-medium text-white">{field.label}</p>
            <p className="mt-0.5 text-xs text-white/70">{field.value}</p>
          </div>
        ))}
        <button
          type="button"
          className="w-full bg-cyan-500 px-10 py-4 text-sm font-semibold text-white transition-colors hover:bg-cyan-600 md:w-auto md:self-stretch"
        >
          Search
        </button>
      </div>
    </section>
  );
}
