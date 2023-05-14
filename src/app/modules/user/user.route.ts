import  express  from 'express';
import { createUser, getUserFromDB, getUserId} from './user.controller';

const router = express.Router()

router.get('/' , getUserFromDB)
router.get('/:id' , getUserId)
router.post('/create-user' , createUser)

export default router;