import Link from 'next/link';
import {articles} from './lib/articles';

export default function Home(){
 const featured=articles.slice(0,3);
 return <main>
  <section className="section">
   <div className="container">
    <div className="article-list-grid">
     {featured.map(a=><Link className="article-card-list" href={`/arthra/${a.slug}`} key={a.slug}>
      <div className="article-visual" style={{backgroundImage:'url(/logo.jpg)',backgroundSize:'cover',backgroundPosition:'center'}}><span>{a.category}</span></div>
      <div className="article-body"><div className="article-meta">{a.date}</div><h3>{a.title}</h3><p>{a.excerpt}</p></div>
     </Link>)}
    </div>
   </div>
  </section>
 </main>
}
