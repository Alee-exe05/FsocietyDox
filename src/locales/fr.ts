import { Dictionary } from "@/lib/i18n";

export const fr: Dictionary = {
  page: {
    title: 'Tableau de Bord',
  },
  dashboard: {
    stats: {
      modules: 'Modules Totaux',
      moderated: 'Modérés',
      users: 'Utilisateurs Actifs',
      flagged: 'Contenu Signalé',
    },
    chart: {
        title: 'Activité des Modules',
        description: 'Téléchargements et modérations mensuels.',
    },
  },
  modules: {
    title: 'Modules Téléchargés',
    description: 'Une liste des modules de données récemment téléchargés.',
    uploadButton: 'Télécharger Module',
    table: {
      filename: 'Nom de fichier',
      uploader: 'Téléchargeur',
      role: 'Rôle',
      uploadDate: 'Date de téléchargement',
    },
    uploadSuccess: {
        title: 'Téléchargement Réussi',
        description: 'a été ajouté à la liste.',
    },
    uploadError: {
        title: 'Échec du Téléchargement',
        description: 'Veuillez sélectionner un fichier .txt valide.',
    },
    noModules: {
        title: 'Aucun Module Trouvé',
        description: 'Allez à la page "Ajouter Paste" pour télécharger un nouveau module.',
    }
  },
  users: {
    title: 'Utilisateurs en Ligne',
    description: 'Liste des utilisateurs actuellement actifs.',
    online: 'En ligne',
    offline: 'Hors ligne',
  },
  moderation: {
    title: 'Outil de Modération PII',
    description: 'Analysez le texte pour les PII sensibles en fonction de la région.',
    placeholder: 'Collez le texte ici pour rechercher des données sensibles...',
    button: 'Modérer le Texte',
    error: {
        title: 'Erreur de Modération',
        emptyText: 'Le texte ne peut pas être vide.',
        apiError: 'Échec de la réponse du service de modération.',
    },
    result: {
        sensitive: {
            title: 'Données Sensibles Détectées',
            description: 'Les termes potentiellement sensibles suivants ont été trouvés :',
        },
        safe: {
            title: 'Aucune Donnée Sensible Trouvée',
            description: 'Le texte semble être exempt de PII sensibles pour la région sélectionnée.',
        }
    },
    info: {
        title: 'Prêt à Analyser',
        description: 'Saisissez du texte et cliquez sur "Modérer le Texte" pour commencer l\'analyse.',
    }
  },
  addPaste: {
    title: 'Ajouter un Nouveau Paste',
    description: 'Téléchargez un module .txt à ajouter au système.',
    upload: {
        title: 'Télécharger un fichier',
        description: 'Glissez-déposez ou cliquez pour télécharger un fichier .txt.',
    },
    submitButton: 'Soumettre le Paste',
    cancelButton: 'Annuler'
  }
};
