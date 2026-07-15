type ChipsProps = {
  title: string;
  isActive?: boolean;
};

const Chips = ({ title, isActive = false }: ChipsProps) => {
  return (
    <button
      className={`w-fit border-2 border-light-green py-1 px-8 rounded-3xl ${
        isActive ? "bg-light-green text-white" : "text-light-green"
      }`}
    >
      {title}
    </button>
  );
};

export default Chips;
