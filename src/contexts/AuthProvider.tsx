import { useCallback, useMemo, useState, type ReactNode } from "react";
import type { User } from "../types/User";
import { AuthContext, type AuthContextValue } from "./AuthContext";
import type { LoginCredentials, SignupData } from "../types/AuthData";
import { loginRequest, signupRequest } from "../services/authService";

type AuthProviderProps = {
  children: ReactNode;
};

const AUTH_STORAGE_KEY = "suppliers.auth";

const getStoredAuth = (): Pick<AuthContextValue, "user" | "token"> => {
  const storedAuth = localStorage.getItem(AUTH_STORAGE_KEY);

  if (!storedAuth) {
    return { user: null, token: null };
  }

  try {
    return JSON.parse(storedAuth) as Pick<AuthContextValue, "user" | "token">;
  } catch {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    return { user: null, token: null };
  }
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState(() => getStoredAuth());

  const setAuthenticatedUser = useCallback((user: User, token: string) => {
    const nextAuth = { user, token };
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(nextAuth));
    setAuth(nextAuth);
  }, []);

  const login = useCallback(
    async (credentials: LoginCredentials) => {
      const response = await loginRequest(credentials);

      setAuthenticatedUser(response.data.user, response.data.token);
      console.log(response.data.user);
      return response.data.user;
    },
    [setAuthenticatedUser],
  );

  const signup = useCallback(
    async (data: SignupData) => {
      const response = await signupRequest(data);

      setAuthenticatedUser(response.data.user, response.data.token);
      console.log(response.data.user);
      return response.data.user;
    },
    [setAuthenticatedUser],
  );

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setAuth({ user: null, token: null });
    // navigate("/login");
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user: auth.user,
      token: auth.token,
      isAuthenticated: Boolean(auth.user && auth.token),
      login,
      signup,
      logout,
    }),
    [auth.user, auth.token, login, signup, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
