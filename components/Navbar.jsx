import React from "react";
import {
  CloseButton,
  Flex,
  Box,
  Button,
  HStack,
  VStack,
  useDisclosure,
  useColorModeValue,
  chakra,
  VisuallyHidden,
  IconButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  return (
    <>
      <React.Fragment>
        <Box
          bg={bg}
          w="full"
          px={{
            base: 2,
            sm: 4,
          }}
          py={4}
          shadow="md"
          position={{  base: "relative" }}
          zIndex={10}

        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Flex>
              <chakra.a
                href="/"
                title="Choc Home Page"
                display="flex"
                alignItems="center"
              >
                {/* <Logo /> */}
                <VisuallyHidden>Choc</VisuallyHidden>
              </chakra.a>
              <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                Choc
              </chakra.h1>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={1}
                mr={1}
                color="brand.500"
                display={{
                  base: "none",
                  md: "inline-flex",
                }}
              >
                <Link href="/">
                <Button variant="ghost">Home</Button>
                </Link>
                <Link href="/pricing">
                <Button variant="ghost">Pricing</Button>
                </Link>
                <Button variant="ghost">Notes</Button>
                <Button variant="ghost">About</Button>
                <Link href="/courses">
                  <Button variant="ghost">Courses</Button>
                </Link>
              </HStack>
              <Button bg="skyblue" size="sm">
                Sign In
              </Button>
              <Box
                display={{
                  base: "inline-flex",
                  md: "none",
                }}
              >
                <IconButton
                  display={{
                    base: "flex",
                    md: "none",
                  }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  _dark={{
                    color: "inherit",
                  }}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />

                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                  zIndex="9999"
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />

                  <Button w="full" variant="ghost">
                    Features
                  </Button>
                  <Button w="full" variant="ghost">
                    Pricing
                  </Button>
                  <Button w="full" variant="ghost">
                    Blog
                  </Button>
                  <Button w="full" variant="ghost">
                    Company
                  </Button>
                  <Button w="full" variant="ghost">
                    Sign in
                  </Button>
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </Box>
      </React.Fragment>
    </>
  );
};

export default Navbar;
