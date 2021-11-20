import { Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { UserContext } from '../lib/UserContext';

function NavBar({signIn}) {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>{user}</h1>
      <Button onClick={() => signIn()}>sign in</Button>
    </div>
  );
}

export default NavBar;
