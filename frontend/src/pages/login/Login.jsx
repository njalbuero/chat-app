import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import Logo from "../../components/Logo";
import { useForm } from "react-hook-form";
import Input from "../../components/formControls/Input";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loading, login } = useLogin();

  const onSubmit = async (data) => {
    await login(data);
  };

  return (
    <div className="p-4 rounded-lg prose space-y-4 bg-[#2a323c] w-96">
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="text-center">
        <h1 className="mt-0 mb-4 text-2xl">Welcome to Piper Chat</h1>
        <p className="font-extralight">Please enter your account details</p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <Input
            name="username"
            label="Username"
            register={register}
            options={{ required: true }}
            placeholder="Enter your username"
            type="text"
            errors={errors}
          />
          <Input
            name="password"
            label="Password"
            register={register}
            options={{ required: true }}
            placeholder="Enter your password"
            type="password"
            errors={errors}
          />
        </div>
        <div>
          <a href="/" className="text-sm font-medium no-underline">
            Forgot password?
          </a>
        </div>
        <button
          className="btn btn-primary w-full text-white"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Sign In"
          )}
        </button>
      </form>
      <p className="text-center text-sm">
        Don&apos;t have an account?&nbsp;
        <Link to="/signup" className="font-medium no-underline text-primary">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
