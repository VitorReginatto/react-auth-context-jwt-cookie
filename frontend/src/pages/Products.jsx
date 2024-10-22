import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { api } from '../api/api'
import LoadingSpinner from "../components/LoadingSpinner";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products", error);
      }finally{
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);


  if (loading) {
    //return <span>carregando...</span>;
    return <LoadingSpinner />;

  }

  return (


    <div>
      <Link to="/">Home</Link>
      <p>Produtos</p>
      {loading ? <LoadingSpinner/>:
       (<table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody > 
          {products.length > 0 ? (
            products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
              </tr>
            ))
          ):(
            <tr>
              <td colSpan={5}>Nenhum produto encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>)}
    </div>
  );
};

export default Products;
