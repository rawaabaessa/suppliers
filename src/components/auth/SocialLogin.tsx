import Button from "../../ui/Button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
const SocialLogin = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-6">
        <div className="h-0.5 w-full bg-black opacity-10" />
        <p>Or</p>
        <div className="w-full h-0.5 bg-black opacity-10" />
      </div>
      <div className="flex flex-col gap-3">
        <Button variant="social" fullWidth>
          <div className="flex justify-center items-center gap-2">
            <FcGoogle size={20} />
            <span>Continue with Google</span>
          </div>
        </Button>
        <Button variant="social" fullWidth>
          <div className="flex justify-center items-center gap-2">
            <FaApple size={20} />
            <span>Continue with Apple</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
