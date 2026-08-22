import Image from 'next/image';
import type {Metadata} from 'next';
import {getSettings} from '../../lib/settings';
import {pageMeta} from '../../lib/meta';

export const metadata: Metadata = pageMeta({
  title: 'Σχετικά με εμένα',
  description:
    'Η Ευδοξία Τσιτάκη, διαιτολόγος – διατροφολόγος. BSc Dietetics, Queen Margaret University. Εξειδίκευση σε διατροφικές διαταραχές, γαστρεντερικό και μεταβολική υγεία.',
  path: '/sxetika-me-emena',
});

const credentials = [
  ['BSc Dietetics', 'Queen Margaret University, Edinburgh', '2023 · με διάκριση'],
  ['Master Practitioner', 'Eating Disorders & Obesity', 'Διατροφικές διαταραχές & παχυσαρκία'],
  ['Μεταβολομική', 'ΕΚΠΑ · κλινική εφαρμογή', 'Αυτοάνοσα & χρόνια νοσήματα'],
  ['Γαστρεντερικό & μικροβίωμα', 'ΕΚΠΑ · εξειδικευμένη επιμόρφωση', 'Μη νεοπλασματικές παθήσεις ΓΕΣ'],
];

const journey = [
  ['01', 'Σπουδές', 'BSc Dietetics στο Queen Margaret University του Εδιμβούργου, με αποφοίτηση το 2023 και διάκριση.'],
  ['02', 'Κλινική κατεύθυνση', 'Εξειδίκευση στις διατροφικές διαταραχές και την παχυσαρκία, με παράλληλη ενασχόληση με γαστρεντερικές και μεταβολικές ανάγκες.'],
  ['03', 'Συνεχής εκπαίδευση', 'Επιμόρφωση στη μεταβολομική και κλινική εφαρμογή στα αυτοάνοσα και χρόνια νοσήματα, καθώς και στη διατροφή του γαστρεντερικού και το μικροβίωμα.'],
  ['04', 'Ενημέρωση', 'Αρθρογραφία στο blog και δημιουργία εκπαιδευτικού περιεχομένου στα social media.'],
];

const values = [
  ['Ακούω', 'Ξεκινάμε από τη δική σου πραγματικότητα.'],
  ['Εξατομικεύω', 'Το πλάνο προσαρμόζεται στις ανάγκες σου.'],
  ['Εκπαιδεύω', 'Στόχος είναι να αποκτήσεις εργαλεία.'],
  ['Συνεργάζομαι', 'Η παρακολούθηση είναι χώρος για προσαρμογή.'],
];

export default async function About() {
  const s = await getSettings();
  const photo = s.fotografia ?? '/images/evdoxia.jpg';

  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Σχετικά με εμένα · Correct Eat</p>
          <h1>Επιστήμη με χώρο για τον άνθρωπο.</h1>
          <p className="large-copy">
            Η επαγγελματική μου φιλοσοφία ξεκινά από την εξατομίκευση: από το ιστορικό, την
            καθημερινότητα, τις προτιμήσεις και τον πραγματικό στόχο του κάθε ανθρώπου.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-photo">
            <Image
              src={photo}
              alt="Ευδοξία Τσιτάκη — Διαιτολόγος Διατροφολόγος"
              width={720}
              height={960}
              sizes="(max-width: 980px) 90vw, 440px"
            />
          </div>
          <div>
            <p className="eyebrow">Η επαγγελματική μου ταυτότητα</p>
            <h2>Δεν πιστεύω στις έτοιμες λύσεις για όλους.</h2>
            <p>
              Στόχος μου είναι η διατροφική καθοδήγηση να γίνεται κατανοητή, πρακτική και ρεαλιστική.
              Δεν είναι μόνο το «τι θα φας», αλλά το πώς θα μπορέσεις να το εφαρμόσεις στην πραγματική
              σου ζωή, να κατανοήσεις τις επιλογές σου και να αποκτήσεις μεγαλύτερη αυτονομία.
            </p>
            <p>
              Η εκπαίδευση και η συνεχής επιμόρφωση είναι βασικά κομμάτια του τρόπου που δουλεύω,
              ιδιαίτερα σε πεδία όπως το γαστρεντερικό, το μικροβίωμα, η μεταβολική υγεία και οι
              διατροφικές διαταραχές.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Σπουδές & εξειδίκευση</p>
          <h2 className="section-title">Η ακαδημαϊκή βάση.</h2>
          <div className="cred-grid">
            {credentials.map(([title, org, note]) => (
              <div key={title} className="cred-card">
                <h3>{title}</h3>
                <p className="org">{org}</p>
                <p className="note">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Η διαδρομή</p>
          <h2 className="section-title">Μερικοί σταθμοί που διαμόρφωσαν την προσέγγισή μου.</h2>
          <div className="timeline">
            {journey.map(([n, title, text]) => (
              <div key={n} className="timeline-item">
                <span className="num">{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Σε τι δίνω έμφαση</p>
          <h2 className="section-title">Ακρόαση · Εξατομίκευση · Εκπαίδευση · Συνέπεια</h2>
          <div className="value-grid">
            {values.map(([title, text]) => (
              <div key={title} className="value-card">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div style={{marginTop: '2rem'}}>
            <a className="btn primary btn-large" href={s.calcom} target="_blank" rel="noreferrer">
              Κλείσε ραντεβού ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
