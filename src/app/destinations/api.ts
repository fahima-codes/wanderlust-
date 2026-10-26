import { notFound } from 'next/navigation';
import type { Destination } from './card';
import { findSampleDestination } from './sample-data';

export const BACKEND_URL = 'http://localhost:8000';

export function normalizeDestination(raw: unknown): Destination {
  const d = (raw ?? {}) as Record<string, unknown>;
  return {
    id: (d.id as Destination['id']) ?? (d._id as Destination['id']) ?? d.name,
    name: (d.name as string) ?? (d.destinationName as string) ?? 'Untitled',
    country: (d.country as string) ?? 'Unknown',
    category: (d.category as string) ?? undefined,
    price: d.price == null || d.price === '' ? null : Number(d.price),
    duration: (d.duration as string) ?? null,
    rating: d.rating == null || d.rating === '' ? null : Number(d.rating),
    image:
      (d.imageUrl as string) ??
      (d.image as string) ??
      (d.photo as string) ??
      null,
    departureDate: (d.departureDate as string) ?? null,
    description: (d.description as string) ?? null,
  };
}

export async function fetchDestinations(): Promise<Destination[]> {
  const res = await fetch(`${BACKEND_URL}/destinations`);
  if (!res.ok) throw new Error(`Backend responded with ${res.status}`);
  const body: unknown = await res.json();
  const list = Array.isArray(body)
    ? body
    : ((body as { data?: unknown[] })?.data ?? []);
  return list.map(normalizeDestination);
}

export async function fetchDestination(id: string): Promise<Destination> {
  let data: unknown;
  try {
    const res = await fetch(`${BACKEND_URL}/destinations/${id}`);
    if (!res.ok) notFound(); // backend up, destination genuinely missing → 404
    data = await res.json();
  } catch {
    // Backend dev server (port 8000) not running — fall back to sample data,
    // so /destinations/[id] and /destinations/[id]/book still render.
    const sample = findSampleDestination(id);
    if (!sample) notFound();
    return sample;
  }
  return normalizeDestination(data);
}
