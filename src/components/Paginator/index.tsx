import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { PaginatorContainer, PaginatorButton, PaginatorText } from "./styles";

type PaginatorProps = {
  prev: () => void;
  next: () => void;
  page: number;
  items: number;
  offset: number;
  isLoading: boolean;
};

export function Paginator({
  prev,
  next,
  page,
  items,
  offset,
  isLoading,
}: PaginatorProps) {
  const roundedNumber = Math.ceil(items / offset);
  const prevEnable = page === 1 || isLoading;
  const nextEnable = roundedNumber <= page || isLoading;

  const prevHandler = () => {
    return prevEnable ? null : prev();
  };

  const nextHandler = () => {
    return nextEnable ? null : next();
  };

  return (
    <PaginatorContainer data-testid="paginator">
      <PaginatorButton disable={prevEnable} onClick={prevHandler}>
        <FaAngleLeft data-testid="svg-paginator-left" size={18} />
      </PaginatorButton>
      <PaginatorText>{`${page}/${
        roundedNumber < 1 ? 1 : roundedNumber
      }`}</PaginatorText>
      <PaginatorButton disable={nextEnable} onClick={nextHandler}>
        <FaAngleRight data-testid="svg-paginator-right" size={18} />
      </PaginatorButton>
    </PaginatorContainer>
  );
}
