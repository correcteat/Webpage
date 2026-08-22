import {config, fields, collection, singleton} from '@keystatic/core';

export default config({
  storage: {kind: 'local'},

  ui: {
    brand: {name: 'Correct Eat'},
    navigation: {
      Περιεχόμενο: ['arthra'],
      Ρυθμίσεις: ['rythmiseis'],
    },
  },

  collections: {
    arthra: collection({
      label: 'Άρθρα',
      slugField: 'titlos',
      path: 'content/arthra/*',
      format: {contentField: 'keimeno'},
      entryLayout: 'content',
      columns: ['titlos', 'imerominia'],
      schema: {
        titlos: fields.slug({
          name: {label: 'Τίτλος'},
          slug: {
            label: 'Διεύθυνση (URL)',
            description: 'Μόνο λατινικά και παύλες. Π.χ. diatrofi-kai-ypnos',
          },
        }),
        imerominia: fields.date({
          label: 'Ημερομηνία',
          defaultValue: {kind: 'today'},
          validation: {isRequired: true},
        }),
        katigoria: fields.select({
          label: 'Κατηγορία',
          options: [
            {label: 'Βασική διατροφή', value: 'vasiki-diatrofi'},
            {label: 'Γαστρεντερικό', value: 'gastrenteriko'},
            {label: 'Κλινική διατροφή', value: 'kliniki-diatrofi'},
            {label: 'Μεταβολική υγεία', value: 'metavoliki-ygeia'},
            {label: 'Αθλητική διατροφή', value: 'athlitiki-diatrofi'},
            {label: 'Καθημερινότητα', value: 'kathimerinotita'},
            {label: 'Συνταγές', value: 'syntages'},
          ],
          defaultValue: 'vasiki-diatrofi',
        }),
        perilipsi: fields.text({
          label: 'Περίληψη',
          description: 'Δύο γραμμές. Εμφανίζεται στην κάρτα του άρθρου και στη Google.',
          multiline: true,
          validation: {length: {min: 40, max: 200}},
        }),
        eikona: fields.image({
          label: 'Κύρια φωτογραφία',
          directory: 'public/images/arthra',
          publicPath: '/images/arthra/',
          validation: {isRequired: false},
        }),
        keimeno: fields.mdx({
          label: 'Κείμενο',
          options: {image: {directory: 'public/images/arthra', publicPath: '/images/arthra/'}},
        }),
      },
    }),
  },

  singletons: {
    rythmiseis: singleton({
      label: 'Ρυθμίσεις site',
      path: 'content/rythmiseis',
      schema: {
        tilefono: fields.text({label: 'Σταθερό τηλέφωνο', description: 'Π.χ. 23940 72190'}),
        kinito: fields.text({label: 'Κινητό', description: 'Π.χ. 6987246974'}),
        email: fields.text({label: 'Email'}),
        dieuthinsi: fields.text({label: 'Διεύθυνση γραφείου'}),
        calcom: fields.url({
          label: 'Link Cal.com',
          description: 'Η σελίδα ραντεβού. Αν αλλάξει, το αλλάζεις μόνο εδώ.',
        }),
        instagram: fields.url({label: 'Instagram'}),
        linktree: fields.url({label: 'Linktree'}),
        fotografia: fields.image({
          label: 'Η φωτογραφία σου',
          description: 'Τουλάχιστον 1200x1600 pixels για να είναι καθαρή.',
          directory: 'public/images',
          publicPath: '/images/',
        }),
      },
    }),
  },
});
