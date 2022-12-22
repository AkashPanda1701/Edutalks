import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Flex, Text, Badge, Image, Grid, GridItem, Button, Img, useToast } from "@chakra-ui/react";
import { BsCalendar2Week, BsCheck, BsCheck2Circle, BsClock, BsClockFill, BsCollection, BsDashSquare, BsFillShareFill, BsLayoutSidebarInset, BsListNested, BsShare, BsSquareHalf, BsSuitDiamondFill } from "react-icons/bs";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { FaArrowRight, FaCheckCircle, FaConfluence, FaGift, FaPlaceOfWorship, FaPlay, FaQuestion, FaShare } from "react-icons/fa";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getCourseBySlug } from "../../../redux/course/action";
import { addCourse } from "../../../redux/auth/action";

const SingleCourse = () => {
  const dispatch = useDispatch();
  const { Singlecourse: { data } } = useSelector(state => state.course);
  const router = useRouter();
  const toast = useToast();
  const { slug } = router.query;
  useEffect(() => {
    dispatch(getCourseBySlug(slug));
  }, [slug, dispatch]);
  const { user } = useSelector(state => state.auth);
  const [enrolled, setEnrolled] = React.useState(false);
  const [videoData, setVideoData] = React.useState([]);


  const handleEnroll = async () => {
    if (!user) {
      toast({ title: "You are not logged in", status: 'warning', duration: 3000, position: "top", isClosable: true, description: 'Please login to access this course' })
      return
    }
    if (data.type === 'paid') {
      if (new Date(user.subscriptions.enddate).toLocaleDateString() < new Date().toLocaleDateString()) {
        console.log('expired')
        toast({ title: "You don't have valid subscription", status: 'warning', duration: 3000, position: "top", isClosable: true, description: 'Please subscribe to our premium plan to access this course' })
        router.push(`/pricing`)
      }
    }
    dispatch(addCourse({ userId: user.id, courseId: data._id }));
    toast({ title: 'Course added to your library', status: 'success', duration: 3000, position: "top", isClosable: true })
  }

  useEffect(() => {
    user?.courses?.forEach(course => {
      if (course.courseId === data?._id) {
        setEnrolled(true)
        setVideoData(course.completed)
      } else {
        setEnrolled(false)
        setVideoData([])
      }
    })
  }, [user, data])



  console.log(videoData);




  return (
    <Box bg='gray.50'>
      <Navbar />
      <Flex mt='8' justifyContent="center" mx={{ base: '4', md: '10', lg: '20', xl: '32' }} textColor='gray.700' >
        <Grid bg='white' p='4' mt='4' borderRadius='md' boxShadow='md' gap='4' templateColumns='repeat(2, 1fr)'>
          <GridItem colSpan={{ base: 2, lg: 1 }} p='4' display='flex' justifyContent='center' alignItems='center'>
            <Image rounded='lg' src={data?.image} alt="course" />
          </GridItem>
          <GridItem colSpan={{ base: 2, lg: 1 }} display='flex' flexDirection='column' justifyContent='center'>
            <Text fontSize={{ base: "2xl", md: "2xl", }} color="gray.700" _dark={{ color: "white" }} fontWeight="bold">
              {data?.title}
            </Text>
            <Text fontSize={{ base: "md", md: "md", }} mt='4' color="gray.700" _dark={{ color: "white" }} fontWeight="normal">
              {data?.description?.slice(0, 400)}...
            </Text>
            <Grid templateColumns='repeat(3, 1fr)' gap='4' mt='4'>
              <GridItem colSpan={{ base: 2, md: 1 }} borderRadius='md'>
                <Flex alignItems='center' gap='4'>
                  <Box bg='gray.100' borderRadius='full' w='50px' h='50px' display='flex' justifyContent='center' alignItems='center'>
                    <BsClockFill size='20px' color='gray' />
                  </Box>
                  <Box w='65%'>
                    <Text>Duration</Text>
                    <Text mt='1' fontSize='sm'>{data?.totalDuration} mins</Text>
                  </Box>
                </Flex>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }} borderRadius='md'>
                <Flex alignItems='center' gap='4'>
                  <Box bg='gray.100' borderRadius='full' w='50px' h='50px' display='flex' justifyContent='center' alignItems='center'>
                    <BsCollection size='20px' color='gray' />
                  </Box>
                  <Box w='65%'>
                    <Text>Lectures</Text>
                    <Text mt='1' fontSize='sm'>{data?.videos?.length} Lectures</Text>
                  </Box>
                </Flex>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }} borderRadius='md' display='flex' alignItems='center'>
                <Button colorScheme='green' w='100%' onClick={enrolled ? null : handleEnroll}>
                  <BsCheck2Circle /> &nbsp;
                  {enrolled ? 'Enrolled' : 'Get Subscription'}
                </Button>
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
              <Box fontSize='xl' fontWeight='bold'>{data?.title}</Box>
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
        <GridItem colSpan={{ base: 7, md: 4 }} my='6' gap={4} display={'grid'}>

          {
            data?.videos?.map((video, index) => (
              <Box key={index} bg='white' p='4' borderRadius='md' boxShadow='md' cursor={'pointer'} _hover={{ bg: 'blue.50' }}>
                <Flex gap='4' alignItems='center' justifyContent={'space-between'}>
                  <Flex gap='4' alignItems='center'>
                    <Img w='120px' src={data.image} alt={data.title} rounded='md' />

                    <Box>
                      <Box fontSize='sm' fontWeight='bold'>{video.subtitle}</Box>
                      <Badge colorScheme="green">Duration: {video.duration} mins</Badge>
                    </Box>
                  </Flex>
                  <Link href={`${data.slug}/watch?video=${index + 1}`} >
                    <Button colorScheme={enrolled ? videoData?.includes(index) ? 'gray' : 'green' : 'gray'} size='sm'>
                      {enrolled ? videoData?.includes(index) ? <FaCheckCircle /> : <FaPlay /> : <FaPlay />}
                      &nbsp; {
                        enrolled ? videoData?.includes(index) ? 'Watched' : 'Watch Now' : 'Enroll Now'
                      }
                    </Button>
                  </Link>
                </Flex>
              </Box>
            ))
          }
        </GridItem>
      </Grid>
      <Footer />
    </Box>
  );
};

export default SingleCourse;
