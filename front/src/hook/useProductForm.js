import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useProductForm({ initialData, onSubmit } = {}) {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    stock: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!initialData) return;

    setProduct({
      name: initialData.name ?? "",
      description: initialData.description ?? "",
      stock: initialData.stock ?? 0,
    });
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === "stock" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(product);
    navigate("/");
  };

  return {
    product,
    handleChange,
    handleSubmit,
  };
}
