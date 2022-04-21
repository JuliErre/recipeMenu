import { Heading, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import SearchBar from './SearchBar'



function Navbar() {
 const location = useLocation();
 
  return (
    <>
    {location.pathname === '/login' ?
    <> </>
    :
    <HStack justify='center' align='center' padding='15px' gap='30px' width='100%' background='white'>
       <Text fontSize='xl' fontWeight='semibold' textColor='black'> <Link to='/'>  Menu </Link></Text>
       <SearchBar/>
    </HStack>
    }
    </>
  )
}

export default Navbar 