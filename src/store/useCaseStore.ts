import { create } from "zustand";
import { fetchCases, updateCaseStatus } from "@/api/cases";
import { CaseStore } from "@/types";

const useCaseStore = create<CaseStore>((set, get) => ({
  cases: [],
  selectedCases: [],
  selectedStatus: "",
  total: 0,
  loading: false,
  currentPage: 1,
  sortField: null,
  sortOrder: "asc",
  fetchCases: async (status, search, sort, order, page = 1, limit = 10) => {
    set({ loading: true });

    try {
      const response = await fetchCases(
        status,
        search,
        sort,
        order,
        page,
        limit,
      );
      const { data, total } = response;

      set({ cases: data, total, loading: false });
    } catch (error) {
      console.error("Failed to fetch cases:", error);
      set({ cases: [], total: 0, loading: false });
    }
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
  setCurrentPage: (page) => set({ currentPage: page }),
  setSort: (field, status) => {
    const { sortField, sortOrder } = get();
    const newOrder =
      sortField === field && sortOrder === "asc" ? "desc" : "asc";
    set({ sortField: field, sortOrder: newOrder });
    get().fetchCases(status, undefined, field, newOrder);
  },
}));

export default useCaseStore;
