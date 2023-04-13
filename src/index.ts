import Koa from 'koa';

import { ENVS } from './constants/environment-variables';

const app = new Koa();

app.listen(ENVS.PORT, () => {
  console.log(`Server running on port ${ENVS.PORT}`);
});
