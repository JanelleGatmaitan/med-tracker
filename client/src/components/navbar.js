import { Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { UserContext } from '../lib/UserContext';

function NavBar({signIn, signOut}) {
  const { user } = useContext(UserContext);
  console.log('user: ', user);
  return (
    <div>
      {
        user && <Button>Sign Out</Button>
      }
      {/* <Button onClick={() => user ? signOut() : signIn()}>sign in</Button> */}
    </div>
  );
}

export default NavBar;
