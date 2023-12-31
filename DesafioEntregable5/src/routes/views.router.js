import { Router } from 'express'
import { usersManager } from "../managers/UsersManager.js";
import { productsManager } from "../managers/ProductsManager.js";

const router = Router()

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/createproduct", (req, res) => {
  res.render("createProduct");
});

router.get("/chat", (req, res) => {
  res.render("chat");
});

router.get("/home/:idUser", async (req, res) => {
  const { idUser } = req.params;
  const userInfo = await usersManager.findById(idUser);
  const { first_name, last_name } = userInfo;
  const products = await productsManager.findAll();
  res.render("home", { first_name, last_name, products });
});


export default router;

