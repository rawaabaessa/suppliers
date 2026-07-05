import Button from "../../ui/Button";
import Input from "../../ui/Input";
import AuthHeader from "../auth/AuthHeader";
import RemmberMe from "../auth/RemmberMe";
import SocialLogin from "../auth/SocialLogin";
import ErrorMessage from "../ErrorMessage";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schema";
import type { LoginFormData } from "../../schema";
import { useAuth } from "../../contexts/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BtnSpinner from "../BtnSpinner";

const LoginForm = () => {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      const user = await login({
        email: data.email,
        password: data.password,
      });
      if (user?.farmer?.status === "pending") {
        navigate("/account-pending");
      }
      if (user?.role.name === "restaurant") {
        navigate("/");
      } else if (user?.role.name === "farmer") {
        navigate("/");
      } else if (user?.role.name === "admin") {
        navigate("/");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setServerError(error.response?.data?.message ?? "Something went wrong");
      }
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <AuthHeader title="sign in">
        Don't have an account ?{" "}
        <Link to="/signup" className="underline">
          Create now
        </Link>
      </AuthHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
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

        <RemmberMe />
        {serverError && <ErrorMessage message={serverError} />}
        <div className="my-5">
          <Button
            variant="filled"
            fullWidth
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? <BtnSpinner /> : "Sign in"}
          </Button>
        </div>
      </form>
      <SocialLogin />
    </div>
  );
};

export default LoginForm;
