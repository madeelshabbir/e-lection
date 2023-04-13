import { CandidatesController } from '../controllers/candidates';
import { router } from '../utils/router';

router.get('/candidates', CandidatesController.index);

export const candidatesRoutes = router.routes();
