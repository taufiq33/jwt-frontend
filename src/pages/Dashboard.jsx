import { redirect, useLoaderData } from "react-router-dom";
import api from "../api/auth";

export default function Dashboard() {
  const dataUsers = useLoaderData();
  return (
    <div>
      <h2 className="text-2xl">Dashboard Page</h2>
      <hr />
      {dataUsers.data.map((item) => (
        <p key={item.id}>{item.email}</p>
      ))}
    </div>
  );
}

export async function loader() {
  try {
    const request = await api.get("/users");
    return request.data;
  } catch (error) {
    if (error.response?.status === 401) {
      return redirect("/login");
    }
  }
}
