import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, userController.index);
router.get('/', loginRequired, userController.show);
router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index --> Lista todos os usuários --> GET
store/create --> Cria um novo usuário --> POST
delete --> apaga um usuário --> DELETE
show --> mostra um usuário --> GET
update --> atualiza um usuário --> PATH ou PUT
*/
