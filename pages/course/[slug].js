import React from "react";
import { useRouter } from "next/router";
import { Box, Flex, chakra, Link, Text, Badge } from "@chakra-ui/react";
import { BsCalendar2Week } from "react-icons/bs";

const SingleCourse = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <Flex
        bg="skyblue"
        _dark={{
          bg: "#3e3e3e",
        }}
        p="30px"
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          mx={{
            lg: 10,
          }}
          display={{
            lg: "flex",
          }}
          maxW={{
            lg: "5xl",
          }}
          shadow={{
            lg: "lg",
          }}
          rounded={{
            lg: "lg",
          }}
        >
          <Box
            w={{
              lg: "45%",
            }}
          >
            <Box
              h={{
                base: 64,
                lg: "full",
              }}
              rounded={{
                lg: "lg",
              }}
              bgSize="cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
              }}
            ></Box>
          </Box>

          <Box
            py={12}
            px={6}
            maxW={{
              base: "xl",
              lg: "5xl",
            }}
            w={{
              lg: "50%",
            }}
          >
            <chakra.h2
              fontSize={{
                base: "2xl",
                md: "3xl",
              }}
              color="gray.800"
              _dark={{
                color: "white",
              }}
              fontWeight="bold"
            >
              Build Your New{" "}
              <chakra.span
                color="brand.600"
                _dark={{
                  color: "brand.400",
                }}
              >
                Idea
              </chakra.span>
            </chakra.h2>
            <chakra.p
              mt={4}
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              modi reprehenderit vitae exercitationem aliquid dolores ullam
              temporibus enim expedita aperiam mollitia iure consectetur dicta
              tenetur, porro consequuntur saepe accusantium consequatur.
            </chakra.p>
            <chakra.h4
              fontSize={{
                base: "2xl",
                md: "15px",
              }}
              color="gray.800"
              _dark={{
                color: "white",
              }}
              fontWeight="bold"
              display="flex"
              mt="10px"
              gap="10px"
            >
              <BsCalendar2Week size="20px" />
              Stated on 15 DEC
            </chakra.h4>

            <Box mt={8}>
              <Link
                bg="gray.900"
                color="gray.100"
                px={5}
                py={3}
                fontWeight="semibold"
                rounded="lg"
                _hover={{
                  bg: "gray.800",
                }}
              >
                Get Subscription
              </Link>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Box width="70%" m="auto">
        <Box
          bg="white"
          p="1"
          borderRadius="2xl"
          boxShadow="md"
          cursor={"pointer"}
          _hover={{ bg: "skyblue.50" }}
          mt="4"
        >
          <Flex gap="4" alignItems="center">
            <Box
              px="6"
              py="2"
              bg="green.500"
              borderRadius="md"
              color="white"
              textAlign="center"
            >
              <Text fontSize="sm" fontWeight="bold">
                Topic 1
              </Text>
            </Box>
            <Box>
              <Box fontSize="sm" fontWeight="bold">
                Learn React JS - Full Course for Beginners
              </Box>
              <Badge colorScheme="green">Duration: 32 mins</Badge>
            </Box>
          </Flex>
        </Box>
        <Box
          bg="white"
          p="1"
          borderRadius="2xl"
          boxShadow="md"
          cursor={"pointer"}
          _hover={{ bg: "skyblue.50" }}
          mt="4"
        >
          <Flex gap="4" alignItems="center">
            <Box
              px="6"
              py="2"
              bg="green.500"
              borderRadius="md"
              color="white"
              textAlign="center"
            >
              <Text fontSize="sm" fontWeight="bold">
                Topic 2
              </Text>
            </Box>
            <Box>
              <Box fontSize="sm" fontWeight="bold">
                Learn React JS - Full Course for Beginners
              </Box>
              <Badge colorScheme="green">Duration: 32 mins</Badge>
            </Box>
          </Flex>
        </Box>
        <Box
          bg="white"
          p="1"
          borderRadius="2xl"
          boxShadow="md"
          cursor={"pointer"}
          _hover={{ bg: "skyblue.50" }}
          mt="4"
        >
          <Flex gap="4" alignItems="center">
            <Box
              px="6"
              py="2"
              bg="green.500"
              borderRadius="md"
              color="white"
              textAlign="center"
            >
              <Text fontSize="sm" fontWeight="bold">
                Topic 3
              </Text>
            </Box>
            <Box>
              <Box fontSize="sm" fontWeight="bold">
                Learn React JS - Full Course for Beginners
              </Box>
              <Badge colorScheme="green">Duration: 32 mins</Badge>
            </Box>
          </Flex>
        </Box>
        <Box
          bg="white"
          p="1"
          borderRadius="2xl"
          boxShadow="md"
          cursor={"pointer"}
          _hover={{ bg: "skyblue.50" }}
          mt="4"
        >
          <Flex gap="4" alignItems="center">
            <Box
              px="6"
              py="2"
              bg="green.500"
              borderRadius="md"
              color="white"
              textAlign="center"
            >
              <Text fontSize="sm" fontWeight="bold">
                Topic 4
              </Text>
            </Box>
            <Box>
              <Box fontSize="sm" fontWeight="bold">
                Learn React JS - Full Course for Beginners
              </Box>
              <Badge colorScheme="green">Duration: 32 mins</Badge>
            </Box>
          </Flex>
        </Box>
        <Box
          bg="white"
          p="1"
          borderRadius="2xl"
          boxShadow="md"
          cursor={"pointer"}
          _hover={{ bg: "skyblue.50" }}
          mt="4"
        >
          <Flex gap="4" alignItems="center">
            <Box
              px="6"
              py="2"
              bg="green.500"
              borderRadius="md"
              color="white"
              textAlign="center"
            >
              <Text fontSize="sm" fontWeight="bold">
                Topic 5
              </Text>
            </Box>
            <Box>
              <Box fontSize="sm" fontWeight="bold">
                Learn React JS - Full Course for Beginners
              </Box>
              <Badge colorScheme="green">Duration: 32 mins</Badge>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default SingleCourse;
