const messages = [
  'CORRECT EAT',
  'ΕΠΙΣΤΗΜΗ · ΕΞΑΤΟΜΙΚΕΥΣΗ · ΠΡΑΚΤΙΚΟΤΗΤΑ',
  'ΓΑΣΤΡΕΝΤΕΡΙΚΟ · ΒΑΡΟΣ · ΜΕΤΑΒΟΛΙΚΗ ΥΓΕΙΑ',
  'ONLINE & ΔΙΑ ΖΩΣΗΣ',
];

export default function LedBanner() {
  return (
    <div className="led-banner" aria-hidden="true">
      <div className="led-track">
        {[0, 1].map((copy) =>
          messages.map((m, i) => (
            <span key={`${copy}-${i}`}>
              {i === 0 && <i className="led-dot" />}
              {m}
            </span>
          )),
        )}
      </div>
    </div>
  );
}
