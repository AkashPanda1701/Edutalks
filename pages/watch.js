import { Badge, Box, Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

function watch() {
    return (
        <>
            <Head>
                <title>Course Watch - Hackathon</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box>
                <Box bg={'gray.50'}>
                    <Navbar />
                    <Box mx={{ base: '4', md: '10', lg: '20', xl: '32' }} textColor='gray.700'>
                        <Grid templateColumns="repeat(7, 1fr)" gap={6}>
                            <GridItem colSpan={{ base: 7, md: 5 }} mt='8'>
                                <Box w='full' bg='red' class="responsiveFrame">
                                    <iframe class="responsive-iframe" src="https://www.youtube.com/embed/hQAHSlTtcmY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </Box>
                                <Flex justifyContent='space-between' alignItems='center' bg='white' p='4' mt='4' borderRadius='md' boxShadow='md'>
                                    <Box>
                                        <Box fontSize='xl' fontWeight='bold'>Learn React JS - Full Course for Beginners</Box>
                                        <Badge colorScheme="green">Duration: 32 mins</Badge>
                                    </Box>
                                    <Flex alignItems='center'>
                                        <BsHeartFill size='20' />
                                        <Button colorScheme='green' ml='4'>Mark As Complete</Button>
                                    </Flex>
                                </Flex>
                                <Box bg='white' p='4' mt='4' borderRadius='md' boxShadow='md'>
                                    <Box fontSize='xl' fontWeight='bold'>Description</Box>
                                    <Text>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo tempora magni eligendi neque, blanditiis temporibus expedita vero fuga voluptatum dolorum ullam, aut reprehenderit consequatur!
                                    </Text>
                                </Box>
                            </GridItem>
                            <GridItem colSpan={{ base: 7, md: 2 }} mt='8' h='90vh' overflowY='scroll'>
                                <Box bg='white' p='4' borderRadius='md' boxShadow='md' cursor={'pointer'} _hover={{ bg: 'green.50' }}>
                                    <Flex justifyContent='space-between' gap='4' alignItems='center'>
                                        <Box px='6' py='2' bg='blue.500' borderRadius='md' color='white'>
                                            <Text fontSize='xl' fontWeight='bold'>1</Text>
                                        </Box>
                                        <Box>
                                            <Box fontSize='sm' fontWeight='bold'>Learn React JS - Full Course for Beginners</Box>
                                            <Badge colorScheme="green">Duration: 32 mins</Badge>
                                        </Box>
                                    </Flex>
                                </Box>
                                <Box bg='white' p='4' borderRadius='md' boxShadow='md' cursor={'pointer'} _hover={{ bg: 'green.50' }} mt='4'>
                                    <Flex justifyContent='space-between' gap='4' alignItems='center'>
                                        <Box px='6' py='2' bg='blue.500' borderRadius='md' color='white'>
                                            <Text fontSize='xl' fontWeight='bold'>2</Text>
                                        </Box>
                                        <Box>
                                            <Box fontSize='sm' fontWeight='bold'>Learn React JS - Full Course for Beginners</Box>
                                            <Badge colorScheme="green">Duration: 32 mins</Badge>
                                        </Box>
                                    </Flex>
                                </Box>
                                <Box bg='white' p='4' borderRadius='md' boxShadow='md' cursor={'pointer'} _hover={{ bg: 'green.50' }} mt='4'>
                                    <Flex justifyContent='space-between' gap='4' alignItems='center'>
                                        <Box px='6' py='2' bg='blue.500' borderRadius='md' color='white'>
                                            <Text fontSize='xl' fontWeight='bold'>2</Text>
                                        </Box>
                                        <Box>
                                            <Box fontSize='sm' fontWeight='bold'>Learn React JS - Full Course for Beginners</Box>
                                            <Badge colorScheme="green">Duration: 32 mins</Badge>
                                        </Box>
                                    </Flex>
                                </Box>
                                <Box bg='white' p='4' borderRadius='md' boxShadow='md' cursor={'pointer'} _hover={{ bg: 'green.50' }} mt='4'>
                                    <Flex justifyContent='space-between' gap='4' alignItems='center'>
                                        <Box px='6' py='2' bg='blue.500' borderRadius='md' color='white'>
                                            <Text fontSize='xl' fontWeight='bold'>2</Text>
                                        </Box>
                                        <Box>
                                            <Box fontSize='sm' fontWeight='bold'>Learn React JS - Full Course for Beginners</Box>
                                            <Badge colorScheme="green">Duration: 32 mins</Badge>
                                        </Box>
                                    </Flex>
                                </Box>
                                <Box bg='white' p='4' borderRadius='md' boxShadow='md' cursor={'pointer'} _hover={{ bg: 'green.50' }} mt='4'>
                                    <Flex justifyContent='space-between' gap='4' alignItems='center'>
                                        <Box px='6' py='2' bg='blue.500' borderRadius='md' color='white'>
                                            <Text fontSize='xl' fontWeight='bold'>2</Text>
                                        </Box>
                                        <Box>
                                            <Box fontSize='sm' fontWeight='bold'>Learn React JS - Full Course for Beginners</Box>
                                            <Badge colorScheme="green">Duration: 32 mins</Badge>
                                        </Box>
                                    </Flex>
                                </Box>
                                <Box bg='white' p='4' borderRadius='md' boxShadow='md' cursor={'pointer'} _hover={{ bg: 'green.50' }} mt='4'>
                                    <Flex justifyContent='space-between' gap='4' alignItems='center'>
                                        <Box px='6' py='2' bg='blue.500' borderRadius='md' color='white'>
                                            <Text fontSize='xl' fontWeight='bold'>2</Text>
                                        </Box>
                                        <Box>
                                            <Box fontSize='sm' fontWeight='bold'>Learn React JS - Full Course for Beginners</Box>
                                            <Badge colorScheme="green">Duration: 32 mins</Badge>
                                        </Box>
                                    </Flex>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default watch