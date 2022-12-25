import React from 'react'
import { Flex, Box, chakra, Stack, Icon } from '@chakra-ui/react'
import { FaShare } from 'react-icons/fa'

function Features() {
  const Feature = (props) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Flex
            alignItems="center"
            justifyContent="center"
            h={12}
            w={12}
            rounded="md"
            _light={{
              bg: "brand.500",
            }}
            color="white"
          >
            <Icon
              boxSize={6}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {props.icon}
            </Icon>
          </Flex>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="medium"
            lineHeight="6"
            _light={{
              color: "gray.900",
            }}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd
            mt={2}
            color="gray.500"
            _dark={{
              color: "gray.400",
            }}
          >
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };

  return (
    <Flex
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        py={12}
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        rounded="xl"
      >
        <Box
          maxW="7xl"
          mx="auto"
          px={{
            base: 4,
            lg: 8,
          }}
        >
          <Box
            textAlign='center'
          >
            <chakra.h2
              _light={{
                color: "brand.600",
              }}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Features
            </chakra.h2>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{
                lg: "auto",
              }}
              color="gray.500"
              _dark={{
                color: "gray.400",
              }}
            >
              We provide the best services to our customers and we are always ready to help you.Below are some of the features we provide.
            </chakra.p>
          </Box>

          <Box mt={10}>
            <Stack
              spacing={{
                base: 10,
                md: 0,
              }}
              display={{
                md: "grid",
              }}
              gridTemplateColumns={{
                md: "repeat(2,1fr)",
              }}
              gridColumnGap={{
                md: 8,
              }}
              gridRowGap={{
                md: 10,
              }}
            >
              <Feature
                title="Competitive exchange rates"
                icon={ <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /> }
              >
                We use the mid-market rate as our reference rate, and we don't charge any hidden fees.
              </Feature>

              <Feature
                title=" No hidden fees"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                }
              >
                We dont charge any hidden fees for our services .We are upfront and clear about what we are responsible for, including the fees we charge.



              </Feature>

              <Feature
                title="Transfers are instant"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                }
              >
                Whichever payment method you choose, your money will be sent to the recipient instantly.
              </Feature>

              <Feature
                title="Mobile notifications"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                }
              >
               All our customers are notified via email and SMS when their transfers are completed.
              </Feature>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Features
