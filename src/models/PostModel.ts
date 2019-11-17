import { ObjectId, Timestamp } from 'mongodb';

export interface PostAttributes {
  id?: ObjectId;
  title?: string;
  content?: string;
  photo?: string;
  author?: number;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
};
