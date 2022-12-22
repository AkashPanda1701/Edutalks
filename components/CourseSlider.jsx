import { Badge, Box, GridItem, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function CourseSlider() {
    return (
        <Box py='16' mx={{ base: '4', md: '10', lg: '20', xl: '32' }}>
        <Carousel responsive={responsive}>
            <Link href='/course/coursepage'>
                <Box m='2'>
                    <Box borderRadius='lg' boxShadow={'md'} bg='white'>
                        <Image src='https://static.uacdn.net/thumbnail/course/v2/88707BBC-244F-415F-9C15-30BFD213AA9F_special_class.png?q=75&w=512&fm=webp' roundedTop={'lg'} />
                        <Box p='4'>
                            <Badge colorScheme='blue' mb='2'>Special Class</Badge>
                            <Text fontSize='md' fontWeight='semibold'>Learn Python Programming</Text>
                            <Text mt='2' fontSize='sm' textColor='gray.500'>Learn Python Programming from scratch</Text>
                            <Text mt='2' fontSize='sm' textColor='gray.500'>Duration: <Badge colorScheme='green' ml='2'>2 hours</Badge></Text>
                        </Box>
                    </Box>
                </Box>
            </Link>
            <Link href='/course/coursepage'>
                <Box m='2'>
                    <Box borderRadius='lg' boxShadow={'md'} bg='white'>
                        <Image src='https://static.uacdn.net/thumbnail/course/v2/88707BBC-244F-415F-9C15-30BFD213AA9F_special_class.png?q=75&w=512&fm=webp' roundedTop={'lg'} />
                        <Box p='4'>
                            <Badge colorScheme='blue' mb='2'>Special Class</Badge>
                            <Text fontSize='md' fontWeight='semibold'>Learn Python Programming</Text>
                            <Text mt='2' fontSize='sm' textColor='gray.500'>Learn Python Programming from scratch</Text>
                            <Text mt='2' fontSize='sm' textColor='gray.500'>Duration: <Badge colorScheme='green' ml='2'>2 hours</Badge></Text>
                        </Box>
                    </Box>
                </Box>
            </Link>
            <Link href='/course/coursepage'>
                <Box m='2'>
                    <Box borderRadius='lg' boxShadow={'md'} bg='white'>
                        <Image src='https://static.uacdn.net/thumbnail/course/v2/88707BBC-244F-415F-9C15-30BFD213AA9F_special_class.png?q=75&w=512&fm=webp' roundedTop={'lg'} />
                        <Box p='4'>
                            <Badge colorScheme='blue' mb='2'>Special Class</Badge>
                            <Text fontSize='md' fontWeight='semibold'>Learn Python Programming</Text>
                            <Text mt='2' fontSize='sm' textColor='gray.500'>Learn Python Programming from scratch</Text>
                            <Text mt='2' fontSize='sm' textColor='gray.500'>Duration: <Badge colorScheme='green' ml='2'>2 hours</Badge></Text>
                        </Box>
                    </Box>
                </Box>
            </Link>
            <Link href='/course/coursepage'>
                <Box m='2'>
                    <Box borderRadius='lg' boxShadow={'md'} bg='white'>
                        <Image src='https://static.uacdn.net/thumbnail/course/v2/88707BBC-244F-415F-9C15-30BFD213AA9F_special_class.png?q=75&w=512&fm=webp' roundedTop={'lg'} />
                        <Box p='4'>
                            <Badge colorScheme='blue' mb='2'>Special Class</Badge>
                            <Text fontSize='md' fontWeight='semibold'>Learn Python Programming</Text>
                            <Text mt='2' fontSize='sm' textColor='gray.500'>Learn Python Programming from scratch</Text>
                            <Text mt='2' fontSize='sm' textColor='gray.500'>Duration: <Badge colorScheme='green' ml='2'>2 hours</Badge></Text>
                        </Box>
                    </Box>
                </Box>
            </Link>
            <Link href='/course/coursepage'>
                <Box m='2'>
                    <Box borderRadius='lg' boxShadow={'md'} bg='white'>
                        <Image src='https://static.uacdn.net/thumbnail/course/v2/88707BBC-244F-415F-9C15-30BFD213AA9F_special_class.png?q=75&w=512&fm=webp' roundedTop={'lg'} />
                        <Box p='4'>
                            <Badge colorScheme='blue' mb='2'>Special Class</Badge>
                            <Text fontSize='md' fontWeight='semibold'>Learn Python Programming</Text>
                            <Text mt='2' fontSize='sm' textColor='gray.500'>Learn Python Programming from scratch</Text>
                            <Text mt='2' fontSize='sm' textColor='gray.500'>Duration: <Badge colorScheme='green' ml='2'>2 hours</Badge></Text>
                        </Box>
                    </Box>
                </Box>
            </Link>
        </Carousel>
        </Box>
    )
}

export default CourseSlider