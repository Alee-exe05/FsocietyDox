export const en = {
  page: {
    title: 'Dashboard',
  },
  navigation: {
    home: 'Home',
    addPaste: 'Add Paste',
    users: 'Users',
    support: 'Support',
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
    description: 'Welcome to the support page. Here you can find our Terms of Service and Privacy Policy.',
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
