import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Star,
} from 'lucide-react';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Destination } from '../card';
import DeleteButton from './delete-button';
import { EditDestinationDialog } from '@/components/EditDestinationDialog';
const FALLBACK_HIGHLIGHTS = [
  'Luxury beachfront accommodation',
  'Traditional Balinese spa treatment',
  'Sunrise trek to Mount Batur',
  'Visit Uluwatu Temple at sunset',
  'Private beach dinner experience',
];

const PERKS = [
  'Free cancelation up to 7 days',
  'Travel insurance Included',
  '24/7 customer support',
];

export default function DestinationDetails({
  destination,
  id,
}: {
  destination: Destination;
  id: string;
}) {
  const rating = destination.rating ?? 4.9;
  const destName = destination.name;
  const destImage = destination.image || '/images/destinations/image1.png';

  const description =
    destination.description ??
    'Discover the magic of this destination with unforgettable experiences, stunning landscapes, and memories that last a lifetime.';

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 md:px-6">
      <div className="flex items-center justify-between">
        <Link
          href="/destinations"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-600 transition-colors hover:text-neutral-900"
        >
          <ArrowLeft className="size-4" />
          Back to Destinations
        </Link>
        <div className="flex items-center gap-3">
          <EditDestinationDialog />
          <DeleteButton id={id} />
        </div>
      </div>

      <div className="relative mt-5 aspect-video overflow-hidden rounded-lg bg-neutral-100">
        <Image
          src={destImage}
          alt={destName}
          fill
          unoptimized
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="mt-10 grid gap-10 border-b border-neutral-200 pb-14 lg:grid-cols-[1fr_320px]">
        <div>
          <div className="flex items-center gap-1.5 text-neutral-500">
            <MapPin className="size-3.5 shrink-0" />
            <span className="text-xs">{destination.country}</span>
          </div>

          <h1 className="mt-2 font-serif text-4xl text-neutral-900 md:text-5xl">
            {destName}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-neutral-600">
            <span className="inline-flex items-center gap-1.5 font-semibold text-neutral-900">
              <Star className="size-4 fill-current text-green-600" />
              {rating}
            </span>
            <span className="text-neutral-500">(234 reviews)</span>
            <span className="h-4 w-px bg-neutral-300" />
            {destination.duration && (
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-4 text-neutral-500" />
                {destination.duration}
              </span>
            )}
          </div>

          <h2 className="mt-8 text-xl font-semibold text-neutral-900">
            Overview
          </h2>
          <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-neutral-500">
            {description}
          </p>

          <h2 className="mt-8 text-xl font-semibold text-neutral-900">
            Highlights
          </h2>
          <div className="mt-4 grid max-w-xl gap-x-10 gap-y-2.5 sm:grid-cols-2">
            {FALLBACK_HIGHLIGHTS.map(highlight => (
              <div
                key={highlight}
                className="flex items-start gap-2 text-sm text-neutral-600"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-green-600" />
                {highlight}
              </div>
            ))}
          </div>
        </div>

        <aside>
          <div className="rounded-md border border-neutral-200 bg-white p-6">
            <p className="text-xs text-neutral-500">Starting from</p>
            <p className="mt-1 text-3xl font-semibold tracking-tight text-cyan-600">
              {destination.price != null ? `$${destination.price}` : '—'}
            </p>
            <p className="text-xs text-neutral-500">per person</p>

            <input
              type="date"
              defaultValue={destination.departureDate ?? ''}
              className="mt-6 w-full rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-700 outline-none focus:border-cyan-500"
            />

            <Link
              href={`/destinations/${id}/book`} // component props থেকে আসা 'id' ব্যবহার করুন
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-600"
            >
              Book Now
              <ArrowRight className="size-4" />
            </Link>

            <div className="mt-4 grid gap-2">
              {PERKS.map(perk => (
                <div
                  key={perk}
                  className="flex items-start gap-2 text-xs text-neutral-500"
                >
                  <Check className="mt-0.5 size-3.5 shrink-0 text-green-600" />
                  {perk}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
