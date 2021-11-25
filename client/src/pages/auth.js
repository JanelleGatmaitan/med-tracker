import AuthForm from "../components/auth-form";

function Auth(props) {
  return <AuthForm action={props.location.pathname}/>
}

export default Auth;
