import Link from 'next/link';
import Image from 'next/image';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import Markdoc from '@markdoc/markdoc';
import {getArticle, getArticles, formatDate, categories} from '../../../lib/articles';
import {pageMeta} from '../../../lib/meta';
import {siteUrl} from '../../../lib/site';

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((a) => ({slug: a.slug}));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{slug: string}>;
}): Promise<Metadata> {
  const {slug} = await params;
  const a = await getArticle(slug);
  if (!a) return pageMeta({title: 'Άρθρο', description: '', path: `/arthra/${slug}`});
  return pageMeta({
    title: a.titlos,
    description: a.perilipsi ?? '',
    path: `/arthra/${slug}`,
  });
}

export default async function Article({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const a = await getArticle(slug);
  if (!a) notFound();

  const node = Markdoc.parse(a.keimeno);
  const html = Markdoc.renderers.html(Markdoc.transform(node));
  const katigoriaLabel = categories[a.katigoria] ?? a.katigoria;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: a.titlos,
    description: a.perilipsi ?? '',
    datePublished: a.imerominia,
    author: {'@type': 'Person', name: 'Ευδοξία Τσιτάκη'},
    publisher: {'@type': 'Organization', name: 'Correct Eat'},
    mainEntityOfPage: `${siteUrl}/arthra/${slug}`,
    ...(a.eikona ? {image: `${siteUrl}${a.eikona}`} : {}),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
      />

      <article>
        <section className="page-hero">
          <div className="container narrow">
            <p className="article-meta">
              <span className="chip">{katigoriaLabel}</span>
              <time dateTime={a.imerominia}>{formatDate(a.imerominia)}</time>
            </p>
            <h1>{a.titlos}</h1>
            {a.perilipsi && <p className="large-copy">{a.perilipsi}</p>}
          </div>
        </section>

        {a.eikona && (
          <div className="container narrow" style={{marginTop: '2rem'}}>
            <Image
              src={a.eikona}
              alt={a.titlos}
              width={1200}
              height={780}
              className="article-hero-photo"
              priority
              sizes="(max-width: 780px) 100vw, 780px"
            />
          </div>
        )}

        <section className="section">
          <div
            className="container narrow prose"
            dangerouslySetInnerHTML={{__html: html}}
          />
          <div className="container narrow">
            <p className="article-signature">
              Επιμέλεια άρθρου: Τσιτάκη Ευδοξία
              <br />
              Διαιτολόγος – Διατροφολόγος
            </p>
            <Link className="text-link" href="/arthra">
              ← Όλα τα άρθρα
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
