import { client } from "./client";

const fetchCases = async (
  status?: string,
  search?: string,
  sort?: string,
  order?: string,
  page?: number,
  limit: number = 50,
) => {
  const params: Record<string, string | number | undefined> = {
    status,
    search,
    sort,
    order,
    page,
    limit,
  };

  const response = await client.get("/requests", { params });
  return response.data;
};

const updateCaseStatus = async (ids: string[], status: string) => {
  const response = await client.put("/update-status", {
    ids,
    status,
  });
  return response.data;
};

export { fetchCases, updateCaseStatus };
