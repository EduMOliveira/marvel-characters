import { IoIosArrowBack } from "react-icons/io";
import { useHistory } from "react-router-dom";

import { BackButtonContainer } from "./styles";

type Props = {
  to: string;
  text: string;
};

export function BackButton({ to, text }: Props) {
  const history = useHistory();
  const navigateToHandler = () => history.push(to);

  return (
    <BackButtonContainer onClick={navigateToHandler}>
      <IoIosArrowBack size={28} />
      <span>{text}</span>
    </BackButtonContainer>
  );
}
