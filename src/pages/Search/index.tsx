import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import { getCreatures } from "../../redux/actions/creatureActions";
import { BackButton } from "../../components/BackButton";
import { Card } from "../../components/Card";
import { CardListContainer } from "../../components/CardListContainer";
import { Paginator } from "../../components/Paginator";
import { PageContainer } from "../../components/PageContainer";

import { SearchTitle, SearchSlug } from "./styles";

type PageParams = {
  slug: string;
};

export function Search() {
  const { slug } = useParams<PageParams>();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const creatureState = useSelector((state: RootState) => state.creatures);
  const { creatures, loading, error } = creatureState;

  const itemsPerPage = 16;
  const totalItemsHidden = (page - 1) * itemsPerPage;

  useEffect(() => {
    dispatch(
      getCreatures(
        `v1/public/characters?nameStartsWith=${slug}&limit=${itemsPerPage}&offset=${totalItemsHidden}`
      )
    );
  }, [dispatch, slug, itemsPerPage, totalItemsHidden]);

  const paginatePrevHandler = () => setPage((prev) => prev - 1);
  const paginateNextHandler = () => setPage((prev) => prev + 1);

  return (
    <PageContainer>
      <BackButton to="/" text="Inicio" />
      <SearchTitle>Você pesquisou por: </SearchTitle>
      <SearchSlug>{slug}</SearchSlug>

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
