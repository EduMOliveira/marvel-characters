import { ResultType } from "../../types/creatureApiTypes";
import {
  CreatureCard,
  CreatureId,
  CreatureEditButton,
  CreatureCardWrapper,
  CreatureInfo,
  CreatureTitleWrapper,
  CreatureDesc,
  CreatureSubTitle,
  CreatureSeries,
  CreatureSeriesItem,
} from "./styles";

type CreatureBigCardType = {
  data: ResultType;
};

export function CreatureBigCard({ data }: CreatureBigCardType) {
  const { description, id, name, series, thumbnail } = data;

  return (
    <CreatureCard>
      <CreatureId>#{id}</CreatureId>
      <CreatureEditButton onClick={() => console.log("editar")}>
        Editar
      </CreatureEditButton>
      <CreatureCardWrapper>
        <img
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={`${name} card`}
        />
      </CreatureCardWrapper>
      <CreatureInfo>
        <CreatureTitleWrapper>
          <span>{name}</span>
        </CreatureTitleWrapper>
        <CreatureDesc>{description || `"Sem Descrição"`}</CreatureDesc>
        <CreatureSubTitle>Séries</CreatureSubTitle>
        <CreatureSeries>
          {series.items.length > 0 ? (
            series.items.map((serie, index) => {
              return (
                <CreatureSeriesItem key={index}>
                  {serie.name}
                </CreatureSeriesItem>
              );
            })
          ) : (
            <CreatureSeriesItem>Sem Série</CreatureSeriesItem>
          )}
        </CreatureSeries>
      </CreatureInfo>
    </CreatureCard>
  );
}
