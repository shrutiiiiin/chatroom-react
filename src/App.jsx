import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PrivateRoutes from "./pages/PrivateRoutes";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }
      />
      <Route
        path="/account"
        element={
          <PrivateRoutes>
            <Account />
          </PrivateRoutes>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
