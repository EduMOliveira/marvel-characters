import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { PageContainer } from "../../components/PageContainer";
import { BackButton } from "../../components/BackButton";
import { CreatureBigCard } from "../../components/CreatureBigCard";

export function Creature() {
  const selectedState = useSelector(
    (state: RootState) => state.selectedCreature.selected
  );

  return (
    <PageContainer>
      <BackButton text="Voltar" to="/" />
      <CreatureBigCard data={selectedState} />
    </PageContainer>
  );
}
