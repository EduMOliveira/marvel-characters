import { ButtonHTMLAttributes } from "react";
import { SearchButtonContainer } from "./styles";

type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function SearchButton(props: SubmitButtonProps) {
  return <SearchButtonContainer {...props} />;
}
