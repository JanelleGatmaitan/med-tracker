import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure } from '@chakra-ui/react';
  import { useState } from 'react';
  import MedicationForm from '../components/medication-form';

function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [action, setAction] = useState();

  return (
    <>
      <h1>Dashboard</h1>
      <Button id="Add" onClick={(e) => {
        const action = e.target.getAttribute("id");
        setAction(action);
        onOpen();
      }}>Add</Button>
      <Button id="Edit" onClick={(e) => {
        const action = e.target.getAttribute("id");
        setAction(action);
        onOpen();
      }}>Edit</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{`${action} Medicine`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MedicationForm closeModal={onClose} action={action}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Dashboard;
