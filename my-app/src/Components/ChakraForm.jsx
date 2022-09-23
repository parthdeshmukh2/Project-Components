
import {
    Box,
    Select,
    Input,
    TagLabel,
    Radio,
    RadioGroup,
    Stack,
    Button,
  } from "@chakra-ui/react";
  import React from "react";
  import { useState } from "react";
  import axios from "axios";
  
  
  const ChakraForm = () => {
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [roomType, setRoomType] = useState("");
    const [bedType, setbedType] = useState("");
    const [guest, setGuest] = useState("");
    const [cost, setCost] = useState("");
    const [capacity, setCapacity] = useState("");

    const handleForm = () => {
        
    }
  
   
    return (
      <Box
        w={{ base: "90%", md: "70%", lg: "30%" }}
        m="auto"
        mt="50px"
        boxShadow="xl"
        display="flex"
        flexDirection="column"
        alignItems="center"
        borderRadius="10px"
        bg="gray.200"
      >
        <Select
          placeholder="Select category"
          w="80%"
          m="auto"
          mt="4"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Family">Family</option>
          <option value="Dulux">Dulux</option>
          <option value="Suite">Suite</option>
        </Select>
  
        <Input
          type="text"
          placeholder="Enter Image Url"
          w="80%"
          m="auto"
          color="black"
          mt="8"
          onChange={(e) => setImage(e.target.value)}
        />
  
        <RadioGroup w="80%" m="auto" mt="6 " onChange={setRoomType} value={roomType}>
          <Stack direction="row">
            <Radio bg="black" ml="4" value="AC">
              AC
            </Radio>
            <Radio bg="black" value="NON-AC">
              NON-AC
            </Radio>
          </Stack>
        </RadioGroup>
  
        <Select
          placeholder="Select Bed"
          w="80%"
          m="auto"
          mt="8"
          onChange={(e) => setbedType(e.target.value)}
        >
          <option value="Single">Single</option>
          <option value="Double">Double</option>
        </Select>
  
        <Input
          type="number"
          placeholder="Enter Number Of Guest"
          w="80%"
          m="auto"
          color="black"
          mt="8"
          onChange={(e) => setGuest(e.target.value)}
        />
  
        <Input
          type="text"
          placeholder="Enter Maximum Capacity"
          w="80%"
          m="auto"
          color="black"
          mt="8"
          onChange={(e) => setCapacity(e.target.value)}
        />
  
        <Input
          type="number"
          placeholder="Enter Cost"
          w="80%"
          m="auto"
          color="black"
          mt="8"
          onChange={(e) => setCost(e.target.value)}
        />
  
        <Button mb="8" mt="8" onClick={()=>handleForm()}>
          Submit
        </Button>
      </Box>
    );
  };
  
  export default ChakraForm;
  