import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from '../api/api'
const User = () => {
  const [user, setUser] = useState({});

  useEffect(() => {

    const fetchUser = async () => {
      try {
        const response = await api.get("/auth/me");
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    }

    fetchUser();
  }, []);


  async function handleUser() {
    setUser({})
    console.log("handleUser")
    try {
      const response = await api.get("/auth/me");
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  }

  return (


    <div>
      <Link to="/">Home</Link>
      <p>Usuario</p>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
          <tr key={user.id}> {/* Supondo que cada produto tem um id único */}
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.email}</td>
          </tr>
        </thead>
        <tbody>
          <button onClick={handleUser}>Buscar</button>

        </tbody>
      </table>
    </div>
  );
};

export default User;
