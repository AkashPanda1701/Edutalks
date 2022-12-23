import React from "react";
import {
  useColorModeValue,
  Box,
  chakra,
  Icon,
  Image,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

const header = () => {
  const bg = useColorModeValue("white", "gray.800");
  return (
    <Box pos="relative" overflow="hidden" bg={bg} mb={60}>
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{
            base: 8,
            sm: 16,
            md: 20,
            lg: 28,
            xl: 32,
          }}
          maxW={{
            lg: "2xl",
          }}
          w={{
            lg: "full",
          }}
          zIndex={1}
          bg={bg}
          border="solid 1px transparent"
        >
          <Icon
            display={{
              base: "none",
              lg: "block",
            }}
            position="absolute"
            right={0}
            top={0}
            bottom={0}
            h="full"
            w={48}
            color={bg}
            transform="translateX(50%)"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </Icon>
          <Box
            mx="auto"
            maxW={{
              base: "7xl",
            }}
            px={{
              base: 4,
              sm: 6,
              lg: 8,
            }}
            mt={{
              base: 10,
              sm: 12,
              md: 16,
              lg: 20,
              xl: 28,
            }}
          >
            <Box
              w="full"
              textAlign={{
                sm: "center",
                lg: "left",
              }}
              justifyContent="center"
              alignItems="center"
            >
              <chakra.h1
                fontSize={{
                  base: "4xl",
                  sm: "5xl",
                  md: "55px",
                }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="semibold"
                color="gray.900"
                _dark={{
                  color: "white",
                }}
              >
                <chakra.span
                  display={{
                    base: "block",
                    xl: "inline",
                  }}
                >
                Today’s action shows {" "}
                </chakra.span>
                <chakra.span
                  display={{
                    base: "block",
                    xl: "inline",
                  }}
                  color="brand.600"
                  _dark={{
                    color: "brand.400",
                  }}
                >
                  tomorrow’s result
                </chakra.span>
              </chakra.h1>
              <chakra.p
                mt={{
                  base: 3,
                  sm: 5,
                  md: 5,
                }}
                fontSize={{
                  sm: "lg",
                  md: "xl",
                }}
                maxW={{
                  sm: "xl",
                }}
                mx={{
                  sm: "auto",
                  lg: 0,
                }}
                color="gray.500"
              >
                Start your journey with us today. We are here to help you achieve your goals and dreams.Progess is a journey, not a destination.

              </chakra.p>
              <Box
                mt={{
                  base: 5,
                  sm: 8,
                }}
                display={{
                  sm: "flex",
                }}
                justifyContent={{
                  sm: "center",
                  lg: "start",
                }}
                fontWeight="extrabold"
                fontFamily="fantasy"
              >
                <Box>
                  <Link href="/courses">
                  <Button
                    colorScheme="green"
                    size="lg"
                    px={10}
                    py={4}
                    fontSize="md"
                  >
                    Get started
                  </Button>
                  </Link>
                </Box>
               <Link href="/course/introduction-to-data-science">
               <Box mt={[3, 0]} ml={[null, 3]}>
                  <chakra.a
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    px={{
                      base: 8,
                      md: 10,
                    }}
                    py={{
                      base: 2,
                      md: 2,
                    }}
                    border="solid 1px transparent"
                    fontSize={{
                      base: "md",
                      md: "lg",
                    }}
                    rounded="md"
                    color="brand.700"
                    bg="brand.100"
                    _hover={{
                      bg: "brand.200",
                    }}
                    cursor="pointer"
                  >
                    Live demo
                  </chakra.a>
                </Box>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        position={{
          lg: "absolute",
        }}
        top={{
          lg: 0,
        }}
        bottom={{
          lg: 0,
        }}
        right={{
          lg: 0,
        }}
        w={{
          lg: "50%",
        }}
        border="solid 1px transparent"
      >
        <Image
          h={[56, 72, 96, "full"]}
          w="full"
          fit="cover"
          src={
            "https://cdn.dribbble.com/users/1620156/screenshots/5547104/education.gif"
          }
          alt=""
          loading="lazy"
        />
      </Box>
    </Box>
  );
};

export default header;
