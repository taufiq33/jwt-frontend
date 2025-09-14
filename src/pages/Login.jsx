import {
  useActionData,
  useNavigation,
  useNavigate,
  Form,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import Input from "../components/Input";
import api from "../api/auth";
import { authSliceAction } from "../store/appStore";

export default function Login() {
  const data = useActionData();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (data?.accessToken) {
    dispatch(
      authSliceAction.setAuth({
        userId: data.user.id,
        username: data.user.username,
        email: data.user.email,
        accessToken: data.accessToken,
      })
    );

    navigate("/dashboard");
  }

  const isSubmitting = useNavigation().state === "submitting";
  return (
    <div className="flex gap-2 flex-col justify-center items-center">
      <h2 className="text-2xl">Login</h2>
      <hr />
      <Form method="post" action="/login">
        <Input label="Your Email" type="email" name={"email"} />

        <Input label="Password" name={"password"} type="password" />

        <p>{data?.msg}</p>

        <button
          type="submit"
          className="p-2 bg-blue-700 text-white border-1 border-blue-800 rounded shadow cursor-pointer hover:bg-blue-400 w-full mt-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Please wait .." : "Login"}
        </button>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();

  try {
    const request = await api.post(
      "/users/login",
      Object.fromEntries(formData)
    );
    return request.data;
  } catch (error) {
    return error.response.data;
  }
}
