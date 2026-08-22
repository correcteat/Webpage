import type {Metadata} from 'next';
import './globals.css';
import './cta-fix.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
const productionUrl=process.env.VERCEL_PROJECT_PRODUCTION_URL?`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`:'https://cor-project.vercel.app';
export const metadata:Metadata={metadataBase:new URL(productionUrl),title:{default:'Ευδοξία Τσιτάκη | Διαιτολόγος – Διατροφολόγος',template:'%s | Ευδοξία Τσιτάκη'},description:'Εξατομικευμένη διατροφική υποστήριξη με επιστημονική προσέγγιση και πρακτική εφαρμογή.',alternates:{canonical:'/'},openGraph:{type:'website',locale:'el_GR',siteName:'Ευδοξία Τσιτάκη | Correct Eat',title:'Ευδοξία Τσιτάκη | Διαιτολόγος – Διατροφολόγος',description:'Διατροφή με νόημα. Επιστημονική, εξατομικευμένη και ανθρώπινη προσέγγιση.',images:['/logo.jpg']},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="el"><body><Header/>{children}<Footer/><script dangerouslySetInnerHTML={{__html:`document.addEventListener('click',(event)=>{const link=event.target.closest('a');if(link&&link.href.includes('/πρωτη-συνεδρια-διατροφης')){event.preventDefault();window.location.href='https://cal.com/ευδοξια-τσιτακη-mhw6ym';}});`}}/></body></html>}
