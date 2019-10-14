import {Comments} from './comments';

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
