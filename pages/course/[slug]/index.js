import React from "react";
import { useRouter } from "next/router";
import { Box, Flex, Text, Badge, Image, Grid, GridItem, Button } from "@chakra-ui/react";
import { BsCalendar2Week, BsCheck, BsCheck2Circle, BsClock, BsClockFill, BsCollection, BsDashSquare, BsFillShareFill, BsLayoutSidebarInset, BsListNested, BsShare, BsSquareHalf, BsSuitDiamondFill } from "react-icons/bs";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { FaArrowRight, FaCheckCircle, FaConfluence, FaGift, FaPlaceOfWorship, FaQuestion, FaShare } from "react-icons/fa";
import Link from "next/link";
const SingleCourse = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Box bg='gray.50'>
      <Navbar />
      <Flex mt='8' justifyContent="center" mx={{ base: '4', md: '10', lg: '20', xl: '32' }} textColor='gray.700' >
        <Grid bg='white' p='4' mt='4' borderRadius='md' boxShadow='md' gap='4' templateColumns='repeat(2, 1fr)'>
          <GridItem colSpan={{ base: 2, lg: 1 }} p='4'>
            <Image rounded='lg' src="https://static.uacdn.net/thumbnail/course/v2/8B406127-D2A0-424B-9FB8-D76D403B2EBF_special_class.png?q=75&w=512&fm=webp" alt="course" />
          </GridItem>
          <GridItem colSpan={{ base: 2, lg: 1 }} display='flex' flexDirection='column' justifyContent='center'>
            <Text fontSize={{ base: "2xl", md: "2xl", }} color="gray.700" _dark={{ color: "white" }} fontWeight="bold">
              Learn React JS - Full Course for Beginners
            </Text>
            <Text fontSize={{ base: "md", md: "md", }} mt='4' color="gray.700" _dark={{ color: "white" }} fontWeight="normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              modi reprehenderit vitae exercitationem aliquid dolores ullam
              temporibus enim expedita aperiam mollitia iure consectetur dicta
            </Text>
            <Grid templateColumns='repeat(3, 1fr)' gap='4' mt='4'>
              <GridItem colSpan={{ base: 2, md: 1 }} borderRadius='md'>
                <Flex alignItems='center' gap='4'>
                  <Box bg='gray.100' borderRadius='full' w='50px' h='50px' display='flex' justifyContent='center' alignItems='center'>
                    <BsClockFill size='20px' color='gray' />
                  </Box>
                  <Box w='70%'>
                    <Text ml='2'>Duration</Text>
                    <Text ml='2' mt='1' fontSize='sm'>32 mins</Text>
                  </Box>
                </Flex>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }} borderRadius='md'>
                <Flex alignItems='center' gap='4'>
                  <Box bg='gray.100' borderRadius='full' w='50px' h='50px' display='flex' justifyContent='center' alignItems='center'>
                    <BsCollection size='20px' color='gray' />
                  </Box>
                  <Box w='70%'>
                    <Text ml='2'>Lectures</Text>
                    <Text ml='2' mt='1' fontSize='sm'>12 Lectures</Text>
                  </Box>
                </Flex>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }} borderRadius='md' display='flex' alignItems='center'>
                <Button colorScheme='green' w='100%'><BsCheck2Circle /> &nbsp; Get Subscription</Button>
              </GridItem>
            </Grid>
            <Box border='1px solid' borderColor='gray.100' borderRadius='md' p={4} mt={4}>
              <Flex alignItems='center' gap='4' justifyContent='space-between'>
                <Flex alignItems='center' gap='4' textAlign={'center'}>
                  <FaGift size={30} color='green' />
                  <Text fontSize="md" textColor='gray.700'>Refer to a friend and get this course for free</Text>
                </Flex>
                <Button colorScheme='gray' size='sm'><FaShare /> &nbsp; Refer Now</Button>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Flex>
      <Grid templateColumns="repeat(7, 1fr)" gap={6} mx={{ base: '4', md: '10', lg: '20', xl: '32' }} textColor='gray.700'>
        <GridItem colSpan={{ base: 7, md: 3 }} mt='2'>
          <Flex alignItems='center' bg='white' p='4' mt='4' borderRadius='md' boxShadow='md'>
            <Box>
              <Box fontSize='xl' fontWeight='bold'>Learn React JS - Full Course for Beginners</Box>
              <Badge colorScheme="green">Duration: 32 mins</Badge>
            </Box>
          </Flex>
          <Box bg='white' p='4' mt='4' borderRadius='md' boxShadow='md'>
            <GridItem colSpan={{ base: 8, md: 3 }} bg='white' borderRadius='md'>
              <Box fontSize='xl' fontWeight='bold'>Skills you'll gain</Box>
              <Box border='1px solid' borderColor='gray.100' borderRadius='md' p={4} mt={4}>
                <Flex justifyContent='space-between' alignItems='center'>
                  <Flex alignItems='center' gap='2'>
                    <FaCheckCircle />
                    <Text fontSize="md" textColor='gray.700'> Understand key React concepts </Text>
                  </Flex>
                  <FaArrowRight />
                </Flex>
              </Box>
              <Box border='1px solid' borderColor='gray.100' borderRadius='md' p={4} mt={4}>
                <Flex justifyContent='space-between' alignItems='center'>
                  <Flex alignItems='center' gap='2'>
                    <FaConfluence />
                    <Text ml={2} fontSize="md" textColor='gray.700'> Use JSX, props, state, and more </Text>
                  </Flex>
                  <FaArrowRight />
                </Flex>
              </Box>
              <Box border='1px solid' borderColor='gray.100' borderRadius='md' p={4} mt={4}>
                <Flex justifyContent='space-between' alignItems='center'>
                  <Flex alignItems='center' gap='2'>
                    <FaPlaceOfWorship />
                    <Text ml={2} fontSize="md" textColor='gray.700'> Work in React’s modular style </Text>
                  </Flex>
                  <FaArrowRight />
                </Flex>
              </Box>

            </GridItem>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 7, md: 4 }} my='6'>
          <Box bg='white' p='4' py='8' borderRadius='md' boxShadow='md' cursor={'pointer'} _hover={{ bg: 'blue.50' }}>
            <Flex gap='4' alignItems='center' justifyContent={'space-between'}>
              <Flex gap='4' alignItems='center'>
                <Box px='6' py='2' bg='blue.500' borderRadius='md' color='white'>
                  <Text fontSize='xl' fontWeight='bold'>1</Text>
                </Box>
                <Box>
                  <Box fontSize='sm' fontWeight='bold'>Learn React JS - Full Course for Beginners</Box>
                  <Badge colorScheme="green">Duration: 32 mins</Badge>
                </Box>
              </Flex>
              <Link href='courselink/watch'>
                <Button colorScheme='blue' size='sm'><BsLayoutSidebarInset /> &nbsp; Watch Now</Button>
              </Link>
            </Flex>
          </Box>
          <Box bg='white' p='4' py='8' borderRadius='md' boxShadow='md' mt='4' cursor={'pointer'} _hover={{ bg: 'blue.50' }}>
            <Flex gap='4' alignItems='center' justifyContent={'space-between'}>
              <Flex gap='4' alignItems='center'>
                <Box px='6' py='2' bg='blue.500' borderRadius='md' color='white'>
                  <Text fontSize='xl' fontWeight='bold'>2</Text>
                </Box>
                <Box>
                  <Box fontSize='sm' fontWeight='bold'>Learn React JS - Full Course for Beginners</Box>
                  <Badge colorScheme="green">Duration: 32 mins</Badge>
                </Box>
              </Flex>
              <Button colorScheme='blue' size='sm'><BsLayoutSidebarInset /> &nbsp; Watch Now</Button>
            </Flex>
          </Box>
          <Box bg='white' p='4' py='8' borderRadius='md' boxShadow='md' mt='4' cursor={'pointer'} _hover={{ bg: 'blue.50' }}>
            <Flex gap='4' alignItems='center' justifyContent={'space-between'}>
              <Flex gap='4' alignItems='center'>
                <Box px='6' py='2' bg='blue.500' borderRadius='md' color='white'>
                  <Text fontSize='xl' fontWeight='bold'>3</Text>
                </Box>
                <Box>
                  <Box fontSize='sm' fontWeight='bold'>Learn React JS - Full Course for Beginners</Box>
                  <Badge colorScheme="green">Duration: 32 mins</Badge>
                </Box>
              </Flex>
              <Button colorScheme='blue' size='sm'><BsLayoutSidebarInset /> &nbsp; Watch Now</Button>
            </Flex>
          </Box>
          <Box bg='white' p='4' py='8' borderRadius='md' boxShadow='md' mt='4' cursor={'pointer'} _hover={{ bg: 'blue.50' }}>
            <Flex gap='4' alignItems='center' justifyContent={'space-between'}>
              <Flex gap='4' alignItems='center'>
                <Box px='6' py='2' bg='blue.500' borderRadius='md' color='white'>
                  <Text fontSize='xl' fontWeight='bold'>4</Text>
                </Box>
                <Box>
                  <Box fontSize='sm' fontWeight='bold'>Learn React JS - Full Course for Beginners</Box>
                  <Badge colorScheme="green">Duration: 32 mins</Badge>
                </Box>
              </Flex>
              <Button colorScheme='blue' size='sm'><BsLayoutSidebarInset /> &nbsp; Watch Now</Button>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
      <Footer />
    </Box>
  );
};

export default SingleCourse;
