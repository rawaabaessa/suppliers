import { SearchIcon } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="px-4 py-2 md:w-72 lg:w-96 flex items-center input-shadow border border-white-border rounded-2xl">
      <SearchIcon size={16} className="mr-2" />
      <input className="outline-none" placeholder="Search" />
    </div>
  );
};

export default SearchBar;
