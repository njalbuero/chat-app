import { create } from "zustand";

const useSearchUser = create((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
  newConversationUser: null,
  setNewConversationUser: (newConversationUser) => set({ newConversationUser }),
}));

export default useSearchUser;
