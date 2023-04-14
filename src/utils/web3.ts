import Web3 from 'web3';

import { ENVS } from '../constants/environment-variables';

export const web3 = new Web3(ENVS.WEB3_SERVER_HOST as string);
