import express from "express";
import router from "./src/routes/product.route.js";
import cors from "cors";

const app = express();

const PORT = 3000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola");
});

app.use("/products", router);

app.listen(PORT, () => {
  console.log("Servidor corriendo en ", PORT);
});
