import { VStack, Text } from '@chakra-ui/react'
import React from 'react'

function NotFoundPage() {
  return (
  <>
    <Text fontSize='5xl' fontWeight='bold' textAlign='center'> Error 404</Text>
    <Text fontSize='2xl' textAlign='center'> Page not found</Text>
  </>
  )
}

export default NotFoundPage