import Link from 'next/link';
import {articles} from '../lib/articles';

const focusAreas=[
 ['Γαστρεντερικό & IBS','Πρακτική διατροφική προσέγγιση για συμπτώματα, καθημερινότητα και καλύτερη σχέση με το φαγητό.'],
 ['Απώλεια βάρους','Στόχος δεν είναι μια σύντομη δίαιτα, αλλά ένα πλάνο που μπορεί να υποστηρίξει τη ζωή σου μακροπρόθεσμα.'],
 ['Μεταβολική υγεία','Εξατομικευμένη υποστήριξη με βάση ανάγκες, συνήθειες και στόχους — χωρίς υπερβολές.'],
 ['Γυναίκα & κύκλος ζωής','Διατροφική φροντίδα σε εγκυμοσύνη, θηλασμό, εμμηνόπαυση και σημαντικές μεταβάσεις.'],
 ['Αθλητική διατροφή','Οργάνωση γευμάτων και θρεπτικών συστατικών γύρω από την άσκηση και την καθημερινή ρουτίνα.'],
 ['Παιδική διατροφή','Εκπαίδευση παιδιών και οικογένειας με απλό, ήρεμο και κατάλληλο για την ηλικία τρόπο.'],
];

const steps=[
 ['01','Ακούμε','Στόχοι, συνήθειες, πρόγραμμα, προτιμήσεις και ό,τι σε δυσκολεύει σήμερα.'],
 ['02','Σχεδιάζουμε','Ένα πλάνο που χωράει στην πραγματική καθημερινότητά σου και μπορεί να εφαρμοστεί.'],
 ['03','Προσαρμόζουμε','Η παρακολούθηση γίνεται χώρος για εκπαίδευση, αλλαγές και σταθερή πρόοδο.'],
];

const wins=['Εξατομικευμένο πλάνο','Πρακτικές λύσεις για την ημέρα σου','Δια ζώσης & online συνεδρίες','Συνεχής προσαρμογή στην πορεία σου'];
const bookingUrl='https://cal.com/ευδοξια-τσιτακη-mhw6ym/πρωτη-συνεδρια-διατροφης';

export default function Home(){
 const jsonLd={"@context":"https://schema.org","@type":"ProfessionalService","name":"Ευδοξία Τσιτάκη – Διαιτολόγος Διατροφολόγος","url":"https://cor-project.vercel.app","email":"correcteat.nutrition@gmail.com","address":{"@type":"PostalAddress","addressLocality":"Λαγυνά","addressRegion":"Θεσσαλονίκη","addressCountry":"GR"}};
 return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
  <main>
   <section className="hero hero-modern">
    <div className="hero-orb orb-one"/><div className="hero-orb orb-two"/>
    <div className="hero-objects" aria-hidden="true"><span className="float-object o1">Ω3</span><span className="float-object o2">Fe</span><span className="float-object o3">♥</span><span className="float-object o4">Mg</span><span className="float-object o5">+1</span></div>
    <div className="container hero-grid">
     <div className="hero-copy">
      <div className="eyebrow">CORRECT EAT · ΔΙΑΤΡΟΦΙΚΗ ΥΠΟΣΤΗΡΙΞΗ</div>
      <h1>Η διατροφή σου.<br/><em>Η δική σου λογική.</em></h1>
      <p className="hero-lead">Εξατομικευμένη διατροφική καθοδήγηση από την Ευδοξία Τσιτάκη, με επιστημονική βάση, πρακτική εφαρμογή και χώρο για την πραγματική ζωή.</p>
      <div className="hero-actions"><a className="btn primary btn-large" href={bookingUrl}>Κλείσε ραντεβού <span>↗</span></a><Link className="btn glass-btn btn-large" href="/sxetika-me-emena">Γνώρισε την προσέγγισή μου</Link></div>
      <div className="hero-proof"><span className="proof-dot"/> Επιστημονική προσέγγιση <span className="dot"/> Εξατομίκευση <span className="dot"/> Πρακτικότητα</div>
     </div>
     <div className="hero-visual">
      <div className="hero-photo-large"><img src="/evdoxia.jpg" alt="Ευδοξία Τσιτάκη – Διαιτολόγος Διατροφολόγος"/></div>
      <div className="floating-note glass-surface"><small>Η φιλοσοφία μου</small><strong>Δεν κυνηγάμε την τελειότητα.<br/>Χτίζουμε συνέπεια.</strong></div>
      <div className="floating-badge">✓ <span>Προσωπική<br/>προσέγγιση</span></div>
     </div>
    </div>
   </section>

   <section className="led-section" aria-label="Correct Eat μήνυμα"><div className="container"><div className="led-window"><div className="led-window-track"><span><i/> CORRECT EAT</span><span>ΔΙΑΤΡΟΦΗ ΜΕ ΝΟΗΜΑ</span><span>ΕΞΑΤΟΜΙΚΕΥΜΕΝΗ ΠΡΟΣΕΓΓΙΣΗ</span><span>ΕΥΕΛΙΞΙΑ · ΣΥΝΕΠΕΙΑ · ΕΠΙΣΤΗΜΗ</span><span><i/> CORRECT EAT</span><span>ΔΙΑΤΡΟΦΗ ΜΕ ΝΟΗΜΑ</span><span>ΕΞΑΤΟΜΙΚΕΥΜΕΝΗ ΠΡΟΣΕΓΓΙΣΗ</span><span>ΕΥΕΛΙΞΙΑ · ΣΥΝΕΠΕΙΑ · ΕΠΙΣΤΗΜΗ</span></div></div></div></section>

   <section className="quick-strip"><div className="container quick-grid"><div><small>ΑΝΑΖΗΤΑΣ ΥΠΟΣΤΗΡΙΞΗ ΓΙΑ...</small><strong>Ξεκίνα από αυτό που σε αφορά περισσότερο</strong></div>{['Απώλεια βάρους','Γαστρεντερικό','Μεταβολική υγεία','Εγκυμοσύνη & θηλασμός'].map((x,i)=><Link key={x} href="/ypiresies" className="quick-item"><span>0{i+1}</span>{x}<b>↗</b></Link>)}</div></section>

   <section className="section intro-section"><div className="container intro-grid"><div><div className="eyebrow">Η δική μου προσέγγιση</div><h2>Δεν χρειάζεσαι περισσότερους κανόνες.<br/>Χρειάζεσαι ένα πλάνο που βγάζει νόημα.</h2></div><div><p className="large-copy">Η διατροφή είναι κομμάτι της καθημερινότητάς σου — όχι ξεχωριστός κόσμος. Γι’ αυτό το πλάνο πρέπει να χωράει στις ώρες σου, στις προτιμήσεις σου, στις κοινωνικές σου στιγμές και στις πραγματικές σου ανάγκες.</p><p className="muted">Η δουλειά μας δεν τελειώνει όταν πάρεις ένα πρόγραμμα. Εκεί ξεκινά η ουσιαστική εφαρμογή.</p><Link className="text-link" href="/sxetika-me-emena">Δες πώς δουλεύω →</Link></div></div></section>

   <section className="section section-soft"><div className="container"><div className="section-head modern-head"><div><div className="eyebrow">Τομείς υποστήριξης</div><h2>Εξειδίκευση με ανθρώπινη ματιά.</h2></div><p>Κάθε άνθρωπος έχει διαφορετικές ανάγκες. Δεν εφαρμόζουμε μία λύση σε όλους.</p></div><div className="focus-grid">{focusAreas.map(([title,text],i)=><Link className="focus-card" href="/ypiresies" key={title}><span className="focus-number">0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div><span className="circle-arrow">↗</span></Link>)}</div></div></section>

   <section className="section motion-stage"><div className="container"><div className="section-head modern-head"><div><div className="eyebrow">Η καθημερινότητα σε κίνηση</div><h2>Μικρές αλλαγές.<br/>Μετρήσιμη αίσθηση προόδου.</h2></div><p>Ένα διατροφικό πλάνο πρέπει να είναι αρκετά απλό ώστε να το εφαρμόζεις και αρκετά έξυπνο ώστε να προσαρμόζεται.</p></div><div className="motion-card"><div className="orbit"/><div className="orbit orbit-two"/><div className="motion-pill pill-a">Ενέργεια</div><div className="motion-pill pill-b">Κορεσμός</div><div className="motion-pill pill-c">Ρουτίνα</div><div className="motion-meter"><div className="meter-head"><span>Συνέπεια εβδομάδας</span><b>74%</b></div><div className="meter-bar"><div className="meter-fill"/></div></div></div></div></section>

   <section className="section method-section"><div className="container"><div className="method-top"><div><div className="eyebrow">Πώς δουλεύουμε</div><h2>Από την πρώτη συζήτηση μέχρι την αλλαγή.</h2></div><div className="method-intro"><span>Δεν χρειάζεται να τα αλλάξεις όλα.</span><p>Χρειάζεται να βρούμε τις αλλαγές που έχουν νόημα για εσένα και μπορούν να διατηρηθούν.</p></div></div><div className="steps-grid">{steps.map(([n,t,d])=><article className="step" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

   <section className="section split-feature"><div className="container feature-panel"><div className="feature-copy"><div className="eyebrow eyebrow-light">Τι θα πάρεις από τη συνεργασία</div><h2>Όχι απλώς ένα πρόγραμμα.<br/><em>Ένα σύστημα που μπορείς να εφαρμόσεις.</em></h2><p>Η εξατομίκευση δεν σημαίνει περισσότερες οδηγίες. Σημαίνει να ξέρεις τι να κάνεις όταν η ημέρα δεν πάει όπως την είχες σχεδιάσει.</p><div className="check-list">{wins.map(x=><div key={x}><b>✓</b>{x}</div>)}</div><a className="btn primary" href={bookingUrl}>Ξεκίνα τη συνεργασία ↗</a></div><div className="feature-quote"><span>“</span><p>Η συνέπεια δεν χτίζεται με περισσότερους κανόνες. Χτίζεται όταν η διατροφή σου γίνεται αρκετά ρεαλιστική ώστε να μπορείς να την ακολουθείς.</p><small>— Ευδοξία Τσιτάκη</small></div></div></section>

   <section className="section articles-section"><div className="container"><div className="section-head modern-head"><div><div className="eyebrow">Correct Eat Journal</div><h2>Άρθρα για την πράξη — όχι για την τελειότητα.</h2></div><Link className="btn ghost" href="/arthra">Όλα τα άρθρα ↗</Link></div><div className="article-grid-modern">{articles.map((a,i)=><Link className="article-card-modern" href={`/arthra/${a.slug}`} key={a.slug}><div className="article-visual visual-logo"><img src="/logo.jpg" alt="Correct Eat"/><span>{a.category}</span></div><div className="article-body"><div className="article-meta">{a.date}</div><h3>{a.title}</h3><p>{a.excerpt}</p><span className="text-link">Διάβασε το άρθρο →</span></div></Link>)}</div></div></section>

   <section className="section final-cta"><div className="container cta-modern"><div className="cta-glow"/><div className="eyebrow eyebrow-light">ΤΟ ΕΠΟΜΕΝΟ ΒΗΜΑ</div><h2>Η διατροφή μπορεί να γίνει πιο απλή.</h2><p>Και μπορεί να γίνει δική σου. Με επιστημονική βάση, πρακτικό σχεδιασμό και μια προσέγγιση που βλέπει πρώτα τον άνθρωπο.</p><div className="cta-actions"><a className="btn primary btn-large" href={bookingUrl}>Κλείσε ραντεβού ↗</a><Link className="btn glass-btn btn-large" href="/epikoinonia">Επικοινωνία</Link></div></div></section>
  </main>
 </>
}
