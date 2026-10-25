import { ArrowRight } from 'lucide-react';

export default function Cta() {
  return (
    <section
      className="relative flex min-h-[320px] flex-col items-center justify-center bg-cover bg-center px-4 py-20 text-center"
      style={{ backgroundImage: "url('/images/CTA.png')" }}
    >
      <div className="absolute inset-0 bg-black/25" />
      <h2 className="relative font-serif text-3xl text-white md:text-4xl">
        Ready To Start Your Journey?
      </h2>
      <p className="relative mt-3 max-w-md text-xs text-white/80 md:text-sm">
        Join thousands of travelers who have discovered the world with us
      </p>
      <a
        href="#"
        className="relative mt-8 inline-flex items-center gap-2 bg-white px-8 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-900 transition-colors hover:bg-neutral-100 md:text-sm"
      >
        Book Your Trip Today
        <ArrowRight className="size-4" />
      </a>
    </section>
  );
}
