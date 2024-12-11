import { create } from "zustand";
import { CaseStore } from "@/types";
import { fetchCases, updateCaseStatus } from "@/api/cases";

const useCaseStore = create<CaseStore>((set) => ({
  cases: [],
  selectedCases: [],
  selectedStatus: "",
  total: 0,
  loading: false,
  fetchCases: async (status, search, sort, order, page) => {
    set({ loading: true });
    const { data, total } = await fetchCases(status, search, sort, order, page);
    set({ cases: data, total, loading: false });
  },
  updateStatus: async (ids, status) => {
    await updateCaseStatus(ids, status);
  },
  toggleCaseSelection: (caseId) => {
    set((state) => ({
      selectedCases: state.selectedCases.includes(caseId)
        ? state.selectedCases.filter((id) => id !== caseId)
        : [...state.selectedCases, caseId],
    }));
  },
  setStatus: (status) => set({ selectedStatus: status }),
}));

export default useCaseStore;
