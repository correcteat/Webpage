import type {Metadata} from 'next';
import './globals.css';
import './photo-fix.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://cor-project.vercel.app';

export const metadata:Metadata={metadataBase:new URL(productionUrl),title:{default:'Ευδοξία Τσιτάκη | Διαιτολόγος – Διατροφολόγος',template:'%s | Ευδοξία Τσιτάκη'},description:'Ευδοξία Τσιτάκη, Διαιτολόγος – Διατροφολόγος. Εξατομικευμένη διατροφική υποστήριξη με επιστημονική προσέγγιση.',alternates:{canonical:'/'},openGraph:{type:'website',locale:'el_GR',siteName:'Ευδοξία Τσιτάκη | Διαιτολόγος – Διατροφολόγος',title:'Ευδοξία Τσιτάκη | Διαιτολόγος – Διατροφολόγος',description:'Διατροφή με νόημα. Εξατομικευμένη, επιστημονική και ανθρώπινη προσέγγιση.',images:['/logo.jpg']},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="el"><body><Header/>{children}<Footer/></body></html>}
