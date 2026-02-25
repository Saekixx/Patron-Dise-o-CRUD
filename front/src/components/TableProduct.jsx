import { useProducts } from "../hook/useProducts";
import { Link } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@radix-ui/themes";

function TableProduct() {
  const { products, removeProduct } = useProducts();

  const HTMLproduct = products.map((p) => {
    return (
      <tr
        key={p.id_product}
        className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150"
      >
        <td className="px-4 py-3 text-center text-sm font-medium text-gray-700">
          {p.id_product}
        </td>

        <td className="px-4 py-3 text-sm text-gray-800">{p.name}</td>

        <td className="px-4 py-3 text-sm text-gray-600">{p.description}</td>

        <td className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
          {p.stock}
        </td>

        <td className="px-4 py-3">
          <div className="flex justify-center gap-2">
            <Link
              to={`/edit/${p.id_product}`}
              className="p-2 rounded-md text-blue-600 hover:bg-blue-100 transition"
              title="Editar"
            >
              <Pencil size={18} />
            </Link>

            <button
              onClick={() => {
                if (
                  window.confirm(
                    "¿Estás seguro de que quieres eliminar este producto?",
                  )
                ) {
                  removeProduct(p.id_product);
                }
              }}
              className="p-2 rounded-md text-red-600 hover:bg-red-100 transition"
              title="Eliminar"
            >
              <Trash2 size={18} />
            </button>
          </div>
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
      </div>
    </>
  );
}

export default TableProduct;
