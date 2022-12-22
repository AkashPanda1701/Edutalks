import React from "react";
import {
  Box,
  chakra,
  Flex,
  Image,
  Button,
  WrapItem,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";

const UserProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: session } = useSession();
  console.log(session);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <Box
      m="auto"
      w={{ base: "100%", md: "70%", sm: "100%" }}
      mt="50px"
      mb="40px"
    >
      <chakra.h2 fontSize={25} fontWeight="600">
        Refer your friends
      </chakra.h2>
      <Box
        w="full"
        mt="30px"
        p={8}
        boxShadow="xl"
        borderRadius="10px"
      >
        <Flex justifyContent="space-between" h="60px">
          <Box>
            <chakra.h1 fontSize={20} fontWeight="600">
              Refer friends to win Amazon vouchers and Plus Subscription
            </chakra.h1>
            <chakra.p fontSize={15} opacity="0.8">
              For every successful referral win up to ₹2,500. Also get 1 month
              plus subscription once
            </chakra.p>
          </Box>
          <Box>
            <Image
              src="https://static.uacdn.net/referrals/web_refer_and_win_a_laptop_free_user.png?q=75&w=1000&fm=webp"
              w="full"
              h="full"
            />
          </Box>
        </Flex>
        <Flex justifyContent="space-between" mt="30px" bg='gray.50' px='8' p='4' rounded='md'>
          <Box>
            <chakra.p fontSize="12px">Your referal code</chakra.p>
            <chakra.h1 fontSize="26px" fontWeight={'semibold'}>{session?.user.referalCode}</chakra.h1>
          </Box>
          <Box mt='10px'>
            <Button colorScheme="green" mr="10px">
              Copy code
            </Button>
            <Button colorScheme="gray" variant="outline">
              Learn More
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box mt="50px">
        <chakra.h1 fontSize={25} fontWeight="600">
          Account
        </chakra.h1>
        <Box>
          <chakra.p>Name</chakra.p>
          <chakra.p>{session?.user.name}</chakra.p>
          <Divider mt="10px" mb="10px" />
        </Box>
        <Box>
          <chakra.p>Email</chakra.p>
          <chakra.p>{session?.user.email}</chakra.p>
          <Divider mt="10px" mb="10px" />
        </Box>
        <Box>
          <chakra.p>Mobile number</chakra.p>
          <chakra.p>{session?.user.phone}</chakra.p>
          <Divider mt="10px" mb="10px" />
        </Box>
        <Box>
          <chakra.p>Subscription Valid</chakra.p>
          <chakra.p>
            {/* Calculate subscription left from startdate and enddate */}
            {new Date(session?.user.subscriptions.enddate).toDateString()}
          </chakra.p>
          <Divider mt="10px" mb="10px" />
        </Box>
      </Box>
      <Box>
        <Button onClick={onOpen}>Update profile</Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update your Profile</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input ref={initialRef} placeholder="Name" value={session?.user.name} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input placeholder="Email" value={session?.user.email} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Phone number</FormLabel>
                <Input placeholder="Phone number" value={session?.user.phone} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input placeholder="Password" />
              </FormControl>
            </ModalBody>

            <ModalFooter >
              <Button mt='8' colorScheme="blue" mr={3}>
                Update
              </Button>
              {/* <Button onClick={onClose}>Cancel</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default UserProfile;
