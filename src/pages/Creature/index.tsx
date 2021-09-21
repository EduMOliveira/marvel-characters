import { useParams } from "react-router";
import { PageContainer } from "../../components/PageContainer";

type Params = {
  id: string;
};

export function Creature() {
  const { id }: Params = useParams();
  return (
    <PageContainer>
      <div>{id}</div>
    </PageContainer>
  );
}
