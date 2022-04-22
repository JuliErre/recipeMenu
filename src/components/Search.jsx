import { Flex, Spinner } from '@chakra-ui/react'
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import api from '../Api'
import CardList from './CardList'

function Search() {
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
  return (
    <>
        { !loading ? 
        <CardList recipes={recipes} /> 
        : 
        <Spinner size='xl' color='green.400'/>    
      }
  </>
  )
}

export default Search