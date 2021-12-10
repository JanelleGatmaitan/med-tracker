import { Box } from "@chakra-ui/react"
import {
  AiFillCloseCircle,
  AiOutlineMenu
} from 'react-icons';

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <AiFillCloseCircle /> : <AiOutlineMenu />}
    </Box>
  )
}

export default MenuToggle;
