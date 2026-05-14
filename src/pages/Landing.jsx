import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <button
        onClick={() => navigate("/dashboard")}
        className="px-6 py-3 bg-indigo-500 text-white text-sm font-medium rounded-xl hover:bg-indigo-600 transition-colors"
      >
        Go to Dashboard
      </button>
    </div>
  );
}

