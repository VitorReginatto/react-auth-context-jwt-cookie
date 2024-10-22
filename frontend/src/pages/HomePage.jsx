import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const HomePage = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return <LoadingSpinner />;
  }


  return (

    <>
      <main className="bg-gray-50 dark:bg-gray-900 h-screen w-screen flex justify-center items-center">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-start gap-4 p-4">
            <Link
              to="/produtos"
              className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition"
            >
              Produtos
            </Link>
            <Link
              to="/usuario"
              className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 transition"
            >
              Usuário
            </Link>
          </div>
        <div className="flex flex-col items-center py-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={user.image}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {user.firstName + " " + user.lastName}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {user.email}
          </span>
          <span className="text-sm text-pink-500 dark:text-pink-500 mt-2">
            {String(user.gender).toUpperCase()}
          </span>
          <div className="flex mt-4 md:mt-6">
            <button
              onClick={logout}
              className="py-2 cursor-pointer px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default HomePage;
