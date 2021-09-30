import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  CheckboxGroup,
  HStack,
  useDisclosure } from '@chakra-ui/react';
  import { useState } from 'react';
  import { useFormik } from 'formik';
  import MedicationForm from '../components/medication-form';

function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [action, setAction] = useState();
  const formik = useFormik({
    initialValues: {
      medication: '',
      dose: '',
      frequency: []
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      console.log('formik vbalues: ' + JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <h1>Dashboard</h1>
      <Button id="add" onClick={(e) => {
        const action = e.target.getAttribute("id");
        setAction(action);
        onOpen();
      }}>Add</Button>
      <Button id="edit" onClick={(e) => {
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
            <FormControl>
              <FormLabel>Medication</FormLabel>
              <Input
                id="medication"
                placeholder="medication name"
                onChange={formik.handleChange}
                value={action === 'add' ? formik.values.medication : 'edit'}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Dose</FormLabel>
              <Input
                id="dose"
                placeholder="dose"
                onChange={formik.handleChange}
                value={action === 'add' ? formik.values.dose : 'edit'}
              />
            </FormControl>
            <CheckboxGroup colorScheme="blue">
              <HStack mt={4}>
                <Checkbox
                  id="monday"
                  value="monday"
                  name="frequency"
                  onChange={formik.handleChange}
                >
                  Monday
                </Checkbox>
                <Checkbox
                  id="tuesday"
                  value="tuesday"
                  name="frequency"
                  onChange={formik.handleChange}
                >
                  Tuesday
                </Checkbox>
                <Checkbox
                  id="wednesday"
                  value="wednesday"
                  name="frequency"
                  onChange={formik.handleChange}
                >
                  Wednesday
                </Checkbox>
                <Checkbox
                  id="thursday"
                  value="thursday"
                  name="frequency"
                  onChange={formik.handleChange}
                >
                  Thursday
                </Checkbox>
              </HStack>
            </CheckboxGroup>
                <CheckboxGroup colorScheme="blue">
                  <HStack mt={4}>
                <Checkbox
                  id="friday"
                  value="friday"
                  name="frequency"
                  onChange={formik.handleChange}
                >
                  Friday
                </Checkbox>
                <Checkbox
                  id="saturday"
                  value="saturday"
                  name="frequency"
                  onChange={formik.handleChange}
                >
                  Saturday
                </Checkbox>
                <Checkbox
                  id="sunday"
                  value="sunday"
                  name="frequency"
                  onChange={formik.handleChange}
                >
                  Sunday
                </Checkbox>
                  </HStack>
                </CheckboxGroup>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" colorScheme="blue" mr={3} onClick={() => {
              formik.handleSubmit();
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
