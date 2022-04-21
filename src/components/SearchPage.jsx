import { Flex, Spinner } from '@chakra-ui/react'
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import api from '../Api'
import RecipeCard from './RecipeCard'

function SearchPage() {
    const [recipes, setRecipes] = useState([])
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true)
    let input = searchParams.get('q')

    useEffect(() =>{
        axios.get(`${api.baseURL}${api.search}?${api.key}&number=10&query=${input}`) 
        .then(res=>{setRecipes(res.data.results)})
        .finally(()=>setLoading(false))
        .catch(err=>console.log(err))

    },[input]) 
    console.log(recipes)
  return (
    <Flex  backgroundColor='gray.200' py='25px' width='100%' minHeight='85vh'  flexDirection='row' wrap='wrap' justify='center' align='flex-start' spacing='0px' gap='15px'>
        { !loading ? 
        recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />  ) 
        : 
        <Spinner size='xl' color='green.400'/>
        
      }
        
    </Flex>
  )
}

export default SearchPage