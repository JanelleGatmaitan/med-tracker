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

function Dashboard(props) {
  const { isOpen, onOpen, onClose } = useDisclosure({
    onOpen: () => console.log('tesefsdfsdt')
  });
  // const test = () => {
  //   onOpen();
  //   console.log('test');
  // };
  return (
    <>
      <h1>Dashboard</h1>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            asdasdasd
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Dashboard;
