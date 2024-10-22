import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from '../api/api'
const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {

    const fetchUser = async () => {
      try {
        const response = await api.get("/users/getAllUsers",  {withCredentials: true} );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    }

    fetchUser();
  }, []);


  async function handleUser() {
    setUsers([])
    console.log("handleUser")
    try {
      const response = await api.get("/users/getAllUsers",{withCredentials: true});
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  }

  return (


    <div className="h-screen w-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6">
        <Link to="/" className="text-blue-500 hover:underline mb-4 block">Home</Link>
        <p className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Usuário</p>
        <table className=" text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-2">Código</th>
              <th scope="col" className="px-4 py-2">Username</th>
              <th scope="col" className="px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => ( 
              <tr key={user.id} className="border-b bg-white dark:bg-gray-800 dark:border-gray-700">
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.firstName}</td>
                <td className="px-4 py-2">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={handleUser}
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default User;
