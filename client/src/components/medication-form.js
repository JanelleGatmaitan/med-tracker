import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    Checkbox,
    CheckboxGroup,
    HStack
} from "@chakra-ui/react"

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        dose: Yup.string().required('Required'),
        frequency: Yup.boolean().oneOf([true], 'Select at least one day')
    });

    // function validateName(value) {
    //     let error
    //     if (!value) {
    //         error = "Name is required"
    //     } else if (value.toLowerCase() !== "naruto") {
    //         error = "Jeez! You're not a fan 😱"
    //     }
    //     return error
    // }

    function getInitialValues(action) {
        if (action === 'add') {
            return {
                name: '',
                dose: '',
                frequency: {
                    monday: false,
                    tuesday: false,
                    wednesday: false,
                    thursday: false,
                    friday: false,
                    saturday: false,
                    sunday: false
                }
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
                    console.log(JSON.stringify(values, null, 2))
                    console.log('submit');
                    actions.setSubmitting(false)
                }, 1000)
            }}
        >
            {(props) => (
                <Form>
                    <Field name="name">
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name}>
                                <FormLabel htmlFor="name">First name</FormLabel>
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
                                <FormLabel>
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
        >
            {day}
        </Checkbox>
    );
}

export default MedicationForm;
