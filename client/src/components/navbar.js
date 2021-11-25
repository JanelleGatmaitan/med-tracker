import { Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { UserContext } from '../lib/UserContext';

function NavBar({signIn, signOut}) {
  const { user, handleSignIn, handleSignOut } = useContext(UserContext);
  return (
    <nav>
      <ul>
        <li>
          Home
        </li>
      </ul>
      {
        user && <Button onClick={handleSignOut}>Sign Out</Button>
      }
    </nav>
  );
}

export default NavBar;
