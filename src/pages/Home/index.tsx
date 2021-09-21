import { useState, ChangeEvent } from "react";
import { Input } from "../../components/Input";
import { PageContainer } from "../../components/PageContainer";
import { SearchButton } from "../../components/SearchButton";

import { HomeFormWrapper } from "./styles";

export function Home() {
  const [search, setSearch] = useState("");

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const searchButtonHandler = () => {
    if (search !== "") {
      //! do anything
    }
  };

  return (
    <PageContainer>
      <HomeFormWrapper>
        <Input
          placeholder="Iniciais..."
          value={search}
          onChange={inputChangeHandler}
        />
        <SearchButton onClick={searchButtonHandler}>Buscar</SearchButton>
      </HomeFormWrapper>
    </PageContainer>
  );
}
