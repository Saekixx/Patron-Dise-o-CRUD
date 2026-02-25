import { useProducts } from "../hook/useProducts";
import ProductForm from "../components/ProductForm";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function EditProduct() {
  const { id } = useParams();
  const { initialData, fetchProductbyId, editProduct } = useProducts();

  useEffect(() => {
    fetchProductbyId(id);
  }, [id]);

  return (
    <ProductForm
      initialData={initialData}
      onSubmit={(data) => editProduct(id, data)}
    />
  );
}

export default EditProduct;
