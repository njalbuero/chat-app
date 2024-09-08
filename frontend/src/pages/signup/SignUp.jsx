import GenderSelection from "./GenderSelection";

const SignUp = () => {
  return (
    <div className="p-4 rounded-lg prose bg-[#2a323c] w-96">
      <div className="text-center">
        <h1 className="mt-0 mb-4">Sign Up</h1>
      </div>
      <div className="space-y-4">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Username</span>
          </div>
          <input
            type="text"
            placeholder="Enter your username"
            className="input input-bordered w-full"
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
          />
        </label>
       <GenderSelection/>
      </div>
      <button className="btn btn-primary w-full text-white mt-8">
        Sign up
      </button>
      <p className="text-center text-sm mt-4">
        Already have an account?&nbsp;
        <a href="/" className="font-medium no-underline text-primary">
          Sign in
        </a>
      </p>
    </div>
  );
};

export default SignUp;
