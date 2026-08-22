'use client';

import { useEffect, useState } from 'react';
import './space.css';

export default function OChorosMasPage() {
  const [roomImage, setRoomImage] = useState('');

  useEffect(() => {
    fetch('/choros/room1.jpg.b64')
      .then((response) => response.text())
      .then((base64) => setRoomImage(`data:image/jpeg;base64,${base64.trim()}`))
      .catch(() => setRoomImage(''));
  }, []);

  return (
    <main className="space-page">
      <section className="space-hero">
        <div className="space-hero-overlay" />
        <div className="container space-hero-content">
          <span className="space-kicker">CORRECT EAT</span>
          <h1>Ο χώρος μας</h1>
          <p>Ένας ζεστός, ήρεμος και προσωπικός χώρος, σχεδιασμένος για να νιώθεις άνετα από την πρώτη στιγμή.</p>
        </div>
      </section>

      <section className="container space-intro">
        <div>
          <span className="space-kicker">Η εμπειρία μας</span>
          <h2>Ένας χώρος που δημιουργήθηκε με φροντίδα.</h2>
        </div>
        <p>
          Στο Correct Eat θέλουμε η διατροφική συμβουλευτική να είναι κάτι περισσότερο από ένα ραντεβού.
          Γι’ αυτό δημιουργήσαμε έναν χώρο φωτεινό και φιλόξενο, όπου μπορούμε να συζητήσουμε με ηρεμία,
          να αξιολογήσουμε την πορεία σου και να δουλέψουμε μαζί πάνω στους στόχους σου.
        </p>
      </section>

      <section className="container space-gallery" aria-label="Φωτογραφία του χώρου μας">
        <figure className="space-photo space-collage">
          {roomImage && <img src={roomImage} alt="Ο χώρος του Correct Eat" loading="eager" />}
        </figure>
      </section>

      <section className="space-cta">
        <div className="container space-cta-inner">
          <div>
            <span className="space-kicker">CORRECT EAT</span>
            <h2>Σε περιμένω στον χώρο μας.</h2>
            <p>Κλείσε το ραντεβού σου online ή δια ζώσης.</p>
          </div>
          <a className="btn primary" href="https://cal.com/ευδοξια-τσιτακη-mhw6ym">Κλείσε ραντεβού ↗</a>
        </div>
      </section>
    </main>
  );
}
