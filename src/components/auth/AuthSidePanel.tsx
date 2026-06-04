import AuthSidePanelHeader from "./AuthSidePanelHeader";
import Card from "../../ui/Card";

interface Feature {
  title: string;
  description: string;
}

interface AuthSidePanelProps {
  title: string;
  description: string;
  features: Feature[];
}

const AuthSidePanel = ({
  title,
  description,
  features,
}: AuthSidePanelProps) => {
  return (
    <div className="relative hidden lg:flex bg-primary w-1/2 ">
      <div className="h-60 w-20 bg-white rounded-full blur-3xl opacity-15 absolute top-0 left-1/2" />
      <div className="h-60 w-20 bg-white rounded-full blur-3xl opacity-15 absolute bottom-0 right-10" />
      <div className="flex flex-col items-start justify-center gap-5 px-10">
        <AuthSidePanelHeader title={title} description={description} />
        <div className="w-full mt-5">
          {features.map((feature, index) => (
            <Card key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthSidePanel;
