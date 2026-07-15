type HeadingProps = {
  title?: string;
  children?: React.ReactNode;
};

const Heading = ({ title = "Dashboard", children }: HeadingProps) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default Heading;
