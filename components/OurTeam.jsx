import React from "react";
import { Box, Flex, Image, Text, HStack } from "@chakra-ui/react";
// import { FaSuitcase, FaMapPin, FaEnvelope } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const OurTeam = ({ image, name, role, location, email, linkedIn }) => {
  return (
    <Flex
      _dark={{
        bg: "#3e3e3e",
      }}
      p={5}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        shadow="lg"
        rounded="lg"
        bg="#edf3f8"
        _dark={{
          bg: "gray.800",
        }}
        mb={8}
        direction="column"
        alignItems="center"
        justifyContent="center"
        w="300px"
      >
        <Box
          bg="#dab9e9"
          _dark={{
            bg: "#3e3e3e",
          }}
          //   style={{
          //     backgroundImage:
          //       "url(https://images.unsplash.com/photo-1666795599746-0f62dfa29a07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",

          //     backgroundSize: "cover",
          //     backgroundPosition: "center",
          //     backgroundRepeat: "no-repeat",
          //   }}
          height="100%"
          width="100%"
          borderRadius="lg"
          p={8}
          display="flex"
          alignItems="left"
        >
          <Image
            src={image}
            alt="Profile Picture"
            borderRadius="full"
            boxSize="150px"
            shadow="lg"
            border="2.5px solid"
            objectFit="contain"
            mb={-20}
            borderColor="gray.800"
            _dark={{
              borderColor: "gray.200",
            }}
          />
        </Box>
        <Box
          gridColumn="span 8"
          p={8}
          width="full"
          height="full"
          borderRadius="lg"
          textAlign="left"
          mt={10}
        >
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color="gray.800"
            _dark={{
              color: "white",
            }}
          >
            {name}
          </Text>
          <HStack
            spacing={3}
            color="gray.800"
            _dark={{
              color: "gray.200",
            }}
          >
            {/* <FaSuitcase size={24} /> */}
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="gray.800"
              _dark={{
                color: "gray.200",
              }}
            >
              {role}
            </Text>
          </HStack>
          <HStack
            spacing={3}
            color="gray.700"
            _dark={{
              color: "gray.200",
            }}
          >
            {/* <FaMapPin size={20} /> */}
            <Text fontSize="lg">{location}</Text>
          </HStack>
          <HStack
            spacing={3}
            color="gray.700"
            _dark={{
              color: "gray.200",
            }}
          >
            {/* <FaEnvelope size={20} /> */}
            <Text fontSize="lg">{email}</Text>
          </HStack>
          <Box fontSize="2xl" mt="15px" color="#0a7caa">
            <Link href={linkedIn} target="_blank" rel="noreferrer">
              <BsLinkedin />
            </Link>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default OurTeam;
