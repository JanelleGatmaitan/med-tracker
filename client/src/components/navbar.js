import { Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { UserContext } from '../lib/UserContext';
import {
  HStack,
  Link
} from '@chakra-ui/react';
import Logo from './logo';
function NavBar({signIn, signOut}) {
  const { user, handleSignIn, handleSignOut } = useContext(UserContext);
  return (
    <HStack bgColor="blue.100">
      <Logo/>
      <Link>Home</Link>
      {
        user && <Button onClick={handleSignOut}>Sign Out</Button>
      }
    </HStack>
  );
}

export default NavBar;
