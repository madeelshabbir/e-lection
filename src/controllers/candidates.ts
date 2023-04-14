import { Context } from 'koa';
import { CANDIDATES } from '../fixtures/candidates';

export const CandidatesController = {
  index: (ctx: Context) => {
    ctx.body = CANDIDATES;
  }
};
