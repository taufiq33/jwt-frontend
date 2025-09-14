import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <div className="container p-4 mx-auto max-w-80% border-1">
      <Navbar />
      <h1 className="text-3xl mb-6">Welcome!!</h1>
      <Outlet />
    </div>
  );
}
