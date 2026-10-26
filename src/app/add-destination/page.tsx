'use client';

import * as React from 'react';
import { Trash2, PackagePlus } from 'lucide-react';

import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const categories = [
  'Beach',
  'Mountain',
  'City',
  'Cultural',
  'Adventure',
  'Cruise',
];

export default function AddDestinationPage() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [category, setCategory] = React.useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.currentTarget));
    const finalData = {
      ...formData,
      category,
    };

    console.log('Sending to backend:', finalData);

    try {
      const res = await fetch('http://localhost:8000/add-destination', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      });

      const result = await res.json();
      console.log('Backend response:', result);

      if (result.success) {
        alert('Package Added Successfully!');
        formRef.current?.reset();
        setCategory(null);
      }
    } catch (error) {
      console.error('Failed to add package:', error);
      alert('Failed to connect to server. Is nodemon running on port 8000?');
    }
  };

  function handleCancel() {
    formRef.current?.reset();
    setCategory(null);
  }

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 md:px-6">
      <h1 className="text-3xl font-normal tracking-tight text-neutral-900 md:text-4xl">
        Add New Travel Package
      </h1>

      <Card className="mx-auto mt-12 max-w-2xl px-6 py-6 shadow-sm md:px-8 md:py-8">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid gap-5 md:grid-cols-2"
        >
          {/* Destination Name */}
          <div className="grid gap-1.5 md:col-span-2">
            <Label htmlFor="destination-name">Destination Name</Label>
            <Input
              id="destination-name"
              name="destinationName"
              placeholder="Bali Paradise"
              required
            />
          </div>

          {/* Country */}
          <div className="grid gap-1.5">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              name="country"
              placeholder="Indonesia"
              required
            />
          </div>

          {/* Category */}
          <div className="grid gap-1.5">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="category" className="w-full">
                <SelectValue placeholder="Beach" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(item => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price */}
          <div className="grid gap-1.5">
            <Label htmlFor="price">Price (USD)</Label>
            <Input
              id="price"
              name="price"
              type="number"
              min="0"
              placeholder="e.g., 1299"
            />
          </div>

          {/* Duration */}
          <div className="grid gap-1.5">
            <Label htmlFor="duration">Duration</Label>
            <Input
              id="duration"
              name="duration"
              placeholder="e.g., 7 Days/6 Nights"
            />
          </div>

          {/* Departure Date */}
          <div className="grid gap-1.5 md:col-span-2">
            <Label htmlFor="departure-date">Departure Date</Label>
            <Input id="departure-date" name="departureDate" type="date" />
          </div>

          {/* Image URL */}
          <div className="grid gap-1.5 md:col-span-2">
            <Label htmlFor="image-url">Image URL</Label>
            <Input
              id="image-url"
              name="imageUrl"
              type="url"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Description */}
          <div className="grid gap-1.5 md:col-span-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe the travel experience..."
              className="field-sizing-fixed h-28 min-h-28"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 md:col-span-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="border-destructive/30 px-5 text-destructive hover:bg-destructive/10 hover:text-destructive"
            >
              <Trash2 />
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-cyan-500 px-5 text-white hover:bg-cyan-600"
            >
              <PackagePlus />
              Add Travel Package
            </Button>
          </div>
        </form>
      </Card>
    </main>
  );
}
