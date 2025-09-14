import {
  Form,
  useActionData,
  useNavigation,
  useNavigate,
} from "react-router-dom";
import Input from "../components/Input";
import api from "../api/auth";

export default function Register() {
  const navigate = useNavigate();
  const data = useActionData();

  const isSubmitting = useNavigation().state === "submitting";

  if (data?.msg === "register user done") {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
    return <p>Register success!!, redirecting you to Login.. please wait...</p>;
  }

  return (
    <div className="flex gap-2 flex-col justify-center items-center">
      <h2 className="text-2xl">Register new User</h2>
      <hr />
      <Form method="post" action="/register">
        <Input label="Your Email" type="email" name={"email"} />
        <Input label="Username" name={"username"} />
        <Input label="Password" name={"password"} type="password" />
        <Input
          label="Confirmation Password"
          statusText
          name={"confirmationPassword"}
          type="password"
        />

        <p>{data?.msg}</p>

        <button
          type="submit"
          className="p-2 bg-blue-700 text-white border-1 border-blue-800 rounded shadow cursor-pointer hover:bg-blue-400 w-full mt-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Please wait .." : "Register"}
        </button>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  console.log(formData);

  try {
    const request = await api.post("/users", Object.fromEntries(formData), {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await request.data;
    return data;
  } catch (error) {
    return error.response.data;
  }
}
