import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Login from "./features/auth/Login";

export default function App() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Routes>

        <Route 
        path="/"
        element={
          user ? (
            <h1 className="text-center mt-10 text-2xl font-bold">Welcome, {user.email}!</h1>
          ) : (
            <Navigate to="/login" replace />
          )
        }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}