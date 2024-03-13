import { create } from "zustand";

const useStoreData = create((set) => ({
    banks: [],
    order: "",
    setBankList: () => set(() => ({ banks: banks })),
    setOrder: () => set(() => ({ order: order})),
}))

export default useStoreData