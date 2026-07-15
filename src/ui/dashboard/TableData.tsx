const TableData = ({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}) => {
  return (
    <td
      className={`px-6 py-6 text-center text-sm font-semibold capitalize border-b border-light-black/30 ${classname}`}
    >
      {children}
    </td>
  );
};

export default TableData;
