
import { Timestamp } from 'firebase/firestore';

export interface Uploader {
  uid: string;
  name: string;
  role: string;
}

export interface Module {
  id: string;
  filename: string;
  uploadDate: string; // Or could be Timestamp for more precision
  content: string;
  uploader: Uploader;
  createdAt: Timestamp;
}
