import { ReactNode } from "react";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
// import { useNavigate } from "react-router-dom";



export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const navigate = useNavigate();
  return (
    <>
      <Box
        bg={useColorModeValue("gray.400", "gray.900")}
        px={4}
        w="90%"
        m="auto"
        borderRadius="10px"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box
            fontSize="2xl"
            fontWeight="600"
            fontFamily="cursive"
            // onClick={() => navigate("/")}
          >
           LOGO
          </Box>

          <Box
            display="flex"
            w="50%"
            h="100%"
            alignItems="center"
            justifyContent="space-around"
          >
            <Text
              fontSize="xl"
              fontWeight="500"
              fontStyle="italic"
              cursor="pointer"
            //   onClick={() => navigate("/adminlogin")}
            >
              ADMIN
            </Text>

            <Text
              fontSize="xl"
              fontWeight="500"
              fontStyle="italic"
              cursor="pointer"
            //   onClick={() => navigate("/userregister")}
            >
              USER
            </Text>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
