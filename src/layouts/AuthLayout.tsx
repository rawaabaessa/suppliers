import logo from "../assets/Supplier.svg";
import AuthSidePanel from "../components/auth/AuthSidePanel";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
  }[];
}

const AuthLayout = ({
  title,
  description,
  features,
  children,
}: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex">
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col px-5 py-10 md:px-30">
          <div className="flex items-center justify-center lg:justify-start">
            <img src={logo} alt="Login" className="w-30" />
          </div>
          {children}
        </div>
      </div>
      <AuthSidePanel
        title={title}
        description={description}
        features={features}
      />
    </div>
  );
};

export default AuthLayout;
