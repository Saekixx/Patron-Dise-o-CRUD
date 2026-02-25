import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@radix-ui/themes";

function TableProduct() {
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    const response = await fetch("http://localhost:3000/products");
    const producto = await response.json();
    setProduct(producto.data);
  };

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });
    getProduct();
  };

  useEffect(() => {
    getProduct();
  }, []);

  const HTMLproduct = product.map((p) => {
    return (
      <tr key={p.id_product} className="hover:bg-base-200 transition-colors">
        <td className="text-center">{p.id_product}</td>
        <td className="text-center">{p.name}</td>
        <td className="text-center">{p.description}</td>
        <td className="text-center">{p.stock}</td>
        <td className="flex justify-center gap-3">
          <Link to={`/edit/${p.id_product}`}>
            <Pencil />
          </Link>
          <button
            onClick={() => {
              if (
                window.confirm(
                  "¿Estás seguro de que quieres eliminar este producto?",
                )
              ) {
                deleteProduct(p.id_product);
              }
            }}
          >
            <Trash2 />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="flex flex-col mt-6 gap-4">
        <div className="overflow-x-auto rounded-xl border border-base-300 shadow-md max-w-4xl w-full">
          <table className="table table-zebra table-fixed w-full">
            <thead className="bg-base-200 text-base-content">
              <tr>
                <th className="w-32 text-center">ID Producto</th>
                <th className="w-32 text-center">Nombre</th>
                <th className="w-32 text-center">Descripción</th>
                <th className="w-32 text-center">Stock</th>
                <th className="w-32 text-center">Acciones</th>
              </tr>
            </thead>

            <tbody>{HTMLproduct}</tbody>
          </table>
        </div>

        <div className="flex justify-normal max-w-4xl w-40 h-8">
          <Button>
            <Link to="/create">Crear Producto</Link>
          </Button>
        </div>
      </div>
    </>
  );
}

export default TableProduct;
