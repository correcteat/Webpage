'use client';

import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import {useEffect, useState} from 'react';
import LedBanner from './LedBanner';

const links: [string, string][] = [
  ['Αρχική', '/'],
  ['Σχετικά με εμένα', '/sxetika-me-emena'],
  ['Ο χώρος μας', '/o-choros-mas'],
  ['Υπηρεσίες', '/ypiresies'],
  ['Άρθρα', '/arthra'],
  ['Επικοινωνία', '/epikoinonia'],
];

export default function Header({bookingUrl}: {bookingUrl: string}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <LedBanner />
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="Correct Eat — Αρχική">
            <Image
              src="/images/logo.jpg"
              alt="Λογότυπο Ευδοξία Τσιτάκη — Διαιτολόγος Διατροφολόγος"
              width={150}
              height={48}
              priority
            />
          </Link>

          <nav className="nav" aria-label="Κύρια πλοήγηση">
            {links.map(([label, href]) => (
              <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>
                {label}
              </Link>
            ))}
            <a className="btn primary" href={bookingUrl} target="_blank" rel="noreferrer">
              Κλείσε ραντεβού ↗
            </a>
          </nav>

          <button
            className="btn ghost mobile-menu-button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Κλείσιμο' : 'Μενού'}
          </button>
        </div>

        {open && (
          <nav id="mobile-menu" className="mobile-nav-drawer" aria-label="Μενού κινητού">
            {links.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
            <a className="btn primary" href={bookingUrl} target="_blank" rel="noreferrer">
              Κλείσε ραντεβού ↗
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
