import React, { useContext, useState, useEffect } from "react";
import { Badge, Box, Button, Flex, Image, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { BsMessenger } from "react-icons/bs";
import { FaSeedling } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
// create socket connection
import { io } from "socket.io-client";
const socket = io("https://edutalkssocket.onrender.com", { transports: ["websocket"] });
const Bots = () => {
    const [input , setInput] = useState('')
    const [messages, setMessages] = useState([]);

    socket.on('history', (data) => {
        console.log(data)
        setMessages(data)
    })
    socket.on("connect", () => {
        console.log("connected");

      
    });

 

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
                        <Flex flexDirection='column' alignItems='center' justifyContent='center' height='100%' fontSize={'14px'}>
                           {
                                 messages.map((user, index) => {
                                    return (
                                        <Box key={index} bg='gray.100' p='2' borderRadius='10px' w='80%' mb='2'>
                                            
<Flex direction={'column'} alignItems={user.type === 'admin' ? 'flex-start' : 'flex-end'} justifyContent={user.type === 'admin' ? 'flex-start' : 'flex-end'}>

                                            <Badge colorScheme="green" mr='2' bg='green.200' borderRadius='10px' p='2' float={user.type === 'admin' ? 'left' : 'right'}>{user.type}</Badge>
                                            <Box colorScheme="green" mr='2' bg='green.200' border={'1px solid green'} borderRadius='10px' p='2' w='fit-content' display={'flex'} float={user.type === 'admin' ? 'left' : 'right'}>{user.message}</Box>
</Flex>
                                            
                                          
                                        </Box>
                                    )
                                })
                           }
                        </Flex>
                        <InputGroup size='md' p='8'>
                            <Input
                                p='4'
                                w='220px'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter Your Message'
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <InputRightElement width='4.5rem'>
                                <Box color='gray.300' mt='12' ml='8' onClick = {() => {
                                    console.log('send' ,input)
                                    socket.emit('message', {message: input, type: 'user'})
                                }}>
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