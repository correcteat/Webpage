'use client';
import Link from 'next/link';
import {useState} from 'react';

export default function Header(){
 const [open,setOpen]=useState(false);
 const links=[['Αρχική','/'],['Σχετικά με εμένα','/sxetika-me-emena'],['Υπηρεσίες','/ypiresies'],['Άρθρα','/arthra'],['Επικοινωνία','/epikoinonia']];
 return <>
  <div className="led-banner" aria-label="Correct Eat ενημερωτικό banner">
   <div className="led-track"><span>● CORRECT EAT</span><span>ΔΙΑΤΡΟΦΗ ΜΕ ΝΟΗΜΑ</span><span>ΕΞΑΤΟΜΙΚΕΥΜΕΝΗ ΠΡΟΣΕΓΓΙΣΗ</span><span>ONLINE &amp; ΔΙΑ ΖΩΣΗΣ</span><span>● CORRECT EAT</span><span>ΔΙΑΤΡΟΦΗ ΜΕ ΝΟΗΜΑ</span><span>ΕΞΑΤΟΜΙΚΕΥΜΕΝΗ ΠΡΟΣΕΓΓΙΣΗ</span><span>ONLINE &amp; ΔΙΑ ΖΩΣΗΣ</span></div>
  </div>
  <header className="header">
   <div className="container header-inner">
    <Link href="/" className="brand" onClick={()=>setOpen(false)}>
     <img src="/logo.jpg" alt="Λογότυπο Ευδοξία Τσιτάκη – Διαιτολόγος Διατροφολόγος"/>
    </Link>
    <nav className="nav">{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}<Link className="btn primary" href="/epikoinonia#rantevou">Κλείσε Ραντεβού ↗</Link></nav>
    <button className="btn glass-btn mobile-menu-button" aria-expanded={open} aria-label="Άνοιγμα μενού" onClick={()=>setOpen(!open)}>{open?'Κλείσιμο':'Μενού'}</button>
   </div>
   {open&&<nav className="mobile-nav-drawer">{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="btn primary" href="/epikoinonia#rantevou" onClick={()=>setOpen(false)}>Κλείσε ραντεβού ↗</Link></nav>}
  </header>
 </>
}
