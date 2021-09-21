import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { PageContainer } from "../../components/PageContainer";
import { BackButton } from "../../components/BackButton";
import { Modal } from "../../components/Modal";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { CreatureBigCard } from "../../components/CreatureBigCard";

export function Creature() {
  const selectedState = useSelector(
    (state: RootState) => state.selectedCreature.selected
  );

  const [showModal, setShowModal] = useState(false);
  const [formName, setFormName] = useState(selectedState.name);
  const [formDesc, setFormDesc] = useState(selectedState.description);

  const editHandler = () => {
    setShowModal(true);
  };

  const modalCloseHandler = () => {
    setShowModal(false);
  };

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormName(e.target.value);
  };

  const textAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormDesc(e.target.value);
  };

  return (
    <PageContainer>
      <BackButton text="Voltar" to="/" />
      <CreatureBigCard data={selectedState} onEdit={editHandler} />

      <Modal title="Editar" show={showModal} onClose={modalCloseHandler}>
        <div>Nome</div>
        <Input value={formName} onChange={inputHandler} />
        <div>Descrição</div>
        <TextArea
          defaultValue={formDesc || `"Sem Descrição"`}
          onChange={textAreaHandler}
        />
      </Modal>
    </PageContainer>
  );
}
