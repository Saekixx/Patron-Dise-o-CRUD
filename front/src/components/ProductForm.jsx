import { Button } from "@radix-ui/themes";
import { useProductForm } from "../hook/useProductForm";

function ProductForm({ onSubmit, initialData }) {
  const { handleChange, handleSubmit, product } = useProductForm({
    initialData,
    onSubmit,
  });

  return (
    <div className="flex justify-center min-h-screen items-start pt-10">
      <form
        className="w-full max-w-md flex flex-col gap-3 p-4 bg-white rounded shadow"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          value={product.name}
          onChange={handleChange}
          required
          className="border px-2 py-1 rounded"
        />

        <label htmlFor="description">Descripción</label>
        <input
          type="text"
          name="description"
          id="description"
          value={product.description}
          onChange={handleChange}
          required
          className="border px-2 py-1 rounded"
        />

        <label htmlFor="stock">Stock</label>
        <input
          type="number"
          name="stock"
          id="stock"
          value={product.stock}
          onChange={handleChange}
          required
          className="border px-2 py-1 rounded"
        />

        <Button asChild className="mt-4">
          <button type="submit">Guardar</button>
        </Button>
      </form>
    </div>
  );
}

export default ProductForm;
