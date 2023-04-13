import { Context } from 'koa';
import { i18next } from '../utils/i18next';

import { CANDIDATES } from '../fixtures/candidates';
import { VoteRequestBody } from '../types/votes-request-body';
import { VotingContact } from '../contract/voting';
import { web3 } from '../utils/web3';
import { CANDIDATE_ID, VOTER_ID } from '../constants/required-fields';
import { ENVS } from '../constants/environment-variables';

export const VotesController = {
  index: async (ctx: Context) => {
    const Voting = await VotingContact();
    const candidates = CANDIDATES.map((candidate) => web3.utils.asciiToHex(candidate.id.toString()));

    try {
      const votes = await Voting.getAllVotes(candidates);
      ctx.body = votes.map((v: Promise<any>, i: number) => {
        return { candidateId: CANDIDATES[i].id, count: parseInt(v.toString()) }
      });
    }
    catch (_) {
      ctx.body = { error: i18next.t('errors.unprocessableEntity') };
      ctx.status = 422;
    };
  },
  create: async (ctx: Context) => {
    const { candidateId, voterId } = ctx.request.body as VoteRequestBody;

    if (!candidateId) {
      ctx.body = { error: i18next.t('errors.missing', { key: CANDIDATE_ID } ) };
      ctx.status = 422;
      return;
    }

    if (!voterId) {
      ctx.body = { error: i18next.t('errors.missing', { key: VOTER_ID }) };
      ctx.status = 422;
      return;
    }

    const Voting = await VotingContact();
    try {
      await Voting.castVote(
        web3.utils.asciiToHex(candidateId.toString()),
        web3.utils.asciiToHex(voterId.toString()),
        { from: ENVS.BLOCKCHAIN_ACCOUNT_ADDRESS }
      );

      ctx.body = { message: i18next.t('success.voteCasted') };
      ctx.status = 201;
    }
    catch (e: any) {
      ctx.body = { error: e.data?.reason ?? i18next.t('errors.invalidAccount') };
      ctx.status = 400;
    }
  },
  show: async (ctx: Context) => {
    const { candidateId } = ctx.params;

    const Voting = await VotingContact();
    try {
      const votes = await Voting.getVotes(web3.utils.asciiToHex(candidateId.toString()));
      ctx.body = { candidateId: parseInt(candidateId), count: parseInt(votes.toString()) };
      ctx.status = 200;
    }
    catch (_) {
      ctx.body = { candidateId: parseInt(candidateId), count: 0 };
      ctx.status = 404;
    }
  }
};
