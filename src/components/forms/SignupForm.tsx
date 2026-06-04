import AuthHeader from "../auth/AuthHeader";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import SocialLogin from "../auth/SocialLogin";
import TermsAndPolicy from "../auth/TermsAndPolicy";

const SignupForm = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-5">
      <AuthHeader title="Create Account">
        Have a farm ?{" "}
        <a href="#" className="underline">
          Join as a supplier
        </a>
      </AuthHeader>
      <form>
        <Input label="Name" placeholder="Enter your name" />
        <Input label="Email" placeholder="Enter your email" />
        <Input label="Password" placeholder="Enter your password" isPassword />
      </form>
      <TermsAndPolicy />
      <div className="my-5">
        <Button variant="filled" fullWidth>
          Create Account
        </Button>
      </div>
      <SocialLogin />
    </div>
  );
};

export default SignupForm;
