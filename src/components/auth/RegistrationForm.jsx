import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Field from "../common/Field";

export default function RegistrationForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
        data
      );
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      setError("root.random", {
        type: "random",
        message: error.response?.data?.message || "Registration failed!",
      });
    }
  };
  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      onSubmit={handleSubmit(submitForm)}
    >
      <Field label="First Name" error={errors.firstName}>
        <input
          {...register("firstName", { required: "First Name is required!" })}
          className={`auth-input ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          type="text"
          name="firstName"
          id="firstName"
        />
      </Field>
      <Field label="Last Name" error={errors.lastName}>
        <input
          {...register("lastName", { required: "Last Name is required!" })}
          className={`auth-input ${
            errors.lastName ? "border-red-500" : "border-gray-200"
          }`}
          type="text"
          name="lastName"
          id="lastName"
        />
      </Field>
      <Field label="Email" error={errors.email}>
        <input
          {...register("email", { required: "Email is required!" })}
          className={`auth-input ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          type="email"
          name="email"
          id="email"
        />
      </Field>
      <Field label="Password" error={errors.password}>
        <input
          {...register("password", {
            required: "Password is required!",
            minLength: {
              value: 8,
              message: "Password must be at least 6 characters long!",
            },
          })}
          className={`auth-input ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          type="password"
          name="password"
          id="password"
        />
      </Field>
      {errors.root?.random && (
        <p className="text-red-500 text-sm my-2">
          {errors.root.random.message}
        </p>
      )}
      <Field>
        <button
          className="auth-input bg-lwsGreen font-bold  text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Register
        </button>
      </Field>
    </form>
  );
}
