import GenderSelection from "./GenderSelection";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import useSignup from "../../hooks/useSignup";
import Logo from "../../components/Logo";
import Input from "../../components/formControls/Input";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { loading, signup } = useSignup();

  const onSubmit = async (data) => {
    await signup(data);
  };

  return (
    <div className="p-4 rounded-lg prose bg-[#2a323c] w-96 space-y-4">
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="text-center">
        <h1 className="mt-0 ">Sign Up</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <Input
            name="fullName"
            label="Full Name"
            register={register}
            options={{ required: true }}
            placeholder="Enter your full name"
            type="text"
            errors={errors}
          />
          <Input
            name="username"
            label="Username"
            register={register}
            options={{ required: true }}
            placeholder="Enter your desired username"
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
          <Input
            name="confirmPassword"
            label="Confirm Password"
            register={register}
            options={{
              required: true,
              validate: (val) => {
                if (watch("password") != val) {
                  return "Passwords do not match";
                }
              },
            }}
            placeholder="Confirm your password"
            type="password"
            errors={errors}
          />
          <GenderSelection register={register} />
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
