const Login = () => {
  return (
    <div className="p-4 rounded-lg prose space-y-4 bg-[#2a323c] w-96">
      <div className="text-center">
        <h1 className="mt-0 mb-4">Welcome back</h1>
        <p className="font-extralight">Please enter your account details</p>
      </div>
      <div className="space-y-4">
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
      </div>
      <div>
        <a href="/" className="text-sm font-medium no-underline">
          Forgot password?
        </a>
      </div>
      <button className="btn btn-primary w-full text-white">Sign in</button>
      <p className="text-center text-sm">
        Don&apos;t have an account?&nbsp;
        <a href="/" className="font-medium no-underline text-primary">
          Sign up
        </a>
      </p>
    </div>
  );
};

export default Login;
