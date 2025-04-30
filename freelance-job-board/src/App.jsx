import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Routes>
        <Route path="/" element={<h1 className="text-center mt-10 text-2xl font-bold">Welcome to Smart Freelance</h1>} />
      </Routes>
    </div>
  );
}