import { Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { UserContext } from '../lib/UserContext';

function NavBar({signIn, signOut}) {
  const { user, handleSignIn, handleSignOut } = useContext(UserContext);
  return (
    <div>
      {
        user && <Button onClick={handleSignOut}>Sign Out</Button>
      }
    </div>
  );
}

export default NavBar;
