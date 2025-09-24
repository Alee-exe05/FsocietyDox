
export interface Uploader {
  name: string;
  role: string;
}

export interface Module {
  id: string;
  filename: string;
  uploadDate: string;
  content: string;
  uploader: Uploader;
}
