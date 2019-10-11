import {Comments} from './Comments';

export interface Bug {
  id: string;
  description: string;
  priority: number;
  reporter: string;
  status: string;
  updatedAt: string;
  createdAt: string;
  comments: Comments[];
}
