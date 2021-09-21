import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return <InputContainer  {...props} />;
}
