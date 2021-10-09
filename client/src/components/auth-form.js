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

const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

function AuthForm(props) {
  return (
    <Formik>

    </Formik>
  );
}

export default AuthForm;
