import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  HStack
} from "@chakra-ui/react"
import { useContext } from 'react';
import { UserContext } from '../lib/UserContext';

const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

function AuthForm({ action, signIn }) {
  const {handleSignIn} = useContext(UserContext);
  return (
    <HStack>
      <Formik
        initialValues={{username: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            actions.setSubmitting(false);
            fetch(`http://localhost:5000/api/auth${action}`, {
              method: 'POST',
              body: JSON.stringify(values),
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then(res => res.json())
              .then(data => {
                handleSignIn(data);
                window.location.pathname = 'dashboard';
              })
              .catch((error) => {
                console.error('Error:', error);
              });
          }, 1000)
        }}
      >
        {(props) => (
          <Form>
            <Field name="username">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.username && form.touched.username}>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input {...field} id="username" />
                  <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.password && form.touched.password}>
                  <FormLabel htmlFor="dose" mt={4}>Password</FormLabel>
                  <Input {...field} id="password" type="password"/>
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="blue"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </HStack>
  );
}

export default AuthForm;
