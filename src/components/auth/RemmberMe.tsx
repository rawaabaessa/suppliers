const RemmberMe = () => {
  return (
    <div className="flex justify-between">
      <label className="text-xs text-gray-green flex items-center">
        <input type="checkbox" className="mr-1" />
        Remember me
      </label>
      <a href="#" className="text-gray-green underline text-xs">
        Forget password?
      </a>
    </div>
  );
};

export default RemmberMe;
