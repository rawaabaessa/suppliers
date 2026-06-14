const TermsAndPolicy = ({ ...props }) => {
  return (
    <label className="text-xs text-gray-green flex items-center">
      <input type="checkbox" className="mr-1" {...props} />I agree to the
      <a href="#" className="underline ml-1 hover:text-primary">
        Terms and Policy
      </a>
    </label>
  );
};

export default TermsAndPolicy;
