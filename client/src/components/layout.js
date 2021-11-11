import { Box, Container } from '@chakra-ui/react'
// import { Navbar } from './navbar'

export function Layout({ children }) {
  return (
    <Box mb={16}>
      <Container maxW='container.lg'>{children}</Container>
    </Box>
  )
}
