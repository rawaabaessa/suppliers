// import logo from "../assets/Supplier.svg";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import AuthHeader from "../auth/AuthHeader";
import RemmberMe from "../auth/RemmberMe";
import SocialLogin from "../auth/SocialLogin";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schema";
import type { LoginFormData } from "../../schema";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("LOGIN DATA:", data);
  };

  return (
    <div className="flex flex-col gap-5">
      <AuthHeader title="sign in">
        Don't have an account ?{" "}
        <a href="#" className="underline">
          Create now
        </a>
      </AuthHeader>

      <form>
        <Input
          label="Email"
          placeholder="Enter your email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        <Input
          label="Password"
          placeholder="Enter your password"
          isPassword
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </form>
      <RemmberMe />
      <div className="my-5">
        <Button variant="filled" fullWidth onClick={handleSubmit(onSubmit)}>
          Sign In
        </Button>
      </div>
      <SocialLogin />
    </div>
  );
};

export default LoginForm;
