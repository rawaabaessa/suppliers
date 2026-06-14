import AuthHeader from "../auth/AuthHeader";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import SocialLogin from "../auth/SocialLogin";
import TermsAndPolicy from "../auth/TermsAndPolicy";
import { Link } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupFormData } from "../../schema";
import ErrorMessage from "../ErrorMessage";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<SignupFormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-4 md:gap-5">
      <AuthHeader title="Create Account">
        Have a farm ?{" "}
        <Link to={"/signup/supplier"} className="underline">
          Join as a supplier
        </Link>
      </AuthHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Name"
          placeholder="Enter your name"
          {...register("name")}
        />
        {errors.name && <ErrorMessage message={`${errors.name?.message}`} />}

        <Input
          label="Email"
          placeholder="Enter your email"
          {...register("email")}
        />
        {errors.email && <ErrorMessage message={`${errors.email?.message}`} />}
        <Input
          label="Password"
          placeholder="Enter your password"
          isPassword
          {...register("password")}
        />
        {errors.password && (
          <ErrorMessage message={`${errors.password?.message}`} />
        )}
        <TermsAndPolicy {...register("terms")} />
        {errors.terms && <ErrorMessage message={`${errors.terms?.message}`} />}
        <div className="my-5">
          <Button
            variant="filled"
            type="submit"
            disabled={isSubmitting}
            fullWidth
          >
            {isSubmitting ? "Creating..." : "Create Account"}
          </Button>
        </div>
      </form>
      <SocialLogin />
    </div>
  );
};

export default SignupForm;
