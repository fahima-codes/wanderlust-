import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CalendarDays, MapPin, Star } from 'lucide-react';

export type Destination = {
  id: string | number;
  name: string;
  country: string;
  category?: string;
  price?: number | null;
  duration?: string | null;
  rating?: number | null;
  image?: string | null;
  departureDate?: string | null;
  description?: string | null;
};

export default function DestinationCard({
  destination,
}: {
  destination: Destination;
}) {
  const price = destination.price != null ? `$${destination.price}` : null;

  return (
    <article>
      <div className="relative aspect-16/10 overflow-hidden rounded-sm">
        <Image
          src={destination.image || '/images/destinations/image1.png'}
          alt={destination.name}
          fill
          unoptimized
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <span className="absolute right-2.5 top-2.5 z-10 inline-flex items-center gap-1 rounded bg-neutral-900/85 px-2 py-1 text-xs font-semibold text-white">
          {destination.rating ?? 4.5}
          <Star className="size-3 fill-current" />
        </span>
      </div>

      <div className="mt-3.5 flex items-center gap-1.5 text-neutral-500">
        <MapPin className="size-3.5 shrink-0" />
        <span className="text-xs">{destination.country}</span>
      </div>

      <div className="mt-2 flex items-end justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
          {destination.name}
        </h3>
        {price && (
          <p className="shrink-0 text-lg font-semibold tracking-tight text-neutral-900">
            {price}
            <span className="text-[11px] font-normal text-neutral-500">
              /Person
            </span>
          </p>
        )}
      </div>

      {destination.duration && (
        <div className="mt-1.5 flex items-center gap-1.5 text-neutral-500">
          <CalendarDays className="size-3.5 shrink-0" />
          <span className="text-xs">{destination.duration}</span>
        </div>
      )}

      <Link
        href={`/destinations/${destination.id}`}
        className="mt-3.5 inline-flex items-center gap-1 text-xs font-semibold tracking-widest text-cyan-600 uppercase transition-colors hover:text-cyan-700"
      >
        Book Now
        <ArrowUpRight className="size-3.5" />
      </Link>
    </article>
  );
}
