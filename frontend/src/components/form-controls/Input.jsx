const Input = ({
  name,
  label,
  register,
  options,
  placeholder,
  type,
  errors,
}) => {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full"
        {...register(name, { ...options })}
      />
      {errors[name] && (
        <span className="pl-1 pt-2 text-red-500 text-sm float-end">
          {errors[name].message || `${label} is required`}
        </span>
      )}
    </label>
  );
};

export default Input;
