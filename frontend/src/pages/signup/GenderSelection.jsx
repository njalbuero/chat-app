const GenderSelection = () => {
  return (
    <div className="flex space-x-4">
      <div className="flex items-center space-x-2 cursor-pointer">
        <span className="label-text">Male</span>
        <input type="radio" name="gender" className="radio" defaultChecked />
      </div>
      <div className="flex items-center space-x-2 cursor-pointer">
        <span className="label-text">Female</span>
        <input type="radio" name="gender" className="radio" />
      </div>
    </div>
  );
};

export default GenderSelection;
