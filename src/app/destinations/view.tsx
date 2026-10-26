'use client';

import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import DestinationCard, { type Destination } from './card';

const PRICE_RANGES = ['Under $1000', '$1000 - $2000', 'Over $2000'] as const;
const SORT_OPTIONS = [
  'Price: Low to High',
  'Price: High to Low',
  'Rating: High to Low',
  'Name: A to Z',
] as const;

export default function DestinationsView({
  destinations,
}: {
  destinations: Destination[];
}) {
  const [category, setCategory] = React.useState<string | null>(null);
  const [priceRange, setPriceRange] = React.useState<string | null>(null);
  const [sortBy, setSortBy] = React.useState<string | null>(null);

  const categories = React.useMemo(
    () =>
      Array.from(
        new Set(destinations.map(d => d.category).filter(Boolean)),
      ) as string[],
    [destinations],
  );

  const visible = filterAndSort(destinations, category, priceRange, sortBy);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 md:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
        Explore All Destinations
      </h1>
      <p className="mt-2 text-xs text-neutral-600 md:text-sm">
        Find your perfect travel experience from our curated collection
      </p>

      <div className="mt-10 grid divide-neutral-200 rounded-md border border-neutral-200 bg-white divide-y md:grid-cols-3 md:divide-x md:divide-y-0">
        <FilterCell>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full justify-between border-0 bg-transparent p-0 shadow-none">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Categories</SelectItem>
              {categories.map(item => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FilterCell>

        <FilterCell>
          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger className="w-full justify-between border-0 bg-transparent p-0 shadow-none">
              <SelectValue placeholder="Price range" />
            </SelectTrigger>
            <SelectContent>
              {PRICE_RANGES.map(item => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FilterCell>

        <FilterCell>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full justify-between border-0 bg-transparent p-0 shadow-none">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {SORT_OPTIONS.map(item => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FilterCell>
      </div>

      <p className="mt-5 text-sm text-neutral-500 underline">
        Showing {visible.length} destination{visible.length === 1 ? '' : 's'}
      </p>

      <div className="mt-6 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map(destination => (
          <DestinationCard
            key={destination.id}
            destination={destination}
          />
        ))}
        {visible.length === 0 && (
          <p className="col-span-full py-12 text-center text-sm text-neutral-500">
            No destinations match your filters.
          </p>
        )}
      </div>
    </main>
  );
}

function FilterCell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center px-5 py-3 md:px-6">{children}</div>
  );
}

function filterAndSort(
  destinations: Destination[],
  category: string | null,
  priceRange: string | null,
  sortBy: string | null,
) {
  const filtered = destinations.filter(d => {
    if (category && category !== 'All' && d.category !== category)
      return false;
    if (priceRange) {
      const price = Number(d.price) || 0;
      if (priceRange === 'Under $1000' && price >= 1000) return false;
      if (priceRange === '$1000 - $2000' && (price < 1000 || price > 2000))
        return false;
      if (priceRange === 'Over $2000' && price <= 2000) return false;
    }
    return true;
  });

  switch (sortBy) {
    case 'Price: Low to High':
      return [...filtered].sort(
        (a, b) => (Number(a.price) || 0) - (Number(b.price) || 0),
      );
    case 'Price: High to Low':
      return [...filtered].sort(
        (a, b) => (Number(b.price) || 0) - (Number(a.price) || 0),
      );
    case 'Rating: High to Low':
      return [...filtered].sort(
        (a, b) => (Number(b.rating) || 0) - (Number(a.rating) || 0),
      );
    case 'Name: A to Z':
      return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    default:
      return filtered;
  }
}
