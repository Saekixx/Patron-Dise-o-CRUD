import db from "../config/Database.js";

class Product {
  constructor(id, name, description, stock) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.stock = stock;
  }

  static async buscarTodos() {
    return await db.query("CALL listar_productos()");
  }

  static async buscarPorId() {
    return await db.query("CALL listar_producto(?)", [this.id]);
  }
}
