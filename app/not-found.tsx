import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container" style={{paddingBlock: '5rem', textAlign: 'center'}}>
      <h1>Η σελίδα δεν βρέθηκε</h1>
      <p>Μπορεί να άλλαξε διεύθυνση ή να μην υπάρχει πια.</p>
      <Link href="/">← Επιστροφή στην αρχική</Link>
    </main>
  );
}
