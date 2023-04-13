import * as dotenv from 'dotenv';

dotenv.config();

const KEYS = [
  'PORT',
];

export const ENVS: Record<string, string> = KEYS.reduce((envs, key) => {
  return { ...envs, [key]: process.env[key] };
}, {});
