import { ReactNode } from "react";
import { theme } from "../../global/styles/theme";
import { LoaderIndicator } from "../LoaderIndicator";
import { ListContainer } from "./styles";

type ListTypes = {
  children?: ReactNode;
  isError: boolean;
  isLoading: boolean;
  isEmpty: boolean;
};

export function CardListContainer({
  children,
  isError,
  isLoading,
  isEmpty,
}: ListTypes) {
  const returnHandler = () => {
    if (isLoading) {
      return (
        <LoaderIndicator size={64} weight={6} color={theme.colors.detail} />
      );
    } else if (isError) {
      return <div>Oops Error!</div>;
    } else if (isEmpty) {
      return <div>Sem Resultado!</div>;
    } else {
      return children;
    }
  };

  return <ListContainer>{returnHandler()}</ListContainer>;
}
