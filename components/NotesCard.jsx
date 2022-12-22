import React from "react";
import { Box, Flex, chakra, Image } from "@chakra-ui/react";

const NotesCard = ({ image, course, free, getnow, notesLink }) => {
  return (
    <Box width={{ base: "90%", md: "90%", sm: "90%" }} m="auto">
      <Flex
        _dark={{
          bg: "#3e3e3e",
        }}
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          w="100%"
          mx="auto"
        >
          {/* <Box
            bg="gray.300"
            rounded="lg"
            shadow="md"
            bgSize="contain"
            bgPos="center"
            // style={{
            //   backgroundImage: image,
            //   //   "url(https://media.istockphoto.com/id/1427819383/photo/stylized-3d-html-icon-side-view.jpg?b=1&s=170667a&w=0&k=20&c=vLhiYOOEz0ZHHzCYM_JNkC7c6XXl2HHjdv9T6Uk4das=)",
            // }}
          > */}
          <Image w="200px" h="200px" src={image} objectFit="contain" />
          {/* </Box> */}

          <Box
            w={{
              base: 56,
              md: 64,
            }}
            bg="#67dc79"
            _dark={{
              bg: "gray.800",
            }}
            mt={-10}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
          >
            <chakra.h3
              py={2}
              textAlign="center"
              fontWeight="bold"
              textTransform="uppercase"
              color="gray.800"
              _dark={{
                color: "white",
              }}
              letterSpacing={1}
            >
              {course}
            </chakra.h3>

            <Flex
              alignItems="center"
              justifyContent="space-between"
              py={2}
              px={3}
              bg="gray.200"
              _dark={{
                bg: "gray.700",
              }}
            >
              <chakra.span
                fontWeight="bold"
                color="gray.800"
                _dark={{
                  color: "gray.200",
                }}
              >
                {free}
              </chakra.span>
              <a href={notesLink} target="_blank" rel="noreferrer">
                <chakra.button
                  bg="gray.800"
                  fontSize="xs"
                  fontWeight="bold"
                  color="white"
                  px={2}
                  py={1}
                  rounded="lg"
                  textTransform="uppercase"
                  _hover={{
                    bg: "gray.700",
                    _dark: {
                      bg: "gray.600",
                    },
                  }}
                  _focus={{
                    bg: "gray.700",
                    _dark: {
                      bg: "gray.600",
                    },
                    outline: "none",
                  }}
                >
                  {getnow}
                </chakra.button>
              </a>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NotesCard;
