import { Box } from '@chakra-ui/react'
import React from 'react'
import ItemCard from './ItemCard'


const arr = [
    
        {
          "id": 1,
          "category": "Family",
          "image_url": "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          "type_of_room": "AC",
          "bed_type": "Double",
          "no_of_persons": "2",
          "capacity": "2",
          "cost": 1000,
          "booked": false
        },
        {
          "id": 2,
          "category": "Dulux",
          "image_url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          "type_of_room": "AC",
          "bed_type": "Double",
          "no_of_persons": "2",
          "capacity": "2",
          "cost": 2000,
          "booked": false
        },
        {
          "id": 3,
          "category": "Suite",
          "image_url": "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          "type_of_room": "NON-AC",
          "bed_type": "Single",
          "no_of_persons": "2",
          "capacity": "2",
          "cost": 800,
          "booked": false
        }
      
]

const ChakraGrid = () => {
  return (
    <Box w='90%'   m='auto' display='grid'  gridTemplateColumns={{base:'repeat(1, 1fr)', md:'repeat(3, 1fr)', lg:'repeat(4, 1fr)'}} gap='4'>
      {arr.map((elem) => <ItemCard {...elem}/>)}
      
    </Box>
  )
}

export default ChakraGrid
