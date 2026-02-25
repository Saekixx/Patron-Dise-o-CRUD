import { useProducts } from "../hook/useProducts";
import ProductForm from "../components/ProductForm";
import { useParams } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const { initialData, editProduct } = useProducts(id);

  return (
    <ProductForm
      initialData={initialData}
      onSubmit={(data) => editProduct(id, data)}
    />
  );
}

export default EditProduct;
