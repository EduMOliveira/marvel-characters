import { LoaderContainer } from "./styles";

export type LoaderProps = {
  size: number;
  weight: number;
  color: string;
};

export function LoaderIndicator({ size, weight, color }: LoaderProps) {
  return <LoaderContainer size={size} weight={weight} color={color} />;
}
