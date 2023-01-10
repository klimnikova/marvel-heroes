import { BASE_API_URL } from '../constants';

export const URL = (subUrl: string): string => `${BASE_API_URL}/${subUrl}`;
