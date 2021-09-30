import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure } from '@chakra-ui/react';
  import { useState } from 'react';
  import MedicationForm from '../components/medication-form';

function Dashboard() {
  // const getForm = (action) => {
  //   if (action === 'add') {
  //     return (
  //       <FormControl>
  //         <FormLabel>First name</FormLabel>
  //         <Input placeholder="First name" />
  //       </FormControl>
  //     );
  //   } else {
  //     return (
  //       <FormControl>
  //         <FormLabel>Last name</FormLabel>
  //         <Input placeholder="last name" />
  //       </FormControl>
  //     );
  //   }
  // };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [action, setAction] = useState();

  return (
    <>
      <h1>Dashboard</h1>
      <Button id="add" onClick={(e) => {
        const action = e.target.getAttribute("id");
        setAction(action);
        onOpen();
      }}>Open Modal</Button>
      <Button id="edit" onClick={(e) => {
        const action = e.target.getAttribute("id");
        setAction(action);
        onOpen();
      }}>edit</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{`${action} Medicine`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MedicationForm action={action} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => {
              console.log('submit form');
              onClose();
            }}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Dashboard;
