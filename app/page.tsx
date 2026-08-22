import Link from 'next/link';
import Image from 'next/image';
import type {Metadata} from 'next';
import {getSettings} from '../lib/settings';
import {pageMeta} from '../lib/meta';
import {siteUrl} from '../lib/site';

export const metadata: Metadata = pageMeta({
  title: 'Ευδοξία Τσιτάκη | Διαιτολόγος – Διατροφολόγος',
  description:
    'Εξατομικευμένη διατροφική καθοδήγηση με επιστημονική βάση και πρακτική εφαρμογή. Online και δια ζώσης, Λαγυνά Θεσσαλονίκης.',
  path: '/',
});

const quick = [
  ['01', 'Απώλεια βάρους'],
  ['02', 'Γαστρεντερικό'],
  ['03', 'Μεταβολική υγεία'],
  ['04', 'Θηλασμός & εμμηνόπαυση'],
];

const focusAreas = [
  ['01', 'Γαστρεντερικό & IBS', 'Πρακτική διατροφική προσέγγιση για συμπτώματα, καθημερινότητα και καλύτερη σχέση με το φαγητό.'],
  ['02', 'Διαχείριση βάρους', 'Στόχος δεν είναι μια σύντομη δίαιτα, αλλά ένα πλάνο που μπορεί να υποστηρίξει τη ζωή σου μακροπρόθεσμα.'],
  ['03', 'Κλινική διατροφή', 'Εξατομικευμένη υποστήριξη σε χοληστερίνη, υπέρταση, διαβήτη, αναιμία και άλλες παθήσεις.'],
  ['04', 'Γυναίκα & κύκλος ζωής', 'Διατροφική φροντίδα σε θηλασμό, εμμηνόπαυση και σημαντικές μεταβάσεις.'],
  ['05', 'Αθλητική διατροφή', 'Οργάνωση γευμάτων και θρεπτικών συστατικών γύρω από την άσκηση και την καθημερινή ρουτίνα.'],
  ['06', 'Παιδική διατροφή', 'Εκπαίδευση παιδιών και οικογένειας με απλό, ήρεμο και κατάλληλο για την ηλικία τρόπο.'],
];

const steps = [
  ['01', 'Ακούμε', 'Στόχοι, συνήθειες, πρόγραμμα, προτιμήσεις και ό,τι σε δυσκολεύει σήμερα.'],
  ['02', 'Σχεδιάζουμε', 'Ένα πλάνο που χωράει στην πραγματική καθημερινότητά σου και μπορεί να εφαρμοστεί.'],
  ['03', 'Προσαρμόζουμε', 'Η παρακολούθηση γίνεται χώρος για εκπαίδευση, αλλαγές και σταθερή πρόοδο.'],
];

const wins = [
  'Εξατομικευμένο πλάνο',
  'Πρακτικές λύσεις για την ημέρα σου',
  'Δια ζώσης & online συνεδρίες',
  'Συνεχής προσαρμογή στην πορεία σου',
];

export default async function Home() {
  const s = await getSettings();
  const photo = s.fotografia ?? '/images/evdoxia.jpg';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Correct Eat — Ευδοξία Τσιτάκη',
    description: 'Διαιτολόγος – Διατροφολόγος. Εξατομικευμένη διατροφική υποστήριξη.',
    url: siteUrl,
    image: `${siteUrl}/images/logo.jpg`,
    ...(s.tilefono ? {telephone: s.tilefono} : {}),
    email: s.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Λαγυνά',
      addressRegion: 'Θεσσαλονίκη',
      addressCountry: 'GR',
    },
    sameAs: [s.instagram, s.linktree].filter(Boolean),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
      />

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Correct Eat · Διατροφική υποστήριξη</p>
            <h1>
              Η διατροφή σου. <em>Η δική σου λογική.</em>
            </h1>
            <p className="large-copy">
              Εξατομικευμένη διατροφική καθοδήγηση από την Ευδοξία Τσιτάκη, με επιστημονική βάση,
              πρακτική εφαρμογή και χώρο για την πραγματική ζωή.
            </p>
            <div className="hero-actions">
              <a className="btn primary btn-large" href={s.calcom} target="_blank" rel="noreferrer">
                Κλείσε ραντεβού ↗
              </a>
              <Link className="btn ghost btn-large" href="/sxetika-me-emena">
                Γνώρισε την προσέγγισή μου
              </Link>
            </div>
            <div className="hero-proof">
              <span>Επιστημονική προσέγγιση</span>
              <i className="sep" />
              <span>Εξατομίκευση</span>
              <i className="sep" />
              <span>Πρακτικότητα</span>
            </div>
          </div>

          <div className="hero-photo">
            <Image
              src={photo}
              alt="Ευδοξία Τσιτάκη — Διαιτολόγος Διατροφολόγος"
              width={720}
              height={960}
              priority
              sizes="(max-width: 980px) 90vw, 460px"
            />
            <div className="floating-note">
              <small>Η φιλοσοφία μου</small>
              Δεν κυνηγάμε την τελειότητα. Χτίζουμε συνέπεια.
            </div>
          </div>
        </div>
      </section>

      {/* ΓΡΗΓΟΡΗ ΕΠΙΛΟΓΗ */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Αναζητάς υποστήριξη για…</p>
          <h2 className="section-title">Ξεκίνα από αυτό που σε αφορά περισσότερο</h2>
          <div className="quick-strip">
            {quick.map(([n, label]) => (
              <Link key={n} href="/ypiresies" className="quick-card">
                <span className="num">{n}</span>
                {label}
                <b>↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ΠΡΟΣΕΓΓΙΣΗ */}
      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">Η δική μου προσέγγιση</p>
          <h2>Δεν χρειάζεσαι περισσότερους κανόνες. Χρειάζεσαι ένα πλάνο που βγάζει νόημα.</h2>
          <p className="large-copy">
            Η διατροφή είναι κομμάτι της καθημερινότητάς σου — όχι ξεχωριστός κόσμος. Γι’ αυτό το
            πλάνο πρέπει να χωράει στις ώρες σου, στις προτιμήσεις σου, στις κοινωνικές σου στιγμές
            και στις πραγματικές σου ανάγκες.
          </p>
          <p>
            Η δουλειά μας δεν τελειώνει όταν πάρεις ένα πρόγραμμα. Εκεί ξεκινά η ουσιαστική εφαρμογή.
          </p>
          <Link className="text-link" href="/sxetika-me-emena">
            Δες πώς δουλεύω →
          </Link>
        </div>
      </section>

      {/* ΤΟΜΕΙΣ */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Τομείς υποστήριξης</p>
          <h2 className="section-title">Εξειδίκευση με ανθρώπινη ματιά.</h2>
          <p className="section-lead">
            Κάθε άνθρωπος έχει διαφορετικές ανάγκες. Δεν εφαρμόζουμε μία λύση σε όλους.
          </p>
          <div className="card-grid">
            {focusAreas.map(([n, title, text]) => (
              <Link key={n} href="/ypiresies" className="focus-card">
                <span className="num">{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <b>↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ΔΙΑΔΙΚΑΣΙΑ */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Πώς δουλεύουμε</p>
          <h2 className="section-title">Από την πρώτη συζήτηση μέχρι την αλλαγή.</h2>
          <p className="section-lead">
            Δεν χρειάζεται να τα αλλάξεις όλα. Χρειάζεται να βρούμε τις αλλαγές που έχουν νόημα για
            εσένα και μπορούν να διατηρηθούν.
          </p>
          <div className="steps">
            {steps.map(([n, title, text]) => (
              <div key={n} className="step">
                <span className="num">{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ΤΙ ΘΑ ΠΑΡΕΙΣ */}
      <section className="section">
        <div className="container feature-panel">
          <div className="feature-copy">
            <p className="eyebrow light">Τι θα πάρεις από τη συνεργασία</p>
            <h2>
              Όχι απλώς ένα πρόγραμμα. <em>Ένα σύστημα που μπορείς να εφαρμόσεις.</em>
            </h2>
            <p>
              Η εξατομίκευση δεν σημαίνει περισσότερες οδηγίες. Σημαίνει να ξέρεις τι να κάνεις όταν
              η ημέρα δεν πάει όπως την είχες σχεδιάσει.
            </p>
            <div className="check-list">
              {wins.map((w) => (
                <div key={w}>
                  <b>✓</b>
                  {w}
                </div>
              ))}
            </div>
            <a className="btn primary" href={s.calcom} target="_blank" rel="noreferrer">
              Ξεκίνα τη συνεργασία ↗
            </a>
          </div>
          <blockquote className="feature-quote">
            <span aria-hidden="true">“</span>
            <p>
              Η συνέπεια δεν χτίζεται με περισσότερους κανόνες. Χτίζεται όταν η διατροφή σου γίνεται
              αρκετά ρεαλιστική ώστε να μπορείς να την ακολουθείς.
            </p>
            <cite>— Ευδοξία Τσιτάκη</cite>
          </blockquote>
        </div>
      </section>

      {/* ΤΕΛΙΚΟ CTA */}
      <section className="section">
        <div className="container cta-modern">
          <div className="cta-glow" aria-hidden="true" />
          <p className="eyebrow light">Το επόμενο βήμα</p>
          <h2>Η διατροφή μπορεί να γίνει πιο απλή.</h2>
          <p>
            Και μπορεί να γίνει δική σου. Με επιστημονική βάση, πρακτικό σχεδιασμό και μια προσέγγιση
            που βλέπει πρώτα τον άνθρωπο.
          </p>
          <div className="cta-actions">
            <a className="btn primary btn-large" href={s.calcom} target="_blank" rel="noreferrer">
              Κλείσε ραντεβού ↗
            </a>
            <Link className="btn ghost btn-large" href="/epikoinonia">
              Επικοινωνία
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
