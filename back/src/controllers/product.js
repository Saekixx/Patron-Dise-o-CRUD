import Product from "../models/Product.js";

const ProductController = {
  mostrarProductos: async (req, res) => {
    try {
      const productos = await Product.buscarTodos();
      res.json({ success: true, data: productos[0] });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  mostrarProducto: async (req, res) => {
    const { id } = req.params;
    try {
      const producto = await Product.buscarPorId(id);

      if (producto.length === 0)
        return res.status(404).json({ error: "producto no encontrado" });

      res.json(producto[0][0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  crearProducto: async (req, res) => {
    const { name, description, stock } = req.body;
    try {
      await Product.crear(name, description, stock);
      res.status(201).json({ msg: "producto creado" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  actualizarProducto: async (req, res) => {
    const { id } = req.params;
    const { name, description, stock } = req.body;
    try {
      await Product.actualizar(id, name, description, stock);
      res.status(200).json({ msg: "Producto actualizado" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  eliminarProducto: async (req, res) => {
    const { id } = req.params;
    try {
      await Product.eliminar(id);
      res.status(200).json({ msg: "Producto eliminado" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default ProductController;
