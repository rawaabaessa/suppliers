import AuthHeader from "../auth/AuthHeader";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import SocialLogin from "../auth/SocialLogin";
import TermsAndPolicy from "../auth/TermsAndPolicy";
import { Link, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupFormData } from "../../schema";
import ErrorMessage from "../ErrorMessage";
import { useAuth } from "../../contexts/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";

const SignupForm = () => {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();
  const { signup, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
    try {
      const user = await signup({
        email: data.email,
        name: data.name,
        password: data.password,
      });
      if (user?.role.name === "resturant") {
        navigate("/");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setServerError(error.response?.data?.message ?? "Something went wrong");
      }
    }
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
        {serverError && <ErrorMessage message={serverError} />}
        <div className="my-5">
          <Button
            variant="filled"
            type="submit"
            disabled={isSubmitting}
            fullWidth
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                <span>Creating</span>
              </div>
            ) : (
              "Create account"
            )}
          </Button>
        </div>
      </form>
      <SocialLogin />
    </div>
  );
};

export default SignupForm;
