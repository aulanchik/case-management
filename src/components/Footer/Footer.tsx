import { FC, useState, useEffect } from "react";
import { IFilter } from "@/interfaces";
import useCaseStore from "@/store/useCaseStore";
import { Section, Flex, Text, Input, PageNext } from "./styles";

const Footer: FC<IFilter> = ({ state }) => {
  const { total, loading, fetchCases } = useCaseStore();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchCases(
      state,
      undefined,
      undefined,
      undefined,
      currentPage,
      itemsPerPage,
    );
  }, [currentPage, fetchCases]);

  const totalPages = Math.ceil(total / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      handlePageChange(value);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, total);

  return (
    <Section>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Flex>
          <Text>{`${startItem}-${endItem} of ${total} cases`}</Text>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Input
              type="number"
              min="1"
              max={totalPages}
              value={currentPage}
              onChange={handleInputChange}
              style={{ width: "50px", textAlign: "center" }}
            />
            <Text>{`/ ${totalPages}`}</Text>
            <PageNext
              onClick={handleNextPage}
              disabled={currentPage >= totalPages}
            >
              &gt;
            </PageNext>
          </div>
        </Flex>
      )}
    </Section>
  );
};

export default Footer;
