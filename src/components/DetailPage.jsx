import { VStack } from '@chakra-ui/react';
import React from 'react'
import { useParams } from 'react-router-dom'
import DetailContainer from './DetailContainer';


function DetailPage() {
    const { id } = useParams();
  return (
    <VStack  backgroundColor='gray.200' py='25px' width='100%' minHeight='85vh'>
        <DetailContainer id={id}/>
    </VStack>
  )
}

export default DetailPage