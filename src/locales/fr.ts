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
    title: 'Users',
    description: '',
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
  },
  support: {
    title: 'Support',
    description: 'Bienvenue sur la page de support. Vous trouverez ici nos conditions d\'utilisation et notre politique de confidentialité.',
    terms_title: 'Conditions d\'Utilisation',
    privacy_title: 'Politique de Confidentialité',
    terms: [
      {
        title: "1. Acceptation des conditions",
        content: "En accédant et en utilisant FSociety Dox, vous acceptez d'être lié par les termes et dispositions de cet accord."
      },
      {
        title: "2. Licence d'utilisation",
        content: "L'autorisation est accordée d'accéder temporairement à FSociety Dox pour un visionnage transitoire personnel et non commercial uniquement."
      },
      {
        title: "3. Clause de non-responsabilité",
        content: "Les matériaux sur FSociety Dox sont fournis 'tels quels'. FSociety Dox ne donne aucune garantie, expresse ou implicite."
      },
      {
        title: "4. Limitations",
        content: "En aucun cas, FSociety Dox ne pourra être tenu responsable des dommages résultant de l'utilisation ou de l'impossibilité d'utiliser les matériaux."
      },
      {
        title: "5. Exactitude des matériaux",
        content: "Les matériaux apparaissant sur FSociety Dox peuvent contenir des erreurs techniques, typographiques ou photographiques."
      }
    ],
    privacy: [
      {
        title: "Informations que nous collectons",
        content: "Nous pouvons collecter des informations personnelles que vous nous fournissez volontairement lorsque vous vous inscrivez sur FSociety Dox, que vous manifestez votre intérêt à obtenir des informations sur nous ou nos produits et services, lorsque vous participez à des activités sur FSociety Dox ou que vous nous contactez."
      },
      {
        title: "Comment nous utilisons vos informations",
        content: "Nous utilisons les informations personnelles collectées via notre FSociety Dox à diverses fins commerciales décrites ci-dessous. Nous traitons vos informations personnelles à ces fins en nous fondant sur nos intérêts commerciaux légitimes, afin de conclure ou d'exécuter un contrat avec vous, avec votre consentement et/ou pour nous conformer à nos obligations légales."
      },
      {
        title: "Vos informations seront-elles partagées ?",
        content: "Nous ne partageons les informations qu'avec votre consentement, pour nous conformer aux lois, pour vous fournir des services, pour protéger vos droits ou pour remplir nos obligations commerciales."
      }
    ]
  }
};
