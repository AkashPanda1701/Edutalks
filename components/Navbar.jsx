import React, { useEffect } from "react";
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  ProgressLabel,
  Progress,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Login from "./Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { setSession } from "../redux/auth/action";
import { BsGift, BsGiftFill } from "react-icons/bs";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { user } = useSelector(state => state.auth)
  const { data: session } = useSession()
  const dispatch = useDispatch();
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(setSession());
  }, [dispatch]);

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
          position={{ base: "relative" }}
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
              <Link href="/">
                <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                  Choc
                </chakra.h1>
              </Link>
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
                <Link href="/notes">
                  <Button variant="ghost">Notes</Button>
                </Link>
                <Link href="/about">
                  <Button variant="ghost">About</Button>
                </Link>
                <Link href="/courses">
                  <Button variant="ghost">Courses</Button>
                </Link>
                <Link href="/referral">
                  <Button variant="ghost"><BsGiftFill color="green" /> &nbsp; Refer</Button>
                </Link>
                {user?.courses?.length > 0 && <Menu variant='ghost'>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} onClick={session ? null : onOpen}>
                    Progress
                  </MenuButton>
                  <MenuList>
                    {
                      user?.courses?.map((course, index) => (
                        <Link href={`/course/${course.courseId.slug}/watch`} key={index}>
                          <MenuItem>
                            {course.courseId.title}
                          </MenuItem>
                          <Progress m={4} colorScheme="green" value={course.completed.length*20} size="sm" >
                            <ProgressLabel ml={2} color="green">{course.completed.length*20}%</ProgressLabel>
                          </Progress>
                        </Link>
                      ))

                    }

                  </MenuList>
                </Menu>
                }
              </HStack>
              <Login />
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

                  <Link href="/">
                    <Button variant="ghost">Home</Button>
                  </Link>
                  <Link href="/pricing">
                    <Button variant="ghost">Pricing</Button>
                  </Link>
                  <Link href="/notes">
                    <Button variant="ghost">Notes</Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="ghost">About</Button>
                  </Link>
                  <Link href="/courses">
                    <Button variant="ghost">Courses</Button>
                  </Link>
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
