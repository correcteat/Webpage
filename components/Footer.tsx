import Link from 'next/link';
import Image from 'next/image';
import type {Settings} from '../lib/site-types';

const useful: [string, string][] = [
  ['Αρχική', '/'],
  ['Σχετικά με εμένα', '/sxetika-me-emena'],
  ['Ο χώρος μας', '/o-choros-mas'],
  ['Υπηρεσίες', '/ypiresies'],
  ['Άρθρα', '/arthra'],
];

const legal: [string, string][] = [
  ['Πολιτική Απορρήτου', '/politiki-aporritou'],
  ['Όροι Χρήσης', '/oroi-xrisis'],
  ['Πολιτική Cookies', '/cookies'],
];

export default function Footer({settings}: {settings: Settings}) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Image
              src="/images/logo.jpg"
              alt="Λογότυπο Ευδοξία Τσιτάκη"
              width={140}
              height={45}
            />
            <p>Διατροφή με νόημα. Επιστημονική γνώση, εξατομίκευση και πρακτική εφαρμογή.</p>
          </div>

          <div>
            <b>Χρήσιμα</b>
            {useful.map(([label, href]) => (
              <p key={href}>
                <Link href={href}>{label}</Link>
              </p>
            ))}
          </div>

          <div>
            <b>Επικοινωνία</b>
            <p>📍 {settings.dieuthinsi}</p>
            {settings.tilefono && (
              <p>
                📞 <a href={`tel:${settings.tilefono.replace(/\s/g, '')}`}>{settings.tilefono}</a>
              </p>
            )}
            {settings.kinito && (
              <p>
                📱 <a href={`tel:${settings.kinito.replace(/\s/g, '')}`}>{settings.kinito}</a>
              </p>
            )}
            <p>
              ✉️ <a href={`mailto:${settings.email}`}>{settings.email}</a>
            </p>
            <p>
              <a href={settings.instagram} target="_blank" rel="noreferrer">
                Instagram @correct_eat ↗
              </a>
            </p>
            <p>
              <a className="btn primary" href={settings.calcom} target="_blank" rel="noreferrer">
                Κλείσε ραντεβού ↗
              </a>
            </p>
          </div>

          <div>
            <b>Νομικά</b>
            {legal.map(([label, href]) => (
              <p key={href}>
                <Link href={href}>{label}</Link>
              </p>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Ευδοξία Τσιτάκη. Όλα τα δικαιώματα διατηρούνται.</span>
          <span>Online &amp; δια ζώσης · Correct Eat</span>
        </div>
      </div>
    </footer>
  );
}
