
import { Dictionary } from "@/lib/i18n";

export const fr: Dictionary = {
  page: {
    title: 'Tableau de Bord',
  },
  navigation: {
    home: 'Accueil',
    addPaste: 'Ajouter Paste',
    users: 'Users',
    info_users: 'Info Users',
    support: 'Support',
    admin: 'Admin'
  },
  admin: {
    navigation: {
      dashboard: 'Tableau de Bord',
      userManagement: 'Gestion des Utilisateurs',
      rolesPermissions: 'Rôles & Permissions',
      staffChat: 'Chat du Personnel',
      adminChat: 'Chat des Admins',
      moderation: 'Modération',
      systemLogs: 'Logs Système',
    },
    dashboard: {
      title: 'Tableau de Bord Admin',
      description: 'Bienvenue dans le panneau de contrôle du personnel.',
      userManagement: {
        title: 'Gestion des Utilisateurs',
        description: 'Afficher, modifier et gérer tous les utilisateurs de la plateforme.',
        linkText: 'Gérer les Utilisateurs',
      },
      staffChat: {
        title: 'Chat du Personnel',
        description: 'Communiquez avec les autres membres du personnel en temps réel.',
        linkText: 'Ouvrir le Chat',
      },
      rolesPermissions: {
        title: 'Rôles & Permissions',
        description: 'Configurez les rôles des utilisateurs et leurs permissions spécifiques.',
        linkText: 'Gérer les Rôles',
      },
      systemLogs: {
        title: 'Logs Système',
        description: 'Consultez les journaux d\'activité importants du système et du personnel.',
        linkText: 'Voir les Logs',
      },
      platformAnalytics: {
        title: 'Analyses de la Plateforme',
        description: 'Surveillez l\'activité de la plateforme et les statistiques des utilisateurs.',
        linkText: 'Voir les Analyses',
      },
      quickSettings: {
        title: 'Paramètres Rapides',
        description: 'Accédez rapidement aux paramètres importants de la plateforme.',
        generalSettings: 'Paramètres Généraux',
        systemStatus: 'État du Système',
      }
    },
    userManagement: {
      title: 'Gestion des Utilisateurs',
      description: 'Afficher, gérer et modifier les comptes utilisateurs.',
      searchPlaceholder: 'Rechercher par nom ou email...',
      addUserButton: 'Ajouter Utilisateur',
      userCount: 'Utilisateurs',
      table: {
        user: 'Utilisateur',
        role: 'Rôle',
        stats: 'Stats',
        joined: 'Rejoint le',
        actions: 'Actions',
        pastes: 'Pastes',
        comments: 'Commentaires',
      },
      actions: {
        toggle: 'Basculer le menu',
        edit: 'Modifier',
        changeRole: 'Changer de Rôle',
        delete: 'Supprimer',
      },
      deleteDialog: {
        title: 'Êtes-vous sûr ?',
        description: 'Cette action est irréversible. Elle supprimera définitivement le compte de l\'utilisateur et effacera ses données de nos serveurs.',
        cancel: 'Annuler',
        continue: 'Continuer',
      },
      toast: {
        userDeleted: 'Utilisateur Supprimé',
        userDeletedDesc: 'L\'utilisateur a été retiré de la liste.',
      },
      noUsersFound: 'Aucun utilisateur trouvé.',
    },
    rolesPermissions: {
        title: 'Rôles & Permissions',
        description: 'Configurez les rôles des utilisateurs et leurs permissions spécifiques. Les Super Admins ont toutes les permissions par défaut.',
        newRolePlaceholder: 'Nom du nouveau rôle...',
        addRoleButton: 'Ajouter Rôle',
        saveButton: 'Enregistrer',
        lockedBadge: 'Verrouillé',
        table: {
            role: 'Rôle',
            actions: 'Actions',
        },
        permissions: {
            createUser: 'Créer Utilisateurs',
            editUser: 'Modifier Utilisateurs',
            deleteUser: 'Supprimer Utilisateurs',
            viewLogs: 'Voir Logs Système',
            manageRoles: 'Gérer Rôles',
            moderateContent: 'Modérer Contenu',
        }
    },
    systemLogs: {
        title: 'Logs Système',
        description: 'Consultez les journaux d\'activité importants du système et du personnel. Cette fonctionnalité est en construction.',
        underConstruction: 'La fonctionnalité des logs système sera implémentée ici.',
    },
    staffChat: {
        title: 'Chat du Personnel',
        description: 'Canal de communication en temps réel pour tous les membres du personnel.',
        placeholder: 'Écrivez un message...',
        empty: {
            title: 'Le chat est vide',
            description: 'Soyez le premier à envoyer un message !',
        }
    },
    adminChat: {
        title: 'Chat des Admins',
        description: 'Communication privée pour les Admins et Super Admins.',
        placeholder: 'Écrivez un message privé...',
        empty: {
            title: 'Le chat admin est vide',
            description: 'Envoyez un message pour démarrer une conversation privée.',
        }
    }
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
  },
  info_users: {
    title: 'Informations sur les Utilisateurs',
    description: 'Aperçu des statistiques et de l\'activité des utilisateurs.',
    stats: {
      total_users: 'Utilisateurs Totaux',
      total_users_desc: 'Le nombre total d\'utilisateurs enregistrés.',
      online_users: 'Utilisateurs en Ligne',
      online_users_desc: 'Utilisateurs currently active on the platform.',
      new_users: 'Nouveaux Utilisateurs (24h)',
      new_users_desc: 'Nouveaux utilisateurs au cours des dernières 24 heures.',
      banned_users: 'Utilisateurs Bannis',
      banned_users_desc: 'Utilisateurs qui ont été bannis de la plateforme.',
    },
    chart: {
      title: 'Activité des Utilisateurs',
      description: 'Tendances mensuelles d\'inscription des utilisateurs.',
      legend: 'Utilisateurs'
    },
    recent_activity: {
      title: 'Activité Récente'
    }
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
        title: "Notre Engagement envers l'Anonymat",
        content: "Chez FSociety Dox, nous ne respectons pas seulement votre vie privée ; nous sommes construits sur elle. Nous sommes un collectif qui opère dans l'ombre numérique, et votre anonymat est notre priorité. Les seules données que nous stockons sont votre nom d'utilisateur choisi et la date à laquelle vous avez rejoint notre cause. Nous ne voulons pas de votre IP, de votre e-mail ou de votre vrai nom. Nous sommes des fantômes dans la machine."
      },
      {
        title: "Données que nous Gérons",
        content: "Les informations que vous fournissez—votre nom d'utilisateur et vos contributions (pastes)—sont utilisées pour vous identifier au sein de nos rangs et pour afficher votre rôle. Ces données sont visibles par les autres membres dans le cadre de notre mission commune. Nous n'utilisons pas ces données à d'autres fins que la fonction principale de cette plateforme. Pas de marketing, pas d'analyse, pas de partage avec des tiers. Vos données sont à vous ; vos secrets sont en sécurité."
      },
      {
        title: "Le Voile du Secret",
        content: "Nous ne partageons vos informations avec personne en dehors de notre cercle. Les données que vous voyez sur cette plateforme sont réservées aux membres. Nous sommes les gardiens de ces informations, et nous agissons en sachant que ce qui se passe ici, reste ici. Nous sommes FSociety. Nous sommes enfin libres. Nous sommes enfin éveillés."
      }
    ]
  }
};
