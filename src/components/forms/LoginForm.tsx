// import logo from "../assets/Supplier.svg";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import AuthHeader from "../auth/AuthHeader";
import RemmberMe from "../auth/RemmberMe";
import SocialLogin from "../auth/SocialLogin";

const LoginForm = () => {
  return (
    <div className="flex flex-col gap-5">
      <AuthHeader title="sign in">
        Don't have an account ?{" "}
        <a href="#" className="underline">
          Create now
        </a>
      </AuthHeader>

      <form>
        <Input label="Email" placeholder="Enter your email" />
        <Input label="Password" placeholder="Enter your password" isPassword />
      </form>
      <RemmberMe />
      <div className="my-5">
        <Button variant="filled" fullWidth>
          Sign In
        </Button>
      </div>
      <SocialLogin />
    </div>
  );
};

export default LoginForm;
