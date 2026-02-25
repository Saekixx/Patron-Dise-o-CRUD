import { Router } from "express";
import ProductController from "../controllers/product.js";

const router = Router();

router.get("/", ProductController.mostrarProductos);

router.get("/:id", ProductController.mostrarProducto);

router.post("/", ProductController.crearProducto);

router.put("/:id", ProductController.actualizarProducto);

router.delete("/:id", ProductController.eliminarProducto);

export default router;
