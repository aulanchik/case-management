import { FC } from "react";
import { IFilter } from "@/interfaces";
import useCaseStore from "@/store/useCaseStore";
import { Views, Select } from "./styles";

const BatchAction: FC<IFilter> = ({ state }) => {
  const { selectedCases, selectedStatus, setStatus, updateStatus, fetchCases } =
    useCaseStore();

  const handleStatusChange = async (status: string) => {
    if (!selectedCases.length) {
      alert("Please select at least one case.");
      return;
    }
    setStatus(status);
    await updateStatus(selectedCases, status);
    fetchCases(state);
  };

  return (
    <Views>
      <Select
        value={selectedStatus}
        onChange={(e) => handleStatusChange(e.target.value)}
      >
        {selectedStatus === "" && (
          <option value="" disabled hidden>
            Batch action ▼
          </option>
        )}
        <option value="Accepted">Accepted</option>
        <option value="Rejected">Rejected</option>
      </Select>
    </Views>
  );
};

export default BatchAction;
