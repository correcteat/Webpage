import type {Metadata} from 'next';
import {getSettings} from '../../lib/settings';
import {pageMeta} from '../../lib/meta';

export const metadata: Metadata = pageMeta({
  title: 'Επικοινωνία',
  description:
    'Κλείσε ραντεβού online ή δια ζώσης στα Λαγυνά Θεσσαλονίκης. Τηλέφωνο, email και άμεση κράτηση.',
  path: '/epikoinonia',
});

const prep = [
  ['01', 'Στόχο', 'Τι θέλεις περισσότερο να βελτιώσεις αυτή την περίοδο.'],
  ['02', 'Εικόνα', 'Τυχόν εξετάσεις, συμπτώματα, διατροφικό ιστορικό ή προηγούμενα πλάνα.'],
  ['03', 'Ερωτήσεις', 'Ό,τι σε δυσκολεύει στην καθημερινότητα. Το πιο χρήσιμο σημείο εκκίνησης.'],
];

export default async function Contact() {
  const s = await getSettings();
  const tel = (n: string) => `tel:${n.replace(/\s/g, '')}`;

  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Επικοινωνία · Correct Eat</p>
          <h1>Ας κάνουμε το επόμενο βήμα απλό.</h1>
          <p className="large-copy">
            Διάλεξε τον τρόπο που σε εξυπηρετεί και κλείσε απευθείας το ραντεβού σου.
          </p>
        </div>
      </section>

      <section className="section" id="rantevou">
        <div className="container contact-layout">
          <div className="contact-card">
            <p className="eyebrow">Ραντεβού</p>
            <h2>Online ή δια ζώσης.</h2>
            <p className="large-copy">
              Η πρώτη συνεδρία διαρκεί 60 λεπτά και μπορεί να γίνει online ή στο γραφείο στα Λαγυνά
              Θεσσαλονίκης.
            </p>
            <div className="contact-actions">
              <a className="btn primary btn-large" href={s.calcom} target="_blank" rel="noreferrer">
                Κλείσε ραντεβού ↗
              </a>
              {s.tilefono && (
                <a className="btn ghost btn-large" href={tel(s.tilefono)}>
                  Κάλεσέ με ↗
                </a>
              )}
            </div>
          </div>

          <div className="contact-card">
            {s.tilefono && (
              <div className="contact-item">
                <small>Σταθερό</small>
                <strong>
                  <a href={tel(s.tilefono)}>{s.tilefono}</a>
                </strong>
              </div>
            )}
            {s.kinito && (
              <div className="contact-item">
                <small>Κινητό</small>
                <strong>
                  <a href={tel(s.kinito)}>{s.kinito}</a>
                </strong>
              </div>
            )}
            <div className="contact-item">
              <small>Email</small>
              <strong>
                <a href={`mailto:${s.email}`}>{s.email}</a>
              </strong>
            </div>
            <div className="contact-item">
              <small>Περιοχή γραφείου</small>
              <strong>{s.dieuthinsi}</strong>
            </div>
            <div className="contact-item">
              <small>Instagram</small>
              <strong>
                <a href={s.instagram} target="_blank" rel="noreferrer">
                  @correct_eat
                </a>
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Πριν τη συνεδρία</p>
          <h2 className="section-title">Τι αξίζει να έχεις μαζί σου.</h2>
          <div className="steps">
            {prep.map(([n, title, text]) => (
              <div key={n} className="step">
                <span className="num">{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
