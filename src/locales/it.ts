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
    description: 'Lista degli utenti attualmente attivi.',
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
  }
};
