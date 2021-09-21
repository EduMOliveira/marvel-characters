import { TextareaHTMLAttributes } from "react";
import { TextAreaContainer } from "./styles";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextArea(props: TextAreaProps) {
  return <TextAreaContainer {...props} />;
}
