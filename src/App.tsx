import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";
import { router } from "./routes/AppRoute";
import QueryProvider from "./Providers/QueryProvider";

function App() {
  return (
    <QueryProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryProvider>
  );
}

export default App;
