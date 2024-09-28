const GenderSelection = ({ register }) => {
  return (
    <div className="flex space-x-4">
      <div className="flex items-center space-x-2 cursor-pointer">
        <span className="label-text">Male</span>
        <input
          type="radio"
          className="radio"
          defaultChecked
          value="male"
          {...register("gender")}
        />
      </div>
      <div className="flex items-center space-x-2 cursor-pointer">
        <span className="label-text">Female</span>
        <input
          type="radio"
          className="radio"
          value="female"
          {...register("gender")}
        />
      </div>
    </div>
  );
};

export default GenderSelection;
