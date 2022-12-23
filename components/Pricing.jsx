import React from "react";
import {
  useColorModeValue,
  Flex,
  Box,
  Text,
  chakra,
  Stack,
  SimpleGrid,
  Feature,
  Button,
  Icon,
  VStack,
  HStack,
} from "@chakra-ui/react";

import { IoCheckmark } from "react-icons/io5";
import PaymentCard from "./PaymentCard";

const Pricing = () => {
  const topBg = useColorModeValue("gray.100", "gray.700");
  const bottomBg = useColorModeValue("white", "gray.800");
  const Feature = (props) => {
    return (
      <Flex alignSelf="start" w="full">
        <Icon
          boxSize={5}
          mt={1}
          mr={2}
          _light={{
            color: "green.500",
          }}
          viewBox="0 0 20 20"
          fill="currentColor"
          as={IoCheckmark}
        />
        <chakra.p
          fontSize="lg"
          color="gray.600"
          _dark={{
            color: "gray.400",
          }}
          {...props}
        />
      </Flex>
    );
  };

  return (
    <Box bg="#edf3f8">
      <Box
        _dark={{
          bg: "#3e3e3e",
        }}
        p={10}
        py="24"
        mx={{ base: "4", md: "10", lg: "20", xl: "32" }}
        justifyContent="center"
        alignItems="center"
      >
        <Text
          mb={2}
          fontSize="4xl"
          fontWeight="seminormal"
          lineHeight="tight"
          bgGradient="linear(to-r, green.300, blue.600)"
          bgClip="text"
          textAlign="center"
        >
          Simple transparent pricing
        </Text>
        <chakra.p
          mb={6}
          fontSize={["lg", , "xl"]}
          color="gray.600"
          _dark={{
            color: "gray.400",
          }}
          textAlign="center"
        >
          If you're not satisfied, contact us and we'll refund you within the
          first 20 days.
        </chakra.p>
        <Box w="full" pt={8}>
          <Flex
            direction={{
              base: "column",
              md: "row",
            }}
            justifyContent="center"
            mb={{
              base: 6,
              sm: 0,
            }}
          >
            <Flex
              flex={{
                sm: 1,
                lg: "initial",
              }}
              w={{
                lg: 2.3 / 7,
              }}
              rounded="lg"
              borderTopRightRadius={0}
              borderBottomLeftRadius="lg"
              bg="white"
              _dark={{
                bg: "gray.700",
              }}
              my={6}
              direction="column"
            >
              <VStack
                spacing={1}
                justifyContent="center"
                p={8}
                textAlign="center"
                w="full"
                shadow="xl"
              >
                <chakra.span fontSize="3xl" fontWeight="normal">
                  Silver
                </chakra.span>
                <HStack spacing={3}>
                  <chakra.span
                    fontWeight="normal"
                    fontSize="6xl"
                    textShadow="2px 0 currentcolor"
                  >
                    ₹79
                  </chakra.span>
                  <chakra.span
                    alignSelf="center"
                    fontSize="3xl"
                    _light={{
                      color: "gray.400",
                    }}
                  >
                    /3 months
                  </chakra.span>
                </HStack>
              </VStack>
              <VStack
                fontSize="sm"
                spacing={8}
                h="full"
                bg="gray.100"
                _dark={{
                  bg: "gray.800",
                }}
                borderBottomLeftRadius="lg"
                p={12}
              >
                <VStack
                  spacing={4}
                  w="full"
                  direction="column"
                  alignItems="start"
                >
                  <Feature>Suppression Management</Feature>
                  <Feature>Email Tracking and Analytics </Feature>
                  <Feature>99.99% Guaranteed Uptime SLA</Feature>
                </VStack>
                <Box
                  w="full"
                  ml={3}
                  display="inline-flex"
                  rounded="md"
                  shadow="md"
                >
                  {/* <Button
                    w="full"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    px={5}
                    py={3}
                    border="solid transparent"
                    fontWeight="normal"
                    rounded="md"
                    color="brand.600"
                    _dark={{
                      color: "gray.100",
                    }}
                    bg="white"
                    _hover={{
                      bg: "brand.50",
                      _dark: {
                        bg: "gray.700",
                      },
                    }}
                    cursor="pointer"
                  > */}
                  <PaymentCard month='3' />
                  {/* </Button> */}
                </Box>
              </VStack>
            </Flex>

            <Flex
              flex={{
                base: 1,
                lg: "initial",
              }}
              w={{
                lg: 2.4 / 7,
              }}
              rounded="lg"
              bg="white"
              _dark={{
                bg: "gray.700",
              }}
              mt={{
                base: 4,
                sm: -4,
              }}
              shadow="xl"
              zIndex={30}
              direction="column"
            >
              <VStack
                spacing={1}
                justifyContent="center"
                p={8}
                textAlign="center"
                w="full"
                shadow="xl"
              >
                <chakra.span fontSize="3xl" fontWeight="normal">
                  Gold
                </chakra.span>
                <HStack spacing={3}>
                  <chakra.span
                    fontWeight="normal"
                    fontSize="6xl"
                    textShadow="2px 0 currentcolor"
                  >
                    ₹149
                  </chakra.span>
                  <chakra.span
                    alignSelf="center"
                    fontSize="3xl"
                    _light={{
                      color: "gray.400",
                    }}
                  >
                    /6 Months
                  </chakra.span>
                </HStack>
              </VStack>
              <VStack
                fontSize="sm"
                h="full"
                roundedBottom="lg"
                spacing={8}
                bg="gray.100"
                _dark={{
                  bg: "gray.800",
                }}
                p={12}
              >
                <VStack
                  spacing={4}
                  w="full"
                  direction="column"
                  alignItems="start"
                >
                  <Feature>Suppression Management</Feature>
                  <Feature>Email Tracking and Analytics </Feature>
                  <Feature>99.99% Guaranteed Uptime SLA</Feature>
                  <Feature>1,000 Email Address Validations</Feature>
                  <Feature>Limited 24/7 Ticket Support</Feature>
                </VStack>
                <Box display="inline-flex" rounded="md" shadow="md" w="full">
                  {/* <chakra.a
                    w="full"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    px={5}
                    py={3}
                    border="solid transparent"
                    fontWeight="normal"
                    rounded="md"
                    bg="white"
                    _hover={{
                      bg: "brand.50",
                      _dark: {
                        bg: "gray.700",
                      },
                    }}
                    cursor="pointer"
                  > */}
                  <PaymentCard month='6' />
                  {/* </chakra.a> */}
                </Box>
              </VStack>
            </Flex>

            <Flex
              flex={{
                sm: 1,
                lg: "initial",
              }}
              w={{
                lg: 2.3 / 7,
              }}
              roundedTop="lg"
              borderBottomRightRadius="lg"
              borderTopLeftRadius={0}
              bg="white"
              _dark={{
                bg: "gray.700",
              }}
              my={6}
              direction="column"
            >
              <VStack
                spacing={1}
                justifyContent="center"
                p={8}
                textAlign="center"
                w="full"
                shadow="xl"
              >
                <chakra.span fontSize="3xl" fontWeight="normal">
                  Premium
                </chakra.span>
                <HStack spacing={3}>
                  <chakra.span
                    fontWeight="normal"
                    fontSize="6xl"
                    textShadow="2px 0 currentcolor"
                  >
                    ₹349
                  </chakra.span>
                  <chakra.span
                    alignSelf="center"
                    fontSize="3xl"
                    _light={{
                      color: "gray.400",
                    }}
                  >
                    /Year
                  </chakra.span>
                </HStack>
              </VStack>
              <VStack
                fontSize="sm"
                spacing={8}
                h="full"
                bg="gray.100"
                _dark={{
                  bg: "gray.800",
                }}
                borderBottomRightRadius="lg"
                p={12}
              >
                <VStack
                  spacing={4}
                  w="full"
                  direction="column"
                  alignItems="start"
                >
                  <Feature>Suppression Management</Feature>
                  <Feature>Email Tracking and Analytics </Feature>
                  <Feature>99.99% Guaranteed Uptime SLA</Feature>
                </VStack>
                <Box
                  w="full"
                  ml={3}
                  display="inline-flex"
                  rounded="md"
                  shadow="md"
                >
                  {/* <chakra.a
                    w="full"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    px={5}
                    py={3}
                    border="solid transparent"
                    fontWeight="normal"
                    rounded="md"
                    color="brand.600"
                    _dark={{
                      color: "gray.100",
                    }}
                    bg="white"
                    _hover={{
                      bg: "brand.50",
                      _dark: {
                        bg: "gray.700",
                      },
                    }}
                    cursor="pointer"
                  > */}
                  <PaymentCard month='12' />
                  {/* </chakra.a> */}
                </Box>
              </VStack>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Pricing;
