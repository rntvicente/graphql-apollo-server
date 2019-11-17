import { ModelsInterface } from './ModelsInterface';

export interface BaseModelInterface {
    prototype?: any;
    assossiate?(models: ModelsInterface): void;
};
