'use client';

import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'Destinations', href: '#' },
  { label: 'My Bookings', href: '#' },
  { label: 'My Profile', href: '#' },
];

const supportLinks = [
  { label: 'Help Center', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
];

function XIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

function LinkedinIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM7.119 20.452H3.554V9h3.565v11.452Z" />
    </svg>
  );
}

function InstagramIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.5" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-neutral-950 px-6 py-14 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-8">
          {/* Logo + newsletter */}
          <div>
            <p className="font-serif text-5xl leading-none text-white md:text-6xl">
              Wanderlast
            </p>
            <p className="mt-3 text-sm text-neutral-400">
              Your gateway to extraordinary travel experiences around the world.
            </p>

            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-200">
                Newsletter
              </p>
              <p className="mt-1.5 text-xs text-neutral-500">
                Subscribe for exclusive travel deals and inspiration
              </p>
              <form
                className="mt-3 flex max-w-72 items-center bg-neutral-800 pr-1.5"
                onSubmit={(event) => event.preventDefault()}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter email"
                  aria-label="Email address"
                  className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder-neutral-500 outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="grid size-8 shrink-0 place-items-center rounded-full bg-neutral-700 text-neutral-200 transition-colors hover:bg-cyan-600 hover:text-white"
                >
                  <ArrowUpRight className="size-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Quick links */}
          <nav>
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-300">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support */}
          <nav>
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-300">
              Support
            </p>
            <ul className="mt-4 space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-300">
              Contact Us
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="tel:7869011632"
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  786 901 1632
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@wanderland.com"
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  info@wanderland.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex items-center justify-between border-t border-neutral-800 pt-6">
          <p className="text-xs text-neutral-500">
            &copy; 2026 Wanderlust. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-neutral-300">
            <a href="#" aria-label="X (Twitter)" className="transition-colors hover:text-white">
              <XIcon className="size-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-white">
              <LinkedinIcon className="size-4" />
            </a>
            <a href="#" aria-label="Instagram" className="transition-colors hover:text-white">
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
