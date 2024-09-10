import useSearchConversation from "../../zustand/useSearchConversation";

const SearchInput = () => {
  const {search,setSearch} = useSearchConversation();

  return (
    <form className="p-4 flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered w-full"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </form>
  );
};

export default SearchInput;
