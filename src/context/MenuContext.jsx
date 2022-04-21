import { useToast } from '@chakra-ui/react';
import React, { createContext, useState } from 'react'


export const MenuContext = createContext([]);

function MenuContextProvider({ children }) {
  const [menu, setMenu] = useState([]);

  const toast = useToast();
  const status = ['default', 'success', 'warning', 'error'];




  function addToMenu(recipe) {
    if(menu.find(item => item.id === recipe.id)){
      toast({
        title: 'Recipe already in menu',
        description: 'You can only add one recipe per meal',
        status: 'warning',
        duration: 4000,
        isClosable: true,
      });
    } else {

    if (recipe.vegan === true && menu.filter(item => item.vegan === true).length < 2) {
      setMenu([...menu, recipe]);
      toast({

        title: ` ${recipe.title} added to menu`,
        status: 'success',
        duration: 4000,
        isClosable: true,

      })

    }
    else if (recipe.vegan === false && menu.filter(item => item.vegan === false).length < 2) {
      setMenu([...menu, recipe]);
      toast({

        title: ` ${recipe.title} added to menu`,
        status: 'success',
        duration: 4000,
        isClosable: true,

      })
    }

    else {
      if (recipe.vegan === true) {
        toast({

          title: ` 2 vegan recipes maxiumum`,
          status: 'error',
          duration: 4000,
          isClosable: true,

        })
      }
      else if (recipe.vegan === false) {
        toast({
          title: ` 2 non-vegan recipes maxiumum`,
          status: 'error',
          duration: 4000,
          isClosable: true,
        })
      }
    }
  }
}
  function removeRecipe(id) {
    setMenu(menu.filter(recipe => recipe.id !== id));
  }




  return (
    <MenuContext.Provider value={{
      addToMenu,
      menu,
      removeRecipe,


    }}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContextProvider