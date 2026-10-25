import { User } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#', active: true },
  { label: 'Destinations', href: '#' },
  { label: 'My Bookings', href: '#' },
  { label: 'Admin', href: '#' },
];

export default function Navbar() {
  return (
    <header className="relative z-10 flex h-14 items-center border-b border-neutral-200 bg-white px-4 md:px-6">
      <nav className="flex flex-1 items-center gap-5 text-sm">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={
              link.active
                ? 'font-medium text-cyan-600'
                : 'text-neutral-700 transition-colors hover:text-cyan-600'
            }
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a href="#" className="text-2xl font-bold tracking-tight text-cyan-600">
        Wanderlast
      </a>

      <div className="flex flex-1 items-center justify-end gap-4 text-sm text-neutral-700">
        <a href="#" className="flex items-center gap-1.5 transition-colors hover:text-cyan-600">
          <User className="size-4" />
          Profile
        </a>
        <span className="h-4 w-px bg-neutral-300" aria-hidden />
        <a href="#" className="transition-colors hover:text-cyan-600">
          Login
        </a>
        <span className="h-4 w-px bg-neutral-300" aria-hidden />
        <a href="#" className="transition-colors hover:text-cyan-600">
          Sign Up
        </a>
      </div>
    </header>
  );
}
