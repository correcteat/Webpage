# Correct Eat — νέο site

Next.js 16 · React 19 · TypeScript · Keystatic (admin) · deploy σε Vercel

## Πώς το τρέχεις στον υπολογιστή σου

Άνοιξε τερματικό μέσα σε αυτόν τον φάκελο και γράψε:

```
npm install
npm run dev
```

Μετά άνοιξε:

- **http://localhost:3000** — το site
- **http://localhost:3000/keystatic** — ο πίνακας διαχείρισης

## Πού αλλάζει τι

| Θέλω να αλλάξω | Αρχείο |
|---|---|
| Τη διεύθυνση του site (domain) | `lib/site.ts` — ένα σημείο, πουθενά αλλού |
| Τα χρώματα | `app/globals.css`, στην αρχή (`:root`) |
| Τις γραμματοσειρές | `app/layout.tsx`, γραμμές 2-19 |
| Τι βλέπει η πελάτισσα στο admin | `keystatic.config.ts` |

## Τηλέφωνο, φωτογραφία, link Cal.com

Δεν είναι στον κώδικα. Τα βάζει η πελάτισσα από το admin:
**/keystatic → Ρυθμίσεις → Ρυθμίσεις site**

## Domain

Όταν έρθει το πραγματικό domain, στο Vercel βάλε μεταβλητή περιβάλλοντος:

```
NEXT_PUBLIC_SITE_URL = https://correcteat.gr
```

Δεν χρειάζεται καμία αλλαγή στον κώδικα.
