import type {Metadata} from 'next';
import {getSettings} from '../../lib/settings';
import {pageMeta} from '../../lib/meta';

export const metadata: Metadata = pageMeta({
  title: 'Πολιτική Cookies',
  description:
    'Ποια cookies χρησιμοποιεί η ιστοσελίδα Correct Eat και πώς μπορείς να τα διαχειριστείς.',
  path: '/cookies',
});

export default async function Cookies() {
  const s = await getSettings();

  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Νομικά · Correct Eat</p>
          <h1>Πολιτική Cookies</h1>
          <p className="large-copy">Τι αποθηκεύεται στη συσκευή σου όταν επισκέπτεσαι το site.</p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow legal">
          <p className="updated">Τελευταία ενημέρωση: Αύγουστος 2026</p>

          <h2>Τι είναι τα cookies</h2>
          <p>
            Τα cookies είναι μικρά αρχεία κειμένου που αποθηκεύονται στη συσκευή σου όταν
            επισκέπτεσαι μια ιστοσελίδα. Χρησιμοποιούνται για να θυμάται η σελίδα προτιμήσεις ή για
            να μετρά την επισκεψιμότητα.
          </p>

          <div className="callout">
            <strong>Η ιστοσελίδα αυτή δεν χρησιμοποιεί cookies παρακολούθησης ή διαφήμισης.</strong>{' '}
            Δεν υπάρχουν cookies τρίτων για marketing, ούτε παρακολούθηση της συμπεριφοράς σου
            ανάμεσα σε διαφορετικά sites.
          </div>

          <h2>Τι χρησιμοποιείται</h2>
          <ul>
            <li>
              <strong>Απολύτως απαραίτητα</strong> — τεχνικά cookies που επιτρέπουν στη σελίδα να
              λειτουργεί σωστά. Δεν απαιτούν τη συγκατάθεσή σου.
            </li>
            <li>
              <strong>Cal.com</strong> — όταν πατήσεις «Κλείσε ραντεβού», μεταφέρεσαι στην πλατφόρμα
              Cal.com, η οποία μπορεί να τοποθετήσει δικά της cookies. Αυτά διέπονται από τη δική της
              πολιτική.
            </li>
          </ul>

          <h2>Πώς τα διαχειρίζεσαι</h2>
          <p>
            Μπορείς να διαγράψεις ή να αποκλείσεις τα cookies από τις ρυθμίσεις του browser σου
            (Chrome, Safari, Firefox, Edge). Η φραγή των απολύτως απαραίτητων cookies μπορεί να
            επηρεάσει τη λειτουργία της σελίδας.
          </p>

          <h2>Ερωτήσεις</h2>
          <p>
            Για οτιδήποτε σχετικό, στείλε μήνυμα στο <a href={`mailto:${s.email}`}>{s.email}</a>.
            Δες επίσης την <a href="/politiki-aporritou">Πολιτική Απορρήτου</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
