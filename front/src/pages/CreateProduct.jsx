import ProductForm from "../components/ProductForm";
import { useProducts } from "../hook/useProducts";
import { Link } from "react-router-dom";
import { Button } from "@radix-ui/themes";

function CreateProduct() {
  const { addProduct } = useProducts();

  return (
    <div>
      <Button>
        <Link to="/">Regresar</Link>
      </Button>

      <h1 className="text-3xl font-bold text-center mb-6">Crear Producto</h1>

      <ProductForm
        onSubmit={addProduct}
        initialData={{ name: "", description: "", stock: 0 }}
      />
    </div>
  );
}

export default CreateProduct;
