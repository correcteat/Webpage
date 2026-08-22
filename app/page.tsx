import Link from 'next/link';
import {articles} from '../lib/articles';

const focusAreas=[
  ['Γαστρεντερικό & IBS','Πρακτική διατροφική προσέγγιση για συμπτώματα, καθημερινότητα και καλύτερη σχέση με το φαγητό.','/ypiresies'],
  ['Απώλεια βάρους','Στόχος δεν είναι μια σύντομη δίαιτα, αλλά ένα πλάνο που μπορεί να υποστηρίξει τη ζωή σου μακροπρόθεσμα.','/ypiresies'],
  ['Μεταβολική υγεία','Εξατομικευμένη διατροφική υποστήριξη με βάση τις ανάγκες, τις συνήθειες και τους στόχους σου.','/ypiresies'],
  ['Γυναίκα & κύκλος ζωής','Διατροφική υποστήριξη σε περιόδους όπως εγκυμοσύνη, θηλασμός και εμμηνόπαυση.','/ypiresies'],
  ['Αθλητική διατροφή','Οργάνωση γευμάτων και πρόσληψης θρεπτικών συστατικών γύρω από την άσκηση και την καθημερινή σου ρουτίνα.','/ypiresies'],
  ['Παιδική διατροφή','Εκπαίδευση παιδιών και οικογένειας με απλό, ήρεμο και κατάλληλο για την ηλικία τρόπο.','/ypiresies'],
];

const steps=[
  ['01','Ακούμε την πραγματική εικόνα','Συζητάμε στόχους, συνήθειες, πρόγραμμα, προτιμήσεις και ό,τι σε δυσκολεύει σήμερα.'],
  ['02','Χτίζουμε το πλάνο','Οι οδηγίες προσαρμόζονται στη δική σου καθημερινότητα — όχι σε ένα έτοιμο template.'],
  ['03','Μαθαίνεις να το διαχειρίζεσαι','Η παρακολούθηση δεν είναι έλεγχος. Είναι χώρος για προσαρμογές, εκπαίδευση και σταθερή πρόοδο.'],
];

const checks=['Εξατομικευμένο πλάνο','Πρακτικές οδηγίες για την καθημερινότητα','Δια ζώσης & online συνεδρίες','Συνεχής προσαρμογή ανάλογα με την πορεία σου'];

export default function Home(){
 const jsonLd={"@context":"https://schema.org","@type":"ProfessionalService","name":"Ευδοξία Τσιτάκη – Διαιτολόγος Διατροφολόγος","url":"https://cor-project.vercel.app","email":"correcteat.nutrition@gmail.com","address":{"@type":"PostalAddress","addressLocality":"Λαγυνά","addressRegion":"Θεσσαλονίκη","addressCountry":"GR"}};
 return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
  <main>
   <section className="hero hero-modern">
    <div className="hero-orb orb-one"/><div className="hero-orb orb-two"/>
    <div className="container hero-grid">
     <div className="hero-copy">
      <div className="eyebrow eyebrow-dark">CORRECT EAT · ΔΙΑΤΡΟΦΙΚΗ ΥΠΟΣΤΗΡΙΞΗ</div>
      <h1>Η διατροφή σου, <em>στα μέτρα της ζωής σου.</em></h1>
      <p className="hero-lead">Εξατομικευμένη διατροφική καθοδήγηση από την Ευδοξία Τσιτάκη, με επιστημονική βάση, πρακτική εφαρμογή και χώρο για την πραγματική ζωή.</p>
      <div className="hero-actions"><Link className="btn primary btn-large" href="/epikoinonia#rantevou">Κλείσε ραντεβού <span>↗</span></Link><Link className="btn glass-btn btn-large" href="/sxetika-me-emena">Γνώρισε την προσέγγισή μου</Link></div>
      <div className="hero-proof"><span className="proof-dot"/> Επιστημονική προσέγγιση <span/> Εξατομίκευση <span/> Πρακτικότητα</div>
     </div>
     <div className="hero-visual">
      <div className="hero-photo-large"><img src="/evdoxia.jpg" alt="Ευδοξία Τσιτάκη – Διαιτολόγος Διατροφολόγος"/></div>
      <div className="floating-note glass-surface"><small>Η φιλοσοφία μου</small><strong>Δεν κυνηγάμε την τελειότητα.<br/>Χτίζουμε συνέπεια.</strong></div>
      <div className="floating-badge">✓ <span>Προσωπική<br/>προσέγγιση</span></div>
     </div>
    </div>
   </section>

   <section className="quick-strip"><div className="container quick-grid"><div><small>ΑΝΑΖΗΤΑΣ ΥΠΟΣΤΗΡΙΞΗ ΓΙΑ...</small><strong>Βρες τον τομέα που σε ενδιαφέρει</strong></div>{['Απώλεια βάρους','Γαστρεντερικό','Μεταβολική υγεία','Εγκυμοσύνη & θηλασμός'].map((x,i)=><Link key={x} href="/ypiresies" className="quick-item"><span>0{i+1}</span>{x}<b>↗</b></Link>)}</div></section>

   <section className="section intro-section"><div className="container intro-grid"><div><div className="eyebrow">Η δική μου προσέγγιση</div><h2>Η διατροφή δεν είναι μια λίστα με «σωστά» και «λάθος».</h2></div><div><p className="large-copy">Είναι ένα κομμάτι της καθημερινότητάς σου. Γι’ αυτό το πλάνο πρέπει να χωράει στις ώρες σου, στις προτιμήσεις σου, στις κοινωνικές σου στιγμές και στις πραγματικές σου ανάγκες.</p><p className="muted">Η δουλειά μας δεν τελειώνει όταν πάρεις ένα πρόγραμμα. Εκεί ξεκινά η ουσιαστική εφαρμογή του.</p><Link className="text-link" href="/sxetika-me-emena">Δες πώς δουλεύω →</Link></div></div></section>

   <section className="section section-soft"><div className="container"><div className="section-head modern-head"><div><div className="eyebrow">Τομείς υποστήριξης</div><h2>Εξειδικευμένη καθοδήγηση,<br/>χωρίς μία λύση για όλους.</h2></div><p>Κάθε τομέας έχει διαφορετικές ανάγκες. Η προσέγγιση ξεκινά από τη δική σου εικόνα και προσαρμόζεται στην πορεία.</p></div><div className="focus-grid">{focusAreas.map(([title,text,href],i)=><Link className="focus-card" href={href} key={title}><span className="focus-number">0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div><span className="circle-arrow">↗</span></Link>)}</div></div></section>

   <section className="section method-section"><div className="container"><div className="method-top"><div><div className="eyebrow">Πώς δουλεύουμε</div><h2>Από την πρώτη συζήτηση<br/>μέχρι την αλλαγή.</h2></div><div className="method-intro"><span>Δεν χρειάζεται να τα αλλάξεις όλα.</span><p>Χρειάζεται να βρούμε τις αλλαγές που έχουν νόημα για εσένα και μπορούν να διατηρηθούν.</p></div></div><div className="steps-grid">{steps.map(([n,t,d])=><article className="step" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

   <section className="section split-feature"><div className="container feature-panel"><div className="feature-copy"><div className="eyebrow">Τι θα πάρεις από τη συνεργασία</div><h2>Όχι απλώς ένα πρόγραμμα. <em>Ένα σύστημα που μπορείς να εφαρμόσεις.</em></h2><p>Η εξατομίκευση δεν σημαίνει περίπλοκες οδηγίες. Σημαίνει να ξέρεις τι να κάνεις όταν η ημέρα δεν πάει όπως την είχες σχεδιάσει.</p><div className="check-list">{checks.map(c=><div key={c}><b>✓</b>{c}</div>)}</div><Link className="btn primary" href="/epikoinonia#rantevou">Ξεκίνα τη συνεργασία ↗</Link></div><div className="feature-quote"><span>“</span><p>Η συνέπεια δεν χτίζεται με περισσότερους κανόνες. Χτίζεται όταν η διατροφή σου γίνεται αρκετά ρεαλιστική ώστε να μπορείς να την ακολουθείς.</p><small>— Ευδοξία Τσιτάκη</small></div></div></section>

   <section className="section articles-section"><div className="container"><div className="section-head modern-head"><div><div className="eyebrow">Correct Eat Journal</div><h2>Άρθρα που μπορεί να σου φανούν χρήσιμα.</h2></div><Link className="btn ghost" href="/arthra">Όλα τα άρθρα ↗</Link></div><div className="article-grid article-grid-modern">{articles.map((a,i)=><Link className="article-card-modern" href={`/arthra/${a.slug}`} key={a.slug}><div className={`article-visual visual-${i%3}`}><span>{a.category}</span></div><div className="article-body"><div className="article-meta">{a.date}</div><h3>{a.title}</h3><p>{a.excerpt}</p><span className="text-link">Διάβασε το άρθρο →</span></div></Link>)}</div></div></section>

   <section className="section final-cta"><div className="container cta-modern"><div className="cta-glow"/><div className="eyebrow eyebrow-dark">ΕΠΟΜΕΝΟ ΒΗΜΑ</div><h2>Έτοιμη/ος να κάνεις τη διατροφή πιο απλή;</h2><p>Μια πρώτη συζήτηση είναι αρκετή για να δούμε τι χρειάζεσαι και ποιο πλαίσιο συνεργασίας σου ταιριάζει.</p><div className="hero-actions"><Link className="btn primary btn-large" href="/epikoinonia#rantevou">Κλείσε ραντεβού ↗</Link><Link className="btn glass-btn btn-large" href="/epikoinonia">Επικοινωνία</Link></div></div></section>
  </main>
 </>
}
