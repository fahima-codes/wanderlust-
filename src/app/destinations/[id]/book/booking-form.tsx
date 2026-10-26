'use client';

import * as React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import type { Destination } from '../../card';

export default function BookingForm({
  destination,
}: {
  destination: Destination;
}) {
  const price = destination.price ?? null;

  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [travelers, setTravelers] = React.useState(1);
  const [date, setDate] = React.useState(destination.departureDate ?? '');
  const [confirmed, setConfirmed] = React.useState(false);

  const total = price != null ? price * travelers : null;

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // No backend booking endpoint yet — confirmation is stored locally only.
    setConfirmed(true);
  }

  if (confirmed) {
    return (
      <div className="rounded-md border border-green-200 bg-green-50 p-6">
        <div className="flex items-center gap-2 text-sm font-semibold text-green-700">
          <Check className="size-4" />
          Booking request confirmed
        </div>
        <p className="mt-3 text-sm text-neutral-600">
          {destination.name} — {date || 'date TBD'} · {travelers} traveler
          {travelers > 1 ? 's' : ''}
          {total != null ? ` · $${total} total` : ''}
        </p>
        <p className="mt-4 text-xs text-neutral-500">
          This prototype does not send the booking to a server yet — no payment
          was taken.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="h-fit rounded-md border border-neutral-200 bg-white p-6"
    >
      <p className="text-sm font-semibold text-neutral-900">Booking details</p>

      <label className="mt-5 block">
        <span className="text-xs text-neutral-500">Full name</span>
        <input
          type="text"
          required
          value={fullName}
          onChange={event => setFullName(event.target.value)}
          placeholder="Your name"
          className="mt-1.5 w-full rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-700 outline-none focus:border-cyan-500"
        />
      </label>

      <label className="mt-4 block">
        <span className="text-xs text-neutral-500">Email</span>
        <input
          type="email"
          required
          value={email}
          onChange={event => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="mt-1.5 w-full rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-700 outline-none focus:border-cyan-500"
        />
      </label>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs text-neutral-500">Travelers</span>
          <input
            type="number"
            min={1}
            required
            value={travelers}
            onChange={event => setTravelers(Number(event.target.value) || 1)}
            className="mt-1.5 w-full rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-700 outline-none focus:border-cyan-500"
          />
        </label>

        <label className="block">
          <span className="text-xs text-neutral-500">Departure date</span>
          <input
            type="date"
            required
            value={date}
            onChange={event => setDate(event.target.value)}
            className="mt-1.5 w-full rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-700 outline-none focus:border-cyan-500"
          />
        </label>
      </div>

      <div className="mt-5 border-t border-neutral-200 pt-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-500">
            ${price != null ? price : '—'} × {travelers}
          </span>
          <span className="font-semibold text-neutral-900">
            {total != null ? `$${total}` : '—'}
          </span>
        </div>

        <button
          type="submit"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-600"
        >
          Confirm Booking
          <ArrowRight className="size-4" />
        </button>

        <p className="mt-3 text-xs text-neutral-500">
          Free cancelation up to 7 days before departure.
        </p>
      </div>
    </form>
  );
}
