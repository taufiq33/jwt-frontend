import { Form, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="flex gap-2 p-2 ">
      <li>
        <NavLink className="border-b-1 text-blue-500" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="border-b-1 text-blue-500" to="/dashboard">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink className="border-b-1 text-green-500" to="/login">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink className="border-b-1 text-green-500" to="/register">
          Register
        </NavLink>
      </li>
      <li>
        <Form action="/logout" method="post">
          <button className="border-b-1 text-red-500" type="submit">
            Logout
          </button>
        </Form>
      </li>
    </ul>
  );
}
