import bodyParser from 'koa-bodyparser';
import Koa from 'koa';

import { candidatesRoutes } from './routes/candidates';
import { votesRoutes } from './routes/votes';
import { ENVS } from './constants/environment-variables';
import { i18next } from './utils/i18next';

const app = new Koa();

app.use(bodyParser());
app.use(votesRoutes);
app.use(candidatesRoutes);

app.listen(ENVS.PORT, () => {
  console.log(i18next.t('success.server', { port: ENVS.PORT }));
});
