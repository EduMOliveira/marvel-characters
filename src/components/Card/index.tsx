import { ResultType } from "../../types/creatureApiTypes";
import {
  CardContainer,
  CardImage,
  CardBottomContainer,
  CardButton,
} from "./styles";

type CardProps = {
  data: ResultType;
};

export function Card(props: CardProps) {
  const { thumbnail, name } = props.data;

  return (
    <CardContainer>
      <CardImage>
        <img
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={`${name} card`}
          draggable="false"
        />
      </CardImage>
      <CardBottomContainer>
        <span>{name}</span>
        <CardButton>Ver Mais</CardButton>
      </CardBottomContainer>
    </CardContainer>
  );
}
