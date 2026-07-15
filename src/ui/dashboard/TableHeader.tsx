const TableHeader = ({
  title,
  classname,
}: {
  title: string;
  classname?: string;
}) => {
  return (
    <th
      className={`px-6 py-4 text-center text-gray-500 text-sm font-semibold ${classname}`}
    >
      {title}
    </th>
  );
};

export default TableHeader;
