
import { Dictionary } from "@/lib/i18n";

export const it: Dictionary = {
  page: {
    title: 'Dashboard',
  },
  navigation: {
    home: 'Home',
    addPaste: 'Aggiungi Paste',
    users: 'Users',
    info_users: 'Info Utenti',
    support: 'Supporto',
    admin: 'Admin'
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
  },
  info_users: {
    title: 'Informazioni Utenti',
    description: 'Panoramica delle statistiche e delle attività degli utenti.',
    stats: {
      total_users: 'Utenti Totali',
      total_users_desc: 'Il numero totale di utenti registrati.',
      online_users: 'Utenti Online',
      online_users_desc: 'Utenti attualmente attivi sulla piattaforma.',
      new_users: 'Nuovi Utenti (24h)',
      new_users_desc: 'Nuovi utenti nelle ultime 24 ore.',
      banned_users: 'Utenti Bannati',
      banned_users_desc: 'Utenti che sono stati bannati dalla piattaforma.',
    },
    chart: {
      title: 'Attività Utenti',
      description: 'Andamento mensile delle registrazioni degli utenti.',
      legend: 'Utenti'
    },
    recent_activity: {
      title: 'Attività Recente'
    }
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
            content: "Accedendo e utilizzando FSociety Dox, accetti di essere vincolato dai termini e dalle disposizioni di questo accordo. Questa è una piattaforma per l'informazione e, partecipando, ti allinei alla nostra missione."
        },
        {
            title: "2. Licenza d'Uso",
            content: "È concesso il permesso di accedere temporaneamente a FSociety Dox solo per una visualizzazione transitoria personale e non commerciale. Questa licenza non ti concede alcun diritto sul codice o sull'infrastruttura sottostante."
        },
        {
            title: "3. Dichiarazione di non responsabilità",
            content: "I materiali e i dati su FSociety Dox sono forniti 'così come sono'. Non offriamo alcuna garanzia, espressa o implicita, e con la presente decliniamo ogni altra garanzia. L'informazione è potere; usala con saggezza."
        },
        {
            title: "4. Limitazioni",
            content: "In nessun caso FSociety Dox o i suoi fornitori saranno responsabili per eventuali danni (inclusi, senza limitazione, danni per perdita di dati o profitto, o dovuti a interruzione dell'attività) derivanti dall'uso o dall'impossibilità di utilizzare i materiali su FSociety Dox."
        },
        {
            title: "5. Accuratezza dei materiali",
            content: "I materiali che appaiono su FSociety Dox potrebbero includere errori tecnici, tipografici o fotografici. Non garantiamo che nessuno dei materiali sul suo sito web sia accurato, completo o attuale. Possiamo apportare modifiche ai materiali contenuti nel suo sito web in qualsiasi momento e senza preavviso."
        }
    ],
    privacy: [
        {
            title: "Il Nostro Impegno per l'Anonimato",
            content: "In FSociety Dox, non ci limitiamo a rispettare la tua privacy: l'abbiamo resa il nostro fondamento. Siamo un collettivo che opera nelle ombre digitali e il tuo anonimato è la nostra priorità. Gli unici dati che conserviamo sono il tuo username e la data in cui ti sei unito alla nostra causa. Non vogliamo il tuo IP, la tua email, né il tuo vero nome. Siamo fantasmi nella macchina."
        },
        {
            title: "Dati che Gestiamo",
            content: "Le informazioni che fornisci—il tuo username e i tuoi contributi (paste)—sono usate per identificarti nei nostri ranghi e per mostrare il tuo ruolo. Questi dati sono visibili agli altri membri come parte della nostra missione condivisa. Non usiamo questi dati per nient'altro che la funzione principale di questa piattaforma. Nessun marketing, nessuna analisi, nessuna condivisione con terze parti. I tuoi dati sono tuoi, i tuoi segreti sono al sicuro."
        },
        {
            title: "Il Velo della Segretezza",
            content: "Non condividiamo le tue informazioni con nessuno al di fuori della nostra cerchia. I dati che vedi su questa piattaforma sono solo per gli occhi dei membri. Siamo i guardiani di queste informazioni e operiamo con la consapevolezza che ciò che accade qui, rimane qui. Noi siamo FSociety. Finalmente siamo liberi. Finalmente siamo svegli."
        }
    ]
  }
};
