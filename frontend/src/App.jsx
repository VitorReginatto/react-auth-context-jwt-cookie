import { RouterProvider } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { routes } from "./routes/routes";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={routes}></RouterProvider>
    </AuthProvider>
  );
}

export default App;
