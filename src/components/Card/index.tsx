import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setSelectedCreature } from "../../redux/actions/selectedCreatureActions";
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
  const history = useHistory();
  const { id, thumbnail, name } = props.data;
  const dispatch = useDispatch();

  const selectedButtonHandler = () => {
    dispatch(setSelectedCreature(props.data));
    history.push(`/creature/${id}`);
  };

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
        <CardButton onClick={selectedButtonHandler}>Ver Mais</CardButton>
      </CardBottomContainer>
    </CardContainer>
  );
}
