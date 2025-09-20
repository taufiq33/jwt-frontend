import { useState, useEffect } from "react";
import api from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [dataUsers, setDataUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      try {
        const request = await api.get("/users");
        const data = request.data;
        setDataUsers(data.data);
      } catch (error) {
        if (error.response?.status === 401) {
          navigate("/login");
        }
      }
    }

    getUsers();
  }, [navigate]);

  return (
    <div>
      <h2 className="text-2xl">Dashboard Page</h2>
      <hr />
      {dataUsers.map((item) => (
        <p key={item.id}>{item.email}</p>
      ))}
    </div>
  );
}
