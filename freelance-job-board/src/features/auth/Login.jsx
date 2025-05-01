import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock validation: any email/password is accepted for now
    if (email && password) {
      const fakeUser = { email }; 
      login(fakeUser); // save to context and localStorage
      navigate("/"); // redirect to homepage or dashboard
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
