import { useState, ChangeEvent } from "react";
import { Input } from "../../components/Input";
import { PageContainer } from "../../components/PageContainer";
import { SearchButton } from "../../components/SearchButton";
import { Card } from "../../components/Card";
import { CardListContainer } from "../../components/CardListContainer";

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

  const data = [
    {
      id: 252525,
      name: "Spider",
      description: "The SpiderMan",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
        extension: "jpg",
      },
      series: {
        items: [
          {
            name: "Primeira Série",
          },
        ],
      },
    },
  ];

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
        isLoading={false}
        isEmpty={data.length === 0}
        isError={false}
      >
        {data.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </CardListContainer>
    </PageContainer>
  );
}
