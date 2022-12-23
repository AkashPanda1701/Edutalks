import React, { useContext, useState, useEffect } from "react";
import { Box, Button, Flex, Image, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { BsMessenger } from "react-icons/bs";
import { FaSeedling } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
// create socket connection
// import { io } from "socket.io-client";
let socket;
const Bots = () => {

    // useEffect(() => socketInitializer(), [])

    // const socketInitializer = async () => {
    //     await fetch('/api/socket')
    //     socket = io()

    //     socket.emit('response', (data) => {
    //         console.log(data)
    //     })
    // }

    const [show, setShow] = useState(false);

    return (
        <Box position="fixed" bottom="50" right="50" zIndex="100">
            <Image src="https://cdn-icons-png.flaticon.com/512/1458/1458238.png" alt="logo" mb='12' height={60} onClick={() => setShow(!show)} />
            {
                show ? (<Box>
                    <Box width='300px' height='400px' bg='white' borderRadius='10px' boxShadow='md' display='flex' flexDirection='column' justifyContent='space-between'>
                        <Box bg="green" width='100%' height='50px' roundedTop='10px' mb='5'>
                            <Text lineHeight='50px' textAlign='center' color='white' fontSize='xl' fontWeight='bold' ml='5' mt='2'>ChatBot</Text>
                        </Box>
                        <Flex flexDirection='column' alignItems='center' justifyContent='center' height='100%'>
                            <Text fontSize='xl' fontWeight='bold'>Hello, I am ChatBot</Text>
                            <Text fontSize='xl' fontWeight='bold'>How can I help you?</Text>
                        </Flex>
                        <InputGroup size='md' p='8'>
                            <Input
                                p='4'
                                w='220px'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                            />
                            <InputRightElement width='4.5rem'>
                                <Box color='gray.300' mt='12' ml='8'>
                                    <AiOutlineSend size='25px' />
                                </Box>
                            </InputRightElement>
                        </InputGroup>
                    </Box>
                </Box>) : null
            }
        </Box>
    );
};

export default Bots;