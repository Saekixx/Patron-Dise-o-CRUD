import { createPool } from "mysql2/promise";

class DataBase {
  constructor() {
    // Patron Singleton
    // Si el objeto DataBase existe usa ese mismo objeto
    if (Database.instance) return DataBase.instance;

    this.pool = createPool({
      host: "localhost",
      database: "db_product",
      user: "root",
      password: "",
      // Limitamos a 10 conexiones
      connectionLimit: 10,
      // Que espere la conexion
      waitForConnections: true,
    });

    // Patron Singleton
    // Guardamos la instancia para reutilizarla en toda la aplicación
    DataBase.instance = this;
  }

  //Metodo para usar las consultas usan el pool
  async query(sql, params) {
    const [rows] = await this.pool.execute(sql, params);
    return rows;
  }
}

const instance = new DataBase();

export default instance;
