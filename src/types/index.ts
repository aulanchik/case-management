type Case = {
  caseName: string;
  priority: string;
  assignee: string;
  description: string;
  status: string;
  type: string;
  dateCreated: string;
  lastUpdated: string;
};

type CaseStore = {
  cases: Case[];
  selectedCases: string[];
  selectedStatus: string;
  total: number;
  loading: boolean;
  currentPage: any;
  sortField: string | null;
  sortOrder: string;
  fetchCases: (
    status?: string,
    search?: string,
    sort?: string,
    order?: string,
    page?: number,
    limit?: number,
  ) => Promise<void>;
  updateStatus: (ids: string[], status: string) => Promise<void>;
  toggleCaseSelection: (caseId: string) => void;
  setStatus: (status: string) => void;
  setCurrentPage: (page: number) => void;
  setSort: (field: string) => void;
};

export type { Case, CaseStore };
