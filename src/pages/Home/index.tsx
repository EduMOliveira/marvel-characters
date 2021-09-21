import { useEffect, useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Input } from "../../components/Input";
import { getCreatures } from "../../redux/actions/creatureActions";
import { PageContainer } from "../../components/PageContainer";
import { SearchButton } from "../../components/SearchButton";
import { Card } from "../../components/Card";
import { CardListContainer } from "../../components/CardListContainer";

import { HomeFormWrapper } from "./styles";

export function Home() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const creatureState = useSelector((state: RootState) => state.creatures);
  const { creatures, loading, error } = creatureState;

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const searchButtonHandler = () => {
    if (search !== "") {
      //! do anything
    }
  };

  useEffect(() => {
    dispatch(getCreatures(`v1/public/characters?limit=35&offset=0`));
  }, [dispatch]);

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

      <CardListContainer
        isLoading={loading}
        isEmpty={creatures.results.length === 0}
        isError={error}
      >
        {creatures.results.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </CardListContainer>
    </PageContainer>
  );
}
