import Link from 'next/link';

export const metadata={title:'Υπηρεσίες',description:'Εξατομικευμένη διατροφική υποστήριξη από την Ευδοξία Τσιτάκη.'};

const folders=[
 ['01','Προγράμματα διατροφής',['παιδική διατροφή','vegan διατροφή','νηστεία','αθλητική διατροφή','εγκυμοσύνη','τρίτη ηλικία','οικογενειακά προγράμματα','διατροφική εκπαίδευση']],
 ['02','Διατροφικές διαταραχές',['Διαταραγμένη σχέση με το φαγητό','Νευρική ανορεξία','Νευρική βουλιμία','Αδηφαγική Διαταραχή (Binge eating)','Σύνδρομο Νυχτερινής Υπερφαγίας','Ορθορεξία']],
 ['03','Κλινική διατροφή',['Δυσλιπιδαιμία (χοληστερίνη, τριγλυκερίδια)','Υπέρταση','Σακχαρώδης Διαβήτης','Αναιμία','Γαστρεντερικές Διαταραχές','Καρδιαγγειακά Νοσήματα','Παθήσεις Πεπτικού συστήματος','Αντιμετώπιση Ευερέθιστου Εντέρου','Σύνδρομο Πολυκυστικών Ωοθηκών']],
 ['04','Θηλασμός',['Υπολογισμός αναγκών','Θρεπτική διατροφή','Απώλεια βάρους']],
 ['05','Εγκυμοσύνη',['Υπολογισμός αναγκών','Θρεπτική διατροφή','Απώλεια βάρους']],
 ['06','Online διατροφή',['απώλεια βάρους','πρόσληψη βάρους','διατήρηση βάρους','εξατομικευμένο πρόγραμμα διατροφής, συνταγές, συμβουλευτική, στοχοθεσία','Θα χρειαστείς: οικιακή ζυγαριά και μεζούρα.']],
 ['07','Διαχείριση βάρους',['απώλεια βάρους','πρόσληψη βάρους','διατήρηση βάρους','εξατομικευμένο πρόγραμμα διατροφής, συνταγές, συμβουλευτική, στοχοθεσία, μετρήσεις με λιπομετρητή in body 120 και μεζούρα']],
];

const process=[['01','Αξιολόγηση','Καταγράφουμε το ιστορικό, τους στόχους, τη ρουτίνα, τις δυσκολίες και τις προτεραιότητές σου.'],['02','Σχεδιασμός','Δημιουργούμε ένα πρακτικό πλαίσιο που μπορείς να εφαρμόσεις στην καθημερινότητα.'],['03','Παρακολούθηση','Εξετάζουμε τι λειτουργεί και κάνουμε στοχευμένες αλλαγές χωρίς «τιμωρία».'],['04','Εκπαίδευση','Στόχος είναι να κατανοείς το γιατί πίσω από τις επιλογές και να αποκτάς αυτονομία.']];

const folderStyles=`
.service-folders{display:grid;gap:14px;max-width:980px;margin:0 auto}.service-folder{background:rgba(255,255,255,.82);border:1px solid var(--line);border-radius:22px;overflow:hidden;box-shadow:0 8px 30px rgba(44,34,27,.05);transition:.25s}.service-folder:hover{box-shadow:var(--shadow)}.service-folder summary{list-style:none;cursor:pointer;display:grid;grid-template-columns:52px 48px 1fr 42px;align-items:center;gap:12px;padding:22px 24px}.service-folder summary::-webkit-details-marker{display:none}.folder-number{font:700 .68rem ui-monospace,monospace;color:#a0958c;letter-spacing:.1em}.folder-icon{width:38px;height:30px;border:1.5px solid var(--brown);border-radius:6px;color:var(--brown);display:grid;place-items:center;font-size:20px;transform:rotate(0deg)}.folder-title{font:600 1.45rem/1.2 'Playfair Display',serif;color:var(--ink)}.folder-arrow{width:34px;height:34px;border:1px solid var(--line);border-radius:50%;display:grid;place-items:center;color:var(--brown);font-size:1.25rem;transition:.25s}.service-folder[open] summary{background:var(--sand)}.service-folder[open] .folder-arrow{transform:rotate(45deg);background:var(--brown);color:#fff}.folder-content{padding:8px 32px 28px 136px;background:#fff}.folder-content ul{margin:0 0 22px;padding:0;list-style:none;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 35px}.folder-content li{position:relative;padding:10px 0 10px 22px;border-bottom:1px solid rgba(48,36,28,.08);font-size:.95rem;color:var(--body)}.folder-content li:before{content:'•';position:absolute;left:2px;color:var(--brown);font-size:1.15rem}.folder-content .btn{margin-top:4px}@media(max-width:700px){.service-folder summary{grid-template-columns:36px 40px 1fr 34px;padding:18px 15px;gap:8px}.folder-title{font-size:1.15rem}.folder-content{padding:5px 18px 22px 58px}.folder-content ul{grid-template-columns:1fr;gap:0}.folder-content li{font-size:.9rem}.folder-number{font-size:.58rem}.folder-icon{width:34px;height:27px}.folder-arrow{width:30px;height:30px}}
`;

export default function Services(){return <main>
 <style dangerouslySetInnerHTML={{__html:folderStyles}}/>
 <section className="page-hero"><div className="container"><div className="eyebrow">Υπηρεσίες · Correct Eat</div><h1>Διατροφική υποστήριξη που προσαρμόζεται σε εσένα.</h1><p>Όλες οι υπηρεσίες οργανωμένες σε ξεχωριστούς φακέλους, ώστε να βρίσκεις εύκολα αυτό που σε ενδιαφέρει.</p></div></section>
 <section className="section"><div className="container"><div className="section-head modern-head"><div><div className="eyebrow">Οι υπηρεσίες μου</div><h2>Διάλεξε τον φάκελο<br/>που σε αφορά.</h2></div><p>Κάθε φάκελος ανοίγει για να εμφανίσει αναλυτικά τις υπηρεσίες, ακριβώς όπως παρουσιάζονται στο υλικό σου.</p></div>
  <div className="service-folders">{folders.map(([number,title,items])=><details className="service-folder" key={title}>
   <summary><span className="folder-number">{number}</span><span className="folder-icon">▱</span><span className="folder-title">{title}</span><span className="folder-arrow">+</span></summary>
   <div className="folder-content"><ul>{items.map(item=><li key={item}>{item}</li>)}</ul><Link className="btn ghost" href="/epikoinonia#rantevou">Συζήτησε τη συνεργασία →</Link></div>
  </details>)}</div>
 </div></section>
 <section className="section section-soft"><div className="container"><div className="section-head modern-head"><div><div className="eyebrow">Η διαδικασία</div><h2>Από την πρώτη συνεδρία<br/>μέχρι την ουσιαστική αλλαγή.</h2></div><p>Η παρακολούθηση δεν είναι έλεγχος. Είναι χώρος για προσαρμογή, εκπαίδευση και σταθερή πρόοδο.</p></div><div className="process-panel">{process.map(([n,t,d])=><div className="process-row" key={n}><strong>{n}</strong><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>
 <section className="section"><div className="container cta-modern"><div className="eyebrow eyebrow-light">ΔΕΝ ΞΕΡΕΙΣ ΑΠΟ ΠΟΥ ΝΑ ΞΕΚΙΝΗΣΕΙΣ;</div><h2>Ξεκίνα με μια συζήτηση.</h2><p>Πες μου τι σε απασχολεί και ποιος είναι ο στόχος σου. Από εκεί καθορίζουμε το κατάλληλο πλαίσιο συνεργασίας.</p><Link className="btn ghost btn-large" href="/epikoinonia#rantevou">Κλείσε ραντεβού ↗</Link></div></section>
 </main>}
