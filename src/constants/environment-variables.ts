import * as dotenv from 'dotenv';

dotenv.config();

const KEYS = [
  'PORT',
  'WEB3_SERVER_HOST',
  'BLOCKCHAIN_ACCOUNT_ADDRESS',
];

export const ENVS: Record<string, string> = KEYS.reduce((envs, key) => {
  return { ...envs, [key]: process.env[key] };
}, {});
