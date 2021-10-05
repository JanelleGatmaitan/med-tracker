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
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

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
      console.log('formik values: ' + JSON.stringify(values, null, 2));
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
                {days.map((day) => <CheckBox key={day} day={day} onChange={formik.handleChange}/>)}
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

function CheckBox({day, onChange}) {
  return (
    <Checkbox
      id={day}
      value={day}
      name="frequency"
      onChange={onChange}
    >
      {day}
    </Checkbox>
  );
}

export default Dashboard;
