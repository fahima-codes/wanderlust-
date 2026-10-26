import { ArrowLeft, CalendarDays, MapPin, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchDestination } from '../../api';
import BookingForm from './booking-form';

export default async function BookPage({
  params,
}: PageProps<'/destinations/[id]/book'>) {
  const { id } = await params;
  const destination = await fetchDestination(id);
  const image = destination.image || '/images/destinations/image1.png';

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 md:px-6">
      <Link
        href={`/destinations/${id}`}
        className="inline-flex items-center gap-1.5 text-sm text-neutral-600 transition-colors hover:text-neutral-900"
      >
        <ArrowLeft className="size-4" />
        Back to Details
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
        Book Your Trip
      </h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_380px]">
        <div className="rounded-md border border-neutral-200 bg-white">
          <div className="relative aspect-video overflow-hidden rounded-t-md bg-neutral-100">
            <Image
              src={image}
              alt={destination.name}
              fill
              unoptimized
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <div className="flex items-center gap-1.5 text-neutral-500">
              <MapPin className="size-3.5 shrink-0" />
              <span className="text-xs">{destination.country}</span>
            </div>

            <h2 className="mt-2 text-2xl font-semibold text-neutral-900">
              {destination.name}
            </h2>

            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-neutral-600">
              <span className="inline-flex items-center gap-1.5 font-semibold text-neutral-900">
                <Star className="size-4 fill-current text-green-600" />
                {destination.rating ?? 4.9}
              </span>
              {destination.duration && (
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-4 text-neutral-500" />
                  {destination.duration}
                </span>
              )}
            </div>

            {destination.description && (
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-500">
                {destination.description}
              </p>
            )}

            <div className="mt-6 border-t border-neutral-200 pt-4">
              <p className="text-xs text-neutral-500">Starting from</p>
              <p className="mt-1 text-3xl font-semibold tracking-tight text-cyan-600">
                {destination.price != null ? `$${destination.price}` : '—'}
              </p>
              <p className="text-xs text-neutral-500">per person</p>
            </div>
          </div>
        </div>

        <BookingForm destination={destination} />
      </div>
    </main>
  );
}
