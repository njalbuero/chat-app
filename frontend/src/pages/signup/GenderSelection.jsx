const GenderSelection = ({ onGenderChange }) => {
  return (
    <div className="flex space-x-4">
      <div className="flex items-center space-x-2 cursor-pointer">
        <span className="label-text">Male</span>
        <input
          type="radio"
          name="gender"
          className="radio"
          defaultChecked
          onClick={() => {
            onGenderChange("male");
          }}
        />
      </div>
      <div className="flex items-center space-x-2 cursor-pointer">
        <span className="label-text">Female</span>
        <input
          type="radio"
          name="gender"
          className="radio"
          onClick={() => {
            onGenderChange("female");
          }}
        />
      </div>
    </div>
  );
};

export default GenderSelection;
