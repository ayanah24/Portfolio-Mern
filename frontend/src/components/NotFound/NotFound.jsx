import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-gray-200 px-4">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-gray-400 mb-6">Page not found</p>
      <Link
        to="/"
        className="text-sky-400 hover:underline"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
