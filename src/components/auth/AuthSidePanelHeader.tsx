interface AuthSidePanelHeaderProps {
  title: string;
  description: string;
}

const AuthSidePanelHeader = ({
  title,
  description,
}: AuthSidePanelHeaderProps) => {
  return (
    <>
      <h1 className="text-white font-bold text-4xl">{title}</h1>
      <p className="text-xl text-green-white opacity-70">{description}</p>
    </>
  );
};

export default AuthSidePanelHeader;
