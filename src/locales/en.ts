
export const en = {
  page: {
    title: 'Dashboard',
  },
  navigation: {
    home: 'Home',
    addPaste: 'Add Paste',
    users: 'Users',
    info_users: 'Info Users',
    support: 'Support',
    admin: 'Admin'
  },
  admin: {
    navigation: {
      dashboard: 'Dashboard',
      userManagement: 'User Management',
      rolesPermissions: 'Roles & Permissions',
      staffChat: 'Staff Chat',
      adminChat: 'Admin Chat',
      moderation: 'Moderation',
      systemLogs: 'System Logs',
    },
    dashboard: {
      title: 'Admin Dashboard',
      description: 'Welcome to the staff control panel.',
      userManagement: {
        title: 'User Management',
        description: 'View, edit, and manage all users on the platform.',
        linkText: 'Manage Users',
      },
      staffChat: {
        title: 'Staff Chat',
        description: 'Communicate with other staff members in real-time.',
        linkText: 'Open Chat',
      },
      rolesPermissions: {
        title: 'Roles & Permissions',
        description: 'Configure user roles and their specific permissions.',
        linkText: 'Manage Roles',
      },
      systemLogs: {
        title: 'System Logs',
        description: 'Review important system and staff activity logs.',
        linkText: 'View Logs',
      },
      platformAnalytics: {
        title: 'Platform Analytics',
        description: 'Monitor platform activity and user statistics.',
        linkText: 'View Analytics',
      },
      quickSettings: {
        title: 'Quick Settings',
        description: 'Quickly access important platform settings.',
        generalSettings: 'General Settings',
        systemStatus: 'System Status',
      }
    },
    userManagement: {
      title: 'User Management',
      description: 'View, manage, and edit user accounts.',
      searchPlaceholder: 'Search by name or email...',
      addUserButton: 'Add User',
      userCount: 'Users',
      table: {
        user: 'User',
        role: 'Role',
        stats: 'Stats',
        joined: 'Joined',
        actions: 'Actions',
        pastes: 'Pastes',
        comments: 'Comments',
      },
      actions: {
        toggle: 'Toggle menu',
        edit: 'Edit',
        changeRole: 'Change Role',
        delete: 'Delete',
      },
      deleteDialog: {
        title: 'Are you sure?',
        description: 'This action cannot be undone. This will permanently delete the user account and remove their data from our servers.',
        cancel: 'Cancel',
        continue: 'Continue',
      },
      toast: {
        userDeleted: 'User Deleted',
        userDeletedDesc: 'The user has been removed from the list.',
      },
      noUsersFound: 'No users found.',
    },
    rolesPermissions: {
        title: 'Roles & Permissions',
        description: 'Configure user roles and their specific permissions. Super Admins have all permissions by default.',
        newRolePlaceholder: 'New role name...',
        addRoleButton: 'Add Role',
        saveButton: 'Save Changes',
        lockedBadge: 'Locked',
        table: {
            role: 'Role',
            actions: 'Actions',
        },
        permissions: {
            createUser: 'Create Users',
            editUser: 'Edit Users',
            deleteUser: 'Delete Users',
            viewLogs: 'View System Logs',
            manageRoles: 'Manage Roles',
            moderateContent: 'Moderate Content',
        }
    },
    systemLogs: {
        title: 'System Logs',
        description: 'Review important system and staff activity logs. This feature is under construction.',
        underConstruction: 'System Logs functionality will be implemented here.',
    },
    staffChat: {
        title: 'Staff Chat',
        description: 'Real-time communication channel for all staff members.',
        placeholder: 'Type a message...',
        empty: {
            title: 'Chat is empty',
            description: 'Be the first to send a message!',
        }
    },
    adminChat: {
        title: 'Admin Chat',
        description: 'Private communication for Admins and Super Admins.',
        placeholder: 'Type a private message...',
        empty: {
            title: 'Admin chat is empty',
            description: 'Send a message to start a private conversation.',
        }
    }
  },
  dashboard: {
    stats: {
      modules: 'Total Modules',
      moderated: 'Moderated',
      users: 'Active Users',
      flagged: 'Flagged Content',
    },
    chart: {
        title: 'Module Activity',
        description: 'Monthly uploads and moderations.',
    },
  },
  modules: {
    title: 'Uploaded Modules',
    description: 'A list of recently uploaded data modules.',
    uploadButton: 'Upload Module',
    table: {
      filename: 'Filename',
      uploader: 'Uploader',
      role: 'Role',
      uploadDate: 'Upload Date',
    },
    uploadSuccess: {
        title: 'Upload Successful',
        description: 'has been added to the list.',
    },
    uploadError: {
        title: 'Upload Failed',
        description: 'Please select a valid .txt file.',
    },
    noModules: {
      title: 'No Modules Found',
      description: 'Go to the "Add Paste" page to upload a new module.',
    }
  },
  users: {
    title: 'Users',
    description: '',
  },
  info_users: {
    title: 'Users Information',
    description: 'Overview of user statistics and activity.',
    stats: {
      total_users: 'Total Users',
      total_users_desc: 'The total number of registered users.',
      online_users: 'Online Users',
      online_users_desc: 'Users currently active on the platform.',
      new_users: 'New Users (24h)',
      new_users_desc: 'New users in the last 24 hours.',
      banned_users: 'Banned Users',
      banned_users_desc: 'Users who have been banned from the platform.',
    },
    chart: {
      title: 'User Activity',
      description: 'Monthly user registration trends.',
      legend: 'Users'
    },
    recent_activity: {
      title: 'Recent Activity'
    }
  },
  moderation: {
    title: 'PII Moderation Tool',
    description: 'Analyze text for sensitive PII based on region.',
    placeholder: 'Paste text here to scan for sensitive data...',
    button: 'Moderate Text',
    error: {
        title: 'Moderation Error',
        emptyText: 'Text cannot be empty.',
        apiError: 'Failed to get a response from the moderation service.',
    },
    result: {
        sensitive: {
            title: 'Sensitive Data Detected',
            description: 'The following potentially sensitive terms were found:',
        },
        safe: {
            title: 'No Sensitive Data Found',
            description: 'The text appears to be clear of sensitive PII for the selected region.',
        }
    },
    info: {
        title: 'Ready to Scan',
        description: 'Enter some text and click "Moderate Text" to begin analysis.',
    }
  },
  addPaste: {
    title: 'Add New Paste',
    description: 'Upload a .txt module to be added to the system.',
    upload: {
        title: 'Upload a file',
        description: 'Drag and drop or click to upload a .txt file.',
    },
    submitButton: 'Submit Paste',
    cancelButton: 'Cancel'
  },
  support: {
    title: 'Support',
    description: 'Welcome to the support page. Here you can find our Terms of Service and our Privacy Policy.',
    terms_title: 'Terms of Service',
    privacy_title: 'Privacy Policy',
    terms: [
      {
        title: "1. Acceptance of Terms",
        content: "By accessing and using FSociety Dox, you accept and agree to be bound by the terms and provision of this agreement. This is a platform for information, and by participating, you align with our mission."
      },
      {
        title: "2. Use License",
        content: "Permission is granted to temporarily access FSociety Dox for personal, non-commercial transitory viewing only. This license does not grant you any rights to the underlying code or infrastructure."
      },
      {
        title: "3. Disclaimer",
        content: "The materials and data on FSociety Dox are provided 'as is'. We make no warranties, expressed or implied, and hereby disclaim all other warranties. Information is power; use it wisely."
      },
      {
        title: "4. Limitations",
        content: "In no event shall FSociety Dox or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on FSociety Dox."
      },
      {
        title: "5. Accuracy of materials",
        content: "The materials appearing on FSociety Dox could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete or current. We may make changes to the materials contained on its website at any time without notice."
      }
    ],
    privacy: [
      {
        title: "Our Commitment to Anonymity",
        content: "At FSociety Dox, we don't just respect your privacy; we're built on it. We are a collective that operates in the digital shadows, and your anonymity is our priority. The only data we store is your chosen username and the date you joined our cause. We don't want your IP, your email, or your real name. We are ghosts in the machine."
      },
      {
        title: "Data We Handle",
        content: "The information you provide—your username and your contributions (pastes)—is used to identify you within our ranks and to display your role. This data is visible to other members as part of our shared mission. We do not use this data for anything other than the core function of this platform. No marketing, no analytics, no third-party sharing. Your data is yours; your secrets are safe."
      },
      {
        title: "The Veil of Secrecy",
        content: "We don't share your information with anyone outside our circle. The data you see on this platform is for members' eyes only. We are the guardians of this information, and we operate with the understanding that what happens here, stays here. We are FSociety. We are finally free. We are finally awake."
      }
    ]
  }
};
