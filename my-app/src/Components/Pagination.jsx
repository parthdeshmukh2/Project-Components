import { Box, Button } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Pagination = () => {
    const [data, setData] = useState([]);
    const[limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const getData = async() => {
        try {
            let res = await fetch (`http://localhost:8080/shoes?_page=${page}&_limit=5`);
            let data1 = await res.json();
            setData(data1)
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
      getData();

    },[page])

console.log(page);

  return (
    <Box>
        <Box w='90%' m='auto' display='flex' gap='4' justifyContent='center'>

 
        <Button disabled={page===1} onClick ={()=> setPage(page-1)}>Previous</Button>
        <Button onClick ={()=> setPage(1)}>1</Button>
        <Button onClick ={()=> setPage(2)}>2</Button>
        <Button onClick ={()=> setPage(3)}>3</Button>
        <Button onClick ={()=> setPage(4)}>4</Button>
        <Button onClick ={()=> setPage(5)}>5</Button>
        <Button onClick ={()=> setPage(6)}>6</Button>
        <Button onClick ={()=> setPage(7)}>7</Button>
        <Button onClick ={()=> setPage(page+1)}>Next</Button>
        </Box>

        {data.map((elem, index)=>{
            return (
                <h1 key={index}>{elem.title}</h1>
            )

        })}

        </Box>
      
  
  )
}

export default Pagination
