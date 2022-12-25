import React, { useEffect } from 'react'
import { Box, Button, Flex, Text, useColorModeValue, Table, Thead, Tbody, Tr, Th, Td, useDisclosure, Modal, FormControl, InputGroup, Input, ModalBody, ModalHeader, ModalOverlay, ModalFooter, ModalContent, ModalCloseButton, Select, useToast } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
// import { deleteUser, getallUser, updateUser } from '../../redux/user/action';
import Admin from './index'

function Users() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // let { users, loading, error } = useSelector((state) => state.user);
    // const { user: { data: { email: userEmail } } } = useSelector((state) => state.auth);

    // users.forEach((user) => {
    //     if (user.email === userEmail) {
    //         users.splice(users.indexOf(user), 1)
    //     }
    // })

    const [userEdit, setUserEdit] = React.useState({});
    // const dispatch = useDispatch();
    // const toast = useToast();

    // useEffect(() => {
    //     dispatch(getallUser());
    // }, [dispatch]);

    const handleEditChange = (e) => {
        setUserEdit({
            ...userEdit,
            [e.target.name]: e.target.value
        })
    }

    const handleEditSubmit = (e) => {
        // e.preventDefault();
        // console.log(userEdit);
        // dispatch(updateUser(userEdit._id, {
        //     name: userEdit.name,
        //     email: userEdit.email,
        //     role: userEdit.role
        // }
        // ));

        // toast({
        //     title: "User updated.",
        //     description: "We've updated the user for you.",
        //     status: "success",
        //     duration: 3000,
        //     isClosable: true,
        //     position: 'top'
        // })

        // setTimeout(() => {

        //     onClose();
        // }, 2000);
    }



    return (
        <Box>
            <Admin>
                <Flex>
                    <Text fontSize="2xl" fontWeight="bold">All Users</Text>
                </Flex>
                <Box mt="4" bg={useColorModeValue('white', 'gray.900')} p="8" borderRadius="md" shadow="md">
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Role</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {/* {
                                users.map((user, index) => (
                                    <Tr key={index}>
                                        <Td>{user.name}</Td>
                                        <Td>
                                            <Text isTruncated>
                                                {user.email}
                                            </Text>
                                        </Td>
                                        <Td>{user.role}</Td>
                                        <Td>
                                            <Button colorScheme="blue" size="sm" mr="2" onClick={() => {
                                                setUserEdit(user)
                                                onOpen()
                                            }}>Edit</Button>
                                            <Button colorScheme="red" size="sm"
                                                onClick={() => {
                                                    dispatch(deleteUser(user._id))
                                                }}


                                            >Delete</Button>
                                        </Td>
                                    </Tr>
                                ))
                            } */}
                        </Tbody>
                    </Table>
                </Box>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Edit User</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <FormControl id="title">
                                <InputGroup size="md">
                                    <Input placeholder="Name" value={userEdit.name} name="name" onChange={handleEditChange} />
                                </InputGroup>
                                <InputGroup size="md" mt="4">
                                    <Input placeholder="Email" value={userEdit.email} name="email" onChange={handleEditChange} />
                                </InputGroup>
                                <InputGroup size="md" mt="4">
                                    <Select placeholder="Select Role" value={userEdit.role} name="role" onChange={handleEditChange}>
                                        <option value="Admin">Admin</option>
                                        <option value="User">User</option>
                                        <option value="Writer">Writer</option>
                                    </Select>
                                </InputGroup>
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme='red' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button colorScheme={'blue'} onClick={handleEditSubmit}>Update</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Admin>
        </Box>
    )
}

export default Users