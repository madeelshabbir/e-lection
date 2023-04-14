// @ts-ignore
import contract from '@truffle/contract';

import Contract from '../../build/contracts/Voting.json';
import { web3 } from '../utils/web3';

const votingContract = contract(Contract);
votingContract.setProvider(web3.currentProvider);
export const VotingContact = votingContract.deployed;
