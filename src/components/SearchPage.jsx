import { Flex } from '@chakra-ui/react'
import React from 'react'
import Search from './Search'

function SearchPage() {
  return (
    <Flex backgroundColor='gray.200' py='25px' width='100%' minHeight='85vh' flexDirection='row' wrap='wrap' justify='center' align='flex-start' spacing='0px' gap='15px'>
      <Search />
    </Flex>
  )
}

export default SearchPage