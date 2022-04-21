import { Button, Icon } from '@chakra-ui/react';
import React,{useContext} from 'react'
import { MenuContext } from '../context/MenuContext';
import {FaPlus} from 'react-icons/fa'


function AddButton({recipe}) {
    const {addToMenu} = useContext(MenuContext)
  return (
    <Button size='lg' variant='outline' colorScheme='black' onClick={() => addToMenu(recipe)} leftIcon={<Icon as={FaPlus} />} > Add to Menu</Button>
  )
}

export default AddButton