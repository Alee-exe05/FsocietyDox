import { Dictionary } from "@/lib/i18n";

export const it: Dictionary = {
  page: {
    title: 'Dashboard',
  },
  dashboard: {
    stats: {
      modules: 'Moduli Totali',
      moderated: 'Moderati',
      users: 'Utenti Attivi',
      flagged: 'Contenuto Segnalato',
    },
    chart: {
        title: 'Attività dei Moduli',
        description: 'Caricamenti e moderazioni mensili.',
    },
  },
  modules: {
    title: 'Moduli Caricati',
    description: 'Una lista dei moduli di dati caricati di recente.',
    uploadButton: 'Carica Modulo',
    table: {
      filename: 'Nome file',
      uploader: 'Caricato da',
      role: 'Ruolo',
      uploadDate: 'Data di caricamento',
    },
    uploadSuccess: {
        title: 'Caricamento Riuscito',
        description: 'è stato aggiunto alla lista.',
    },
    uploadError: {
        title: 'Caricamento Fallito',
        description: 'Seleziona un file .txt valido.',
    },
    noModules: {
        title: 'Nessun Modulo Trovato',
        description: 'Vai alla pagina "Aggiungi Paste" per caricare un nuovo modulo.',
    }
  },
  users: {
    title: 'Users',
    description: '',
    online: 'Online',
    offline: 'Offline',
  },
  moderation: {
    title: 'Strumento di Moderazione PII',
    description: 'Analizza il testo per PII sensibili in base alla regione.',
    placeholder: 'Incolla qui il testo per cercare dati sensibili...',
    button: 'Modera Testo',
    error: {
        title: 'Errore di Moderazione',
        emptyText: 'Il testo non può essere vuoto.',
        apiError: 'Impossibile ottenere una risposta dal servizio di moderazione.',
    },
    result: {
        sensitive: {
            title: 'Dati Sensibili Rilevati',
            description: 'Sono stati trovati i seguenti termini potenzialmente sensibili:',
        },
        safe: {
            title: 'Nessun Dato Sensibile Trovato',
            description: 'Il testo sembra essere privo di PII sensibili per la regione selezionata.',
        }
    },
    info: {
        title: 'Pronto per la Scansione',
        description: 'Inserisci del testo e clicca su "Modera Testo" per iniziare l\'analisi.',
    }
  },
  addPaste: {
    title: 'Aggiungi Nuovo Paste',
    description: 'Carica un modulo .txt da aggiungere al sistema.',
    upload: {
        title: 'Carica un file',
        description: 'Trascina e rilascia o clicca per caricare un file .txt.',
    },
    submitButton: 'Invia Paste',
    cancelButton: 'Annulla'
  },
  support: {
    title: 'Supporto',
    description: 'Benvenuto nella pagina di supporto. Qui puoi trovare i nostri Termini di Servizio e la nostra Informativa sulla Privacy.',
    terms_title: 'Termini di Servizio',
    privacy_title: 'Informativa sulla Privacy',
    terms: [
        {
            title: "1. Accettazione dei Termini",
            content: "Accedendo e utilizzando FSociety Dox, accetti di essere vincolato dai termini e dalle disposizioni del presente accordo."
        },
        {
            title: "2. Licenza d'Uso",
            content: "È concesso il permesso di accedere temporaneamente a FSociety Dox solo per una visualizzazione transitoria personale e non commerciale."
        },
        {
            title: "3. Dichiarazione di non responsabilità",
            content: "I materiali su FSociety Dox sono forniti 'così come sono'. FSociety Dox non offre alcuna garanzia, espressa o implicita."
        },
        {
            title: "4. Limitazioni",
            content: "In nessun caso FSociety Dox sarà responsabile per eventuali danni derivanti dall'uso o dall'impossibilità di utilizzare i materiali."
        },
        {
            title: "5. Accuratezza dei materiali",
            content: "I materiali che appaiono su FSociety Dox potrebbero includere errori tecnici, tipografici o fotografici."
        }
    ],
    privacy: [
        {
            title: "Informazioni che Raccogliamo",
            content: "Potremmo raccogliere informazioni personali che ci fornisci volontariamente quando ti registri su FSociety Dox, esprimi interesse a ottenere informazioni su di noi o sui nostri prodotti и servizi, quando partecipi ad attività su FSociety Dox o altrimenti quando ci contatti."
        },
        {
            title: "Come Usiamo le Tue Informazioni",
            content: "Utilizziamo le informazioni personali raccolte tramite il nostro FSociety Dox per una serie di scopi aziendali descritti di seguito. Elaboriamo le tue informazioni personali per questi scopi in base ai nostri legittimi interessi aziendali, al fine di stipulare o eseguire un contratto сon te, con il tuo consenso e/o per la conformità ai nostri obblighi legali."
        },
        {
            title: "Le Tue Informazioni Saranno Condivise?",
            content: "Condividiamo le informazioni solo con il tuo consenso, per rispettare le leggi, per fornirti servizi, per proteggere i tuoi diritti o per adempiere a obblighi aziendali."
        }
    ]
  }
};
