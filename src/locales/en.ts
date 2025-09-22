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
    title: 'Online Users',
    description: 'List of users currently active.',
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
  }
};
