import { create } from "zustand";

const useSearchConversation = create((set) => ({
	search: "",
	setSearch: (search) => set({ search }),
}));

export default useSearchConversation;