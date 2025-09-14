import { useLoaderData } from "react-router-dom";
import api from "../api/auth";

export default function Dashboard() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2 className="text-2xl">Dashboard Page</h2>
    </div>
  );
}

export async function loader() {
  try {
    const request = await api.get("/users");
    return request.data;
  } catch (error) {
    return error.response;
  }
}
