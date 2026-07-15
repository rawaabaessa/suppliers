const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-5 overflow-hidden">
      <div className="rounded-2x p-6 overflow-x-auto flex">
        <table className="w-full min-w-175 border-separate border-spacing-0 ">
          {children}
        </table>
      </div>
    </div>
  );
};

export default Table;
