interface AuthHeaderProps {
  title: string;
  children?: React.ReactNode;
}
const AuthHeader = ({ title, children }: AuthHeaderProps) => {
  return (
    <div className="flex flex-col gap-3 my-5 ">
      <h1 className="text-center lg:text-start text-2xl font-bold capitalize">
        {title}
      </h1>
      <p className="text-center lg:text-start text-xs">{children}</p>
    </div>
  );
};

export default AuthHeader;
