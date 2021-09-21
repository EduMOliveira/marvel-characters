import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { editSelectedCreature } from "../../redux/actions/selectedCreatureActions";
import { RootState } from "../../redux/store";
import { PageContainer } from "../../components/PageContainer";
import { BackButton } from "../../components/BackButton";
import { Modal } from "../../components/Modal";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { CreatureBigCard } from "../../components/CreatureBigCard";

export function Creature() {
  const dispatch = useDispatch();
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
    dispatch(
      editSelectedCreature({
        ...selectedState,
        name: formName,
        description: formDesc,
      })
    );
    setShowModal(false);
  };

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormName(e.target.value);
  };

  const textAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormDesc(e.target.value);
  };

  if (selectedState.id === -1) {
    return <Redirect to={{ pathname: "/" }} />;
  } else {
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
}
