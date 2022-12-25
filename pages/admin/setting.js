import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, FormControl, Input, InputGroup, Text, useColorModeValue, useToast } from '@chakra-ui/react'
import Admin from './index'
import { useDispatch, useSelector } from 'react-redux'

function Setting() {

    const [userData, setUserData] = useState({ name: '', email: '', password: '' })
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const toast = useToast();

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUserData({ ...userData, [name]: value })
    }

    
    
    
    useEffect(() => {
        // dispatch(getallUser());
    }, [dispatch]);

    return (
        <Box>
            <Admin>
                <Box>
                    <Flex>
                        <Text fontSize="2xl" fontWeight="bold">Setting</Text>
                    </Flex>
                    <Box mt="4" bg={useColorModeValue('white', 'gray.900')} p="8" borderRadius="md" shadow="md">
                        <FormControl>
                            <InputGroup size="md">
                                <Input placeholder="Name" name='name' value={userData.name} onChange={handleInput} />
                            </InputGroup>
                            <InputGroup size="md" mt="4">
                                <Input placeholder="Email" name='email' value={userData.email} onChange={handleInput} />
                            </InputGroup>
                            <InputGroup size="md" mt="4">
                                <Input type={"password"} placeholder="Password" name='password' onChange={handleInput} />
                            </InputGroup>

                            <InputGroup size="md" mt="4">
                                <Button colorScheme="blue" size="md" w="100%"
                                >Update</Button>
                            </InputGroup>
                        </FormControl>
                    </Box>
                </Box>
            </Admin>
        </Box >
    )
}

export default Setting