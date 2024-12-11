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
  fetchCases: (
    status?: string,
    search?: string,
    sort?: string,
    order?: string,
    page?: number,
  ) => Promise<void>;
  updateStatus: (ids: string[], status: string) => Promise<void>;
  toggleCaseSelection: (caseId: string) => void;
  setStatus: (status: string) => void;
};

export type { Case, CaseStore };