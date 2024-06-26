import { Router } from 'express'
import { productsController } from '../controllers/products.controller.js';
import { roleMiddleware } from '../middlewares/role.middleware.js';

const router = Router();

//GET
router.get("/", productsController.findAllProducts);
router.get("/:pId", productsController.findAllProducts);
router.get("/mocking/products", productsController.generateProducts);

//POST
router.post("/", roleMiddleware(["admin","premium"]), productsController.createProduct);

//PUT 
router.put("/:pid",roleMiddleware("admin"), productsController.updateProduct);

//DELETE
router.delete("/:pid",roleMiddleware(["admin","premium"]), productsController.deleteProduct);

export default router