import type {Metadata} from 'next';
import {getSettings} from '../../lib/settings';
import {pageMeta} from '../../lib/meta';

export const metadata: Metadata = pageMeta({
  title: 'Υπηρεσίες',
  description:
    'Προγράμματα διατροφής, διατροφικές διαταραχές, κλινική διατροφή, θηλασμός, εμμηνόπαυση, online διατροφή και διαχείριση βάρους.',
  path: '/ypiresies',
});

const folders: {n: string; title: string; items: string[]}[] = [
  {
    n: '01',
    title: 'Προγράμματα διατροφής',
    items: [
      'Παιδική διατροφή',
      'Vegan διατροφή',
      'Νηστεία',
      'Αθλητική διατροφή',
      'Εμμηνόπαυση',
      'Τρίτη ηλικία',
      'Οικογενειακά προγράμματα',
      'Διατροφική εκπαίδευση',
    ],
  },
  {
    n: '02',
    title: 'Διατροφικές διαταραχές',
    items: [
      'Διαταραγμένη σχέση με το φαγητό',
      'Νευρική ανορεξία',
      'Νευρική βουλιμία',
      'Αδηφαγική διαταραχή (binge eating)',
      'Σύνδρομο νυχτερινής υπερφαγίας',
      'Ορθορεξία',
    ],
  },
  {
    n: '03',
    title: 'Κλινική διατροφή',
    items: [
      'Δυσλιπιδαιμία (χοληστερίνη, τριγλυκερίδια)',
      'Υπέρταση',
      'Σακχαρώδης διαβήτης',
      'Αναιμία',
      'Γαστρεντερικές διαταραχές',
      'Καρδιαγγειακά νοσήματα',
      'Παθήσεις πεπτικού συστήματος',
      'Αντιμετώπιση ευερέθιστου εντέρου',
      'Σύνδρομο πολυκυστικών ωοθηκών',
    ],
  },
  {
    n: '04',
    title: 'Θηλασμός',
    items: ['Υπολογισμός αναγκών', 'Θρεπτική διατροφή', 'Απώλεια βάρους'],
  },
  {
    n: '05',
    title: 'Εμμηνόπαυση',
    items: ['Υπολογισμός αναγκών', 'Θρεπτική διατροφή', 'Απώλεια βάρους'],
  },
  {
    n: '06',
    title: 'Online διατροφή',
    items: [
      'Απώλεια βάρους',
      'Πρόσληψη βάρους',
      'Διατήρηση βάρους',
      'Εξατομικευμένο πρόγραμμα, συνταγές, συμβουλευτική, στοχοθεσία',
      'Θα χρειαστείς: οικιακή ζυγαριά και μεζούρα',
    ],
  },
  {
    n: '07',
    title: 'Διαχείριση βάρους',
    items: [
      'Απώλεια βάρους',
      'Πρόσληψη βάρους',
      'Διατήρηση βάρους',
      'Εξατομικευμένο πρόγραμμα, συνταγές, συμβουλευτική, στοχοθεσία',
      'Μετρήσεις με λιπομετρητή InBody 120 και μεζούρα',
    ],
  },
];

const process = [
  ['01', 'Αξιολόγηση', 'Καταγράφουμε το ιστορικό, τους στόχους, τη ρουτίνα, τις δυσκολίες και τις προτεραιότητές σου.'],
  ['02', 'Σχεδιασμός', 'Δημιουργούμε ένα πρακτικό πλαίσιο που μπορείς να εφαρμόσεις στην καθημερινότητα.'],
  ['03', 'Παρακολούθηση', 'Εξετάζουμε τι λειτουργεί και κάνουμε στοχευμένες αλλαγές χωρίς «τιμωρία».'],
  ['04', 'Εκπαίδευση', 'Στόχος είναι να κατανοείς το γιατί πίσω από τις επιλογές και να αποκτάς αυτονομία.'],
];

export default async function Services() {
  const s = await getSettings();

  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Υπηρεσίες · Correct Eat</p>
          <h1>Διατροφική υποστήριξη που προσαρμόζεται σε εσένα.</h1>
          <p className="large-copy">
            Όλες οι υπηρεσίες οργανωμένες σε ξεχωριστούς φακέλους, ώστε να βρίσκεις εύκολα αυτό που
            σε ενδιαφέρει.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Οι υπηρεσίες μου</p>
          <h2 className="section-title">Διάλεξε τον φάκελο που σε αφορά.</h2>
          <p className="section-lead">
            Κάθε φάκελος ανοίγει για να εμφανίσει αναλυτικά τις υπηρεσίες.
          </p>

          <div className="folders">
            {folders.map((f) => (
              <details key={f.n} className="folder">
                <summary>
                  <span className="num">{f.n}</span>
                  <span className="folder-title">{f.title}</span>
                  <span className="folder-icon" aria-hidden="true" />
                </summary>
                <div className="folder-body">
                  <ul>
                    {f.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  <a className="btn primary" href={s.calcom} target="_blank" rel="noreferrer">
                    Συζήτησε τη συνεργασία ↗
                  </a>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Η διαδικασία</p>
          <h2 className="section-title">Από την πρώτη συνεδρία μέχρι την ουσιαστική αλλαγή.</h2>
          <p className="section-lead">
            Η παρακολούθηση δεν είναι έλεγχος. Είναι χώρος για προσαρμογή, εκπαίδευση και σταθερή
            πρόοδο.
          </p>
          <div className="steps four">
            {process.map(([n, title, text]) => (
              <div key={n} className="step">
                <span className="num">{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-modern">
          <div className="cta-glow" aria-hidden="true" />
          <p className="eyebrow light">Δεν ξέρεις από πού να ξεκινήσεις;</p>
          <h2>Ξεκίνα με μια συζήτηση.</h2>
          <p>
            Πες μου τι σε απασχολεί και ποιος είναι ο στόχος σου. Από εκεί καθορίζουμε το κατάλληλο
            πλαίσιο συνεργασίας.
          </p>
          <div className="cta-actions">
            <a className="btn primary btn-large" href={s.calcom} target="_blank" rel="noreferrer">
              Κλείσε ραντεβού ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
