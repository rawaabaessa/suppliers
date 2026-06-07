const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-black font-semibold text-xl md:text-3xl">{children}</h2>
  );
};

export default Heading;
