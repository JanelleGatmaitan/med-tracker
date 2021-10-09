import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    Checkbox,
    CheckboxGroup
} from "@chakra-ui/react"

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        dose: Yup.string().required('Required'),
        frequency: Yup.array().min(1).required('Select at least one day').nullable()
    });

    function getInitialValues(action) {
        if (action === 'add') {
            return {
                name: '',
                dose: '',
                frequency: []
            }
        }
        return {
            name: ''
        }
    }


function MedicationForm({ closeModal, action }) {
    return (
        <Formik
            initialValues={getInitialValues(action)}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    closeModal();
                    actions.setSubmitting(false)
                    fetch('http://localhost:5000/api/addMedication', {
                        method: 'POST',
                        body: JSON.stringify(values),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Success:', data);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
                }, 1000)
            }}
        >
            {(props) => (
                <Form>
                    <Field name="name">
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name}>
                                <FormLabel htmlFor="name">Medication name</FormLabel>
                                <Input {...field} id="name" placeholder="name" />
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name="dose">
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.dose && form.touched.dose}>
                                <FormLabel htmlFor="dose" mt={4}>Dose</FormLabel>
                                <Input {...field} id="dose" placeholder="dose"/>
                                <FormErrorMessage>{form.errors.dose}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name="frequency">
                        {({ field, form }) => (
                            <FormControl mt={4}  isInvalid={form.errors.frequency && form.touched.frequency}>
                                <FormLabel htmlFor="frequency">
                                    <CheckboxGroup>
                                        {days.map((day) => <CheckBox {...field} key={day} id={day} day={day} />)}
                                    </CheckboxGroup>
                                </FormLabel>
                                <FormErrorMessage>{form.errors.frequency}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Button
                        mt={4}
                        colorScheme="blue"
                        isLoading={props.isSubmitting}
                        type="submit"
                    >
                        Save
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

function CheckBox({ day, onChange }) {
    return (
        <Checkbox
            id={day}
            value={day}
            name="frequency"
            onChange={onChange}
            m="8px"
        >
            {day}
        </Checkbox>
    );
}

export default MedicationForm;
