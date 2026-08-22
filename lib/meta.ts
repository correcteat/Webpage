import type {Metadata} from 'next';

/** Φτιάχνει metadata με ΣΩΣΤΟ canonical για τη συγκεκριμένη σελίδα.
 *  Ποτέ canonical στο layout — αλλιώς όλες οι σελίδες δηλώνουν ότι είναι η αρχική. */
export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {canonical: path},
    openGraph: {title, description, url: path, type: 'website'},
  };
}
