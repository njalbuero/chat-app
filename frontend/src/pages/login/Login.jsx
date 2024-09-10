import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import Logo from "../../components/Logo";

const Login = () => {
  const [inputFields, setInputFields] = useState({
    username: "",
    password: "",
  });

  const { loading, login } = useLogin();

  const handleInputChange = (event, field) => {
    const value = event.target.value;
    setInputFields((values) => ({ ...values, [field]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await login(inputFields);
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
      <form className="space-y-4" onSubmit={handleFormSubmit}>
        <div className="space-y-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Username</span>
            </div>
            <input
              type="text"
              placeholder="Enter your username"
              className="input input-bordered w-full"
              value={inputFields.username}
              onChange={(e) => handleInputChange(e, "username")}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full"
              value={inputFields.password}
              onChange={(e) => handleInputChange(e, "password")}
            />
          </label>
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
