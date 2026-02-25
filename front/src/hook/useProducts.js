import { useEffect, useState } from "react";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../api/products.api.js";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const fetchProductbyId = async (id) => {
    const product = await getProduct(id);
    setInitialData(product);
  };

  const addProduct = async (product) => {
    const newProduct = await createProduct(product);
    setProducts([...products, newProduct]);
  };

  const editProduct = async (id, product) => {
    const updatedProduct = await updateProduct(id, product);
    setProducts((prev) =>
      prev.map((p) => (p.id_product === id ? { ...p, ...updatedProduct } : p)),
    );
  };

  const removeProduct = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter((p) => p.id_product !== id));
  };

  return {
    products,
    setProducts,
    initialData,
    fetchProductbyId,
    addProduct,
    editProduct,
    removeProduct,
  };
}
