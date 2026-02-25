import { useEffect, useState } from "react";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../api/products.api.js";

export function useProducts(productId) {
  const [products, setProducts] = useState([]);
  const [initialData, setInitialData] = useState(null);

  // Obtener lista
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  // Producto por ID (SOLO si hay id)
  useEffect(() => {
    if (!productId) return;
    getProduct(productId).then(setInitialData);
  }, [productId]);

  const addProduct = async (product) => {
    await createProduct(product);
    const data = await getProducts();
    setProducts(data);
  };

  const editProduct = async (id, product) => {
    await updateProduct(id, product);
    setProducts((prev) =>
      prev.map((p) => (p.id_product === id ? { ...p, ...product } : p)),
    );
  };

  const removeProduct = async (id) => {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id_product !== id));
  };

  return {
    products,
    initialData,
    addProduct,
    editProduct,
    removeProduct,
  };
}
