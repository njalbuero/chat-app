import { useEffect, useState } from "react";
import useSearchUser from "../zustand/useSearchUser";
import toast from "react-hot-toast";

const useSearchUsersFetch = () => {
  const { search } = useSearchUser();
  const [loading, setLoading] = useState(false);
  const [searchedUsers, setSearchedUsers] = useState([]);

  useEffect(() => {
    if (!search) return; // Exit if search is empty

    const fetchSearchedUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/users/search?name=${search}`);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setSearchedUsers(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchedUsers();

    return () => {
      setSearchedUsers([]);
    };
  }, [search, setLoading, setSearchedUsers]);

  return { loading, searchedUsers };
};

export default useSearchUsersFetch;
