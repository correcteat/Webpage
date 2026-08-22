import type {Metadata} from 'next';
import {Manrope, Literata} from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {getSettings} from '../lib/settings';
import {siteUrl, siteName} from '../lib/site';
import './globals.css';

const sans = Manrope({
  subsets: ['greek', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const serif = Literata({
  subsets: ['greek', 'latin'],
  weight: ['500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ευδοξία Τσιτάκη | Διαιτολόγος – Διατροφολόγος',
    template: '%s | Ευδοξία Τσιτάκη',
  },
  description:
    'Εξατομικευμένη διατροφική υποστήριξη με επιστημονική προσέγγιση και πρακτική εφαρμογή. Λαγυνά Θεσσαλονίκης, online και δια ζώσης.',
  openGraph: {type: 'website', locale: 'el_GR', siteName},
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const settings = await getSettings();
  return (
    <html lang="el" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Μετάβαση στο περιεχόμενο
        </a>
        <Header bookingUrl={settings.calcom} />
        <div id="main">{children}</div>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
