import TableProduct from "../components/TableProduct.jsx";
import { Link } from "react-router-dom";
import { Button } from "@radix-ui/themes";

function Home() {
  return (
    <div>
      <TableProduct />

      <div className="flex justify-normal max-w-4xl w-40 h-8">
        <Button>
          <Link to="/create">Crear Producto</Link>
        </Button>
      </div>
    </div>
  );
}

export default Home;
