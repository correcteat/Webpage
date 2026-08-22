import Image from 'next/image';
import type {Metadata} from 'next';
import {getSettings} from '../../lib/settings';
import {pageMeta} from '../../lib/meta';

export const metadata: Metadata = pageMeta({
  title: 'Ο χώρος μας',
  description:
    'Ένας ζεστός, φωτεινός και προσωπικός χώρος στα Λαγυνά Θεσσαλονίκης, σχεδιασμένος για να νιώθεις άνετα από την πρώτη στιγμή.',
  path: '/o-choros-mas',
});

export default async function Space() {
  const s = await getSettings();

  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Correct Eat</p>
          <h1>Ο χώρος μας</h1>
          <p className="large-copy">
            Ένας ζεστός, ήρεμος και προσωπικός χώρος, σχεδιασμένος για να νιώθεις άνετα από την πρώτη
            στιγμή.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">Η εμπειρία μας</p>
          <h2>Ένας χώρος που δημιουργήθηκε με φροντίδα.</h2>
          <p className="large-copy">
            Στο Correct Eat θέλουμε η διατροφική συμβουλευτική να είναι κάτι περισσότερο από ένα
            ραντεβού. Γι’ αυτό δημιουργήσαμε έναν χώρο φωτεινό και φιλόξενο, όπου μπορούμε να
            συζητήσουμε με ηρεμία, να αξιολογήσουμε την πορεία σου και να δουλέψουμε μαζί πάνω στους
            στόχους σου.
          </p>
        </div>
        <div className="container space-gallery">
          <Image
            src="/images/choros-room.jpg"
            alt="Ο χώρος του Correct Eat στα Λαγυνά Θεσσαλονίκης"
            width={280}
            height={577}
            className="space-photo"
            sizes="(max-width: 600px) 90vw, 360px"
          />
        </div>
      </section>

      <section className="section">
        <div className="container cta-modern">
          <div className="cta-glow" aria-hidden="true" />
          <p className="eyebrow light">Correct Eat</p>
          <h2>Σε περιμένω στον χώρο μας.</h2>
          <p>Κλείσε το ραντεβού σου online ή δια ζώσης.</p>
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
