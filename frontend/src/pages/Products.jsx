import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { api } from '../api/api'
import LoadingSpinner from "../components/LoadingSpinner";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const response = await api.get("/products/getAllProducts",{withCredentials: true} );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  async function handleProducts() {
    setUsers([])
    console.log("handleUser")
    try {
      const response = await api.get("/users/getAllProducts", { withCredentials: true });
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  }
  if (loading) {
  
    return <LoadingSpinner />;

  }

  return (


    <div>
      {loading ? <LoadingSpinner /> :
        (<div className="h-screen w-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6">
            <Link to="/" className="text-blue-500 hover:underline mb-4 block">Home</Link>
            <p className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Produtos</p>
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-2">Código</th>
                  <th scope="col" className="px-4 py-2">Nome</th>
                  <th scope="col" className="px-4 py-2">Preço</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => ( // Usando 'map' para iterar sobre 'products'
                  <tr key={product.id} className="border-b bg-white dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-4 py-2">{product.id}</td>
                    <td className="px-4 py-2">{product.name}</td>
                    <td className="px-4 py-2">{product.price}</td> {/* Supondo que o produto tem uma propriedade 'price' */}
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={handleProducts}
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Buscar
            </button>
          </div>
        </div>)}
    </div>
  );
};

export default Products;
