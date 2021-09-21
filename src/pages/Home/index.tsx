import { useEffect, useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCreatures } from "../../redux/actions/creatureActions";
import { RootState } from "../../redux/store";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { Paginator } from "../../components/Paginator";
import { CardListContainer } from "../../components/CardListContainer";
import { PageContainer } from "../../components/PageContainer";
import { SearchButton } from "../../components/SearchButton";

import { HomeFormWrapper } from "./styles";

export function Home() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const creatureState = useSelector((state: RootState) => state.creatures);
  const { creatures, loading, error } = creatureState;

  const itemsPerPage = 35;
  const totalItemsHidden = (page - 1) * itemsPerPage;

  useEffect(() => {
    dispatch(
      getCreatures(
        `v1/public/characters?limit=${itemsPerPage}&offset=${totalItemsHidden}`
      )
    );
  }, [dispatch, itemsPerPage, totalItemsHidden]);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const searchButtonHandler = () => {
    if (search !== "") {
      //! do anything
    }
  };

  const paginatePrevHandler = () => setPage((prev) => prev - 1);
  const paginateNextHandler = () => setPage((prev) => prev + 1);

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

      <Paginator
        prev={paginatePrevHandler}
        next={paginateNextHandler}
        page={page}
        items={creatureState.creatures.total}
        offset={itemsPerPage}
        isLoading={creatureState.loading}
      />
    </PageContainer>
  );
}
