import { Box, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import Menu from './Menu'
import Navbar from './Navbar'


function HomeScreen() {
  return (
    <VStack  backgroundColor='gray.200' py='25px' width='100%' height='85vh' justify='flex-start' align='center' gap='20px' >
      <Heading as='h2' size='2xl' fontWeight='semibold'> Menu </Heading>
      <Menu/>  
    </VStack>
    
  )
}

export default HomeScreen