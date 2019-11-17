import {ObjectId, Timestamp} from 'mongodb';

import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface CommentAttributes {
    id?: ObjectId;
    comment?: string;
    post?: number;
    user?: number;
    createdAt?: Timestamp;
    updatedAt?: Timestamp;
};
