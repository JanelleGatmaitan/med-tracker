import {
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react';

function MedicationForm(props) {
  return (
    <>
      <FormControl>
        <FormLabel>Medication</FormLabel>
        <Input placeholder="medication name" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Dose</FormLabel>
        <Input placeholder="dose" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Frequency</FormLabel>
        <Input placeholder="frequency" />
      </FormControl>
    </>
  );
}

export default MedicationForm;
