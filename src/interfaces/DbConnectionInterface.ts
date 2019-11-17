import { MongoClient, ObjectId, Timestamp } from 'mongodb';

import { ModelsInterface } from './ModelsInterface';

const MONGO_URL = 'mongodb://localhost:27017/Blog'

export interface DbConnectionInterface extends ModelsInterface {

};
