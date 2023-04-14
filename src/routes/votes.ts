import { VotesController } from '../controllers/votes';
import { router } from '../utils/router';

router
 .get('/votes', VotesController.index)
 .get('/votes/:candidateId', VotesController.show)
 .post('/votes', VotesController.create);

export const votesRoutes = router.routes();
