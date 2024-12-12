import { FC, useState } from "react";
import { Flex, Input, Icon, SearchButton } from "./styles";
import useCaseStore from "@/store/useCaseStore";
import img from "@/img";

const Search: FC = () => {
  const { loading, fetchCases } = useCaseStore();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    await fetchCases(undefined, searchQuery);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);

    if (!e.target.value) {
      fetchCases();
    }
  };

  return (
    <Flex>
      <Icon src={img.iconSearch} alt="Search icon" />
      <Input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => handleOnChange(e)}
      />
      <SearchButton onClick={handleSearch} disabled={loading}>
        Search
      </SearchButton>
    </Flex>
  );
};

export default Search;
