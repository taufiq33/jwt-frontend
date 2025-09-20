import { Form, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const accessToken = useSelector((state) => state.auth.accessToken);

  return (
    <ul className="flex gap-2 p-2 ">
      <li>
        <NavLink className="border-b-1 text-blue-500" to="/">
          Home
        </NavLink>
      </li>

      {accessToken && (
        <li>
          <NavLink className="border-b-1 text-blue-500" to="/dashboard">
            Dashboard
          </NavLink>
        </li>
      )}
      {!accessToken && (
        <>
          <li>
            <NavLink className="border-b-1 text-green-500" to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className="border-b-1 text-green-500" to="/register">
              Register
            </NavLink>
          </li>{" "}
        </>
      )}
      {accessToken && (
        <li>
          <Form action="/logout" method="post">
            <button
              className="cursorpointer border-b-1 text-red-500"
              type="submit"
            >
              Logout
            </button>
          </Form>
        </li>
      )}
    </ul>
  );
}
