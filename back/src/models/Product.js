import db from "../config/Database.js";

export default class Product {
  static async buscarTodos() {
    return await db.query("CALL listar_productos()");
  }

  static async buscarPorId(id) {
    return await db.query("CALL listar_producto(?)", [id]);
  }

  static async crear(name, description, stock) {
    return await db.query("CALL insertar_producto(?,?,?)", [
      name,
      description,
      stock,
    ]);
  }

  static async actualizar(id, name, description, stock) {
    return await db.query("CALL editar_producto(?,?,?,?)", [
      id,
      name,
      description,
      stock,
    ]);
  }

  static async eliminar(id) {
    return await db.query("CALL eliminar_producto(?)", [id]);
  }
}
