import GenderSelection from "./GenderSelection";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import Logo from "../../components/Logo";
const SignUp = () => {
  const [inputFields, setInputFields] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "male",
  });

  const { loading, signup } = useSignup();

  const handleInputChange = (event, field) => {
    const value = event.target.value;
    setInputFields((values) => ({ ...values, [field]: value }));
  };

  const handleGenderChange = (gender) => {
    setInputFields((values) => ({ ...values, gender }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await signup(inputFields);
  };

  return (
    <div className="p-4 rounded-lg prose bg-[#2a323c] w-96 space-y-4">
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="text-center">
        <h1 className="mt-0 ">Sign Up</h1>
      </div>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <div className="space-y-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              value={inputFields.name}
              onChange={(e) => handleInputChange(e, "fullName")}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Username</span>
            </div>
            <input
              type="text"
              placeholder="Enter your desired username"
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
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Confirm Password</span>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full"
              value={inputFields.confirmPassword}
              onChange={(e) => handleInputChange(e, "confirmPassword")}
            />
          </label>
          <GenderSelection onGenderChange={handleGenderChange} />
        </div>
        <button
          className="btn btn-primary w-full text-white mt-8"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Sign Up"
          )}
        </button>
      </form>
      <p className="text-center text-sm">
        Already have an account?&nbsp;
        <Link to="/login" className="font-medium no-underline text-primary">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
