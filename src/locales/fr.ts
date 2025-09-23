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
        content: "En accédant et en utilisant FSociety Dox, vous acceptez d'être lié par les termes et dispositions de cet accord. Ceci est une plateforme d'information, et en y participant, vous vous alignez sur notre mission."
      },
      {
        title: "2. Licence d'utilisation",
        content: "L'autorisation est accordée d'accéder temporairement à FSociety Dox pour un visionnage transitoire personnel et non commercial uniquement. Cette licence ne vous accorde aucun droit sur le code ou l'infrastructure sous-jacente."
      },
      {
        title: "3. Clause de non-responsabilité",
        content: "Les matériaux et données sur FSociety Dox sont fournis 'tels quels'. Nous n'offrons aucune garantie, expresse ou implicite, et déclinons par la présente toute autre garantie. L'information, c'est le pouvoir ; utilisez-la à bon escient."
      },
      {
        title: "4. Limitations",
        content: "En aucun cas, FSociety Dox ou ses fournisseurs ne pourront être tenus responsables des dommages (y compris, sans limitation, les dommages pour perte de données ou de profit, ou dus à une interruption d'activité) résultant de l'utilisation ou de l'impossibilité d'utiliser les matériaux sur FSociety Dox."
      },
      {
        title: "5. Exactitude des matériaux",
        content: "Les matériaux apparaissant sur FSociety Dox peuvent contenir des erreurs techniques, typographiques ou photographiques. Nous ne garantissons pas que les matériaux sur son site Web sont exacts, complets ou à jour. Nous pouvons apporter des modifications aux matériaux contenus sur son site Web à tout moment et sans préavis."
      }
    ],
    privacy: [
      {
        title: "Informations que nous 'Collectons'",
        content: "Nous sommes une société qui valorise la vie privée. Les seules informations personnelles que nous stockons sont celles que vous fournissez volontairement lors de votre inscription : un nom d'utilisateur et une date d'adhésion. Nous ne suivons pas votre adresse IP ou d'autres métadonnées inutiles."
      },
      {
        title: "Comment nous 'Utilisons' vos Informations",
        content: "Les informations que vous fournissez sont utilisées uniquement pour vous identifier au sein de notre système, attribuer vos contributions (pastes) et afficher votre rôle. Nous n'utilisons pas vos données à des fins de marketing, d'analyse ou à toute autre fin que la fonctionnalité principale de la plateforme."
      },
      {
        title: "Vos Informations Seront-elles 'Partagées' ?",
        content: "Nous ne partageons pas vos informations avec des tiers. Vos données (nom d'utilisateur et contenu) sont visibles par les autres utilisateurs sur la plateforme dans le cadre de l'expérience. Nous opérons dans l'ombre pour protéger votre vie privée du monde extérieur."
      }
    ]
  }
};
