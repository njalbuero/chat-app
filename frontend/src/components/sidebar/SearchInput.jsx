import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className="p-4 flex items-center gap-2">
      <input type="text" placeholder="Search..." className="input input-bordered w-full" />
      <button className="btn btn-primary rounded-full">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchInput;
