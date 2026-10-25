'use client';

import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote:
      '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
    name: 'Michael Chen',
    location: 'Singapore',
    photo: '/images/person2.png',
  },
  {
    quote:
      '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable." Highly Recommend!"',
    name: 'Sarah Johnson',
    location: 'New York, USA',
    photo: '/images/person1.png',
  },
  {
    quote:
      '"The Santorini Getaway Was Straight Out Of A Postcard. Flawless Transfers, Beautiful Hotels And A Sunset Cruise We Will Never Forget."',
    name: 'Ayesha Rahman',
    location: 'Dhaka, Bangladesh',
    photo: '/images/person1.png',
  },
  {
    quote:
      '"Kyoto In Cherry Blossom Season, Planned To Perfection. Every Temple, Every Meal, Every Moment Felt Handpicked For Us."',
    name: 'Daniel White',
    location: 'Toronto, Canada',
    photo: '/images/person2.png',
  },
];

function TestimonialControls() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();

  const buttonClass = (active: boolean) =>
    cn(
      'grid size-10 place-items-center rounded-full border transition-colors',
      active
        ? 'border-neutral-300 text-neutral-600 hover:border-cyan-500 hover:text-cyan-600'
        : 'border-neutral-200 text-neutral-400'
    );

  return (
    <div className="flex gap-3">
      <button
        type="button"
        aria-label="Previous testimonials"
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        className={buttonClass(canScrollPrev)}
      >
        <ArrowLeft className="size-4" />
      </button>
      <button
        type="button"
        aria-label="Next testimonials"
        disabled={!canScrollNext}
        onClick={scrollNext}
        className={buttonClass(canScrollNext)}
      >
        <ArrowRight className="size-4" />
      </button>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Carousel opts={{ align: 'start' }}>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">
                What Travelers Say
              </h2>
              <p className="mt-2 text-xs text-neutral-500 md:text-sm">
                Real experiences from our happy travelers
              </p>
            </div>

            <TestimonialControls />
          </div>

          <CarouselContent className="mt-10">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name} className="md:basis-1/2">
                <figure className="flex h-full border border-neutral-200 bg-white">
                  <div className="flex flex-1 flex-col p-6">
                    <blockquote className="text-sm leading-relaxed text-neutral-900">
                      {testimonial.quote}
                    </blockquote>
                    <figcaption className="mt-auto pt-8">
                      <p className="text-sm font-semibold text-cyan-600">
                        &mdash; {testimonial.name}
                      </p>
                      <p className="mt-1 text-xs text-neutral-500">
                        {testimonial.location}
                      </p>
                    </figcaption>
                  </div>

                  <div className="relative m-2 ml-0 w-[38%] min-w-32">
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      fill
                      sizes="(min-width: 768px) 38vw, 38vw"
                      className="object-cover"
                    />
                  </div>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
