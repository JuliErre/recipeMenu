import { Button, Icon } from '@chakra-ui/react'
import React,{useContext} from 'react'
import { FaTrash } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { MenuContext } from '../context/MenuContext'

function DeleteButton({recipe}) {
    const location = useLocation()
    const {removeRecipe} = useContext(MenuContext)
    
    return (
        <>
            {location.pathname === '/' &&
                <Button size='md' onClick={() => removeRecipe(recipe)} variant='outline' colorScheme='black' leftIcon={<Icon as={FaTrash} /> } > Delete</Button>
            }
        </>
    )
}

export default DeleteButton