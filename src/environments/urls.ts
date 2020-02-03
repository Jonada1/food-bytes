import { environment } from './environment';

export const apiBase = environment.production ? '' : 'http://localhost:3000';
