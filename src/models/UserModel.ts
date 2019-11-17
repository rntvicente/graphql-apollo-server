import { ObjectId, Timestamp } from 'mongodb';

export interface UserAttribute {
  id?: ObjectId,
  name?: string,
  email?: string,
  password?: string,
  photo?: string,
  createdAt?: Timestamp,
  updatedAt?: Timestamp
};