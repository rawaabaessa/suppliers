import { SearchIcon } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex h-9 w-full items-center rounded-2xl border border-white-border bg-white px-4 shadow-sm md:w-[295px] lg:w-[360px]">
      <SearchIcon size={18} className="mr-3 text-primary" />
      <input
        className="w-full bg-transparent text-sm text-gray-green outline-none placeholder:text-gray-green/70"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
