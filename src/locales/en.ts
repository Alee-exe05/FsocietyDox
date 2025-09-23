export const en = {
  page: {
    title: 'Dashboard',
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
    online: 'Online',
    offline: 'Offline',
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
        content: "By accessing and using FSociety Dox, you accept and agree to be bound by the terms and provision of this agreement."
      },
      {
        title: "2. Use License",
        content: "Permission is granted to temporarily access FSociety Dox for personal, non-commercial transitory viewing only."
      },
      {
        title: "3. Disclaimer",
        content: "The materials on FSociety Dox are provided on an 'as is' basis. FSociety Dox makes no warranties, expressed or implied."
      },
      {
        title: "4. Limitations",
        content: "In no event shall FSociety Dox be liable for any damages arising out of the use or inability to use the materials."
      },
      {
        title: "5. Accuracy of materials",
        content: "The materials appearing on FSociety Dox could include technical, typographical, or photographic errors."
      }
    ],
    privacy: [
      {
        title: "Information We Collect",
        content: "We may collect personal information that you voluntarily provide to us when you register on the FSociety Dox, express an interest in obtaining information about us or our products and services, when you participate in activities on the FSociety Dox or otherwise when you contact us."
      },
      {
        title: "How We Use Your Information",
        content: "We use personal information collected via our FSociety Dox for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations."
      },
      {
        title: "Will Your Information Be Shared?",
        content: "We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations."
      }
    ]
  }
};
