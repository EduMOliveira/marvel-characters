import { ReactNode } from "react";
import { ThePageContainer } from "./styles";

type PageContainerProps = {
  children: ReactNode;
};

export function PageContainer({ children }: PageContainerProps) {
  return <ThePageContainer>{children}</ThePageContainer>;
}
