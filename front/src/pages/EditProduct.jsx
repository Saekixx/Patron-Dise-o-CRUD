import ProductForm from "../components/ProductForm";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function EditProduct() {
  const { id } = useParams();
  const [initialData, setInitialData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3000/products/${id}`);
        const data = await res.json();
        setInitialData(data);
      } catch (err) {
        console.error("Error al cargar el producto:", err);
      }
    };

    fetchProduct();
  }, [id]);

  const updateProduct = async (product) => {
    try {
      await fetch(`http://localhost:3000/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      navigate("/");
    } catch (err) {
      console.error("Error al actualizar el producto:", err);
    }
  };

  if (!initialData) return <p>Cargando...</p>;

  return (
    <div>
      <ProductForm initialData={initialData} onSubmit={updateProduct} />
    </div>
  );
}

export default EditProduct;
