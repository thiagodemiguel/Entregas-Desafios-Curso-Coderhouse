import { Router } from 'express'
import { usersController } from '../controllers/users.controller.js';
const router = Router();

//GET
router.get('/', usersController.findAllUser)
router.get("/:idUser", usersController.findUserById);

//POST
router.post("/", usersController.createUser);

//DELETE
router.delete("/:idUser", usersController.deleteUser);

export default router;