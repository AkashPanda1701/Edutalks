import {
    Badge,
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Text,
    useToast
} from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect } from "react";
import Navbar from "../../../components/Navbar";
import { BsCheck, BsCheck2Circle, BsCheckCircle, BsCheckCircleFill, BsHeartFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getCourseBySlug } from "../../../redux/course/action";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { addCourse } from "../../../redux/auth/action";

function watch() {
    const router = useRouter();
    const { slug, video } = router.query;
    const dispatch = useDispatch();
    const toast = useToast();
    const {
        Singlecourse: { data },
    } = useSelector((state) => state.course);
    const { user } = useSelector((state) => state.auth);
    const [playvideo, setVideo] = React.useState({});
    const [completed, setCompleted] = React.useState({});
    const [videoData, setVideoData] = React.useState([]);

    useEffect(() => {
        console.log("router.isReady: ", router.isReady);
        if (router.isReady) {
            dispatch(getCourseBySlug(slug));
        }
    }, [router.isReady,slug]);
    const { data: session } = useSession();

    useEffect(() => {
        if (data?.videos) {
            setVideo(data.videos[(video - 1 || 0)])
        }
    }, [data]);

    const handleComplete = async () => {
        dispatch(addCourse({ userId: session.user.id, courseId: data._id, videoNo: video - 1 }));
        toast({ title: 'Video marked as complete', status: 'success', duration: 3000, position: "top", isClosable: true })
    }

    useEffect(() => {
        user?.courses?.forEach(course => {
            if (course.courseId._id === data?._id) {
                setVideoData(course.completed)
            }
        })
    }, [user, data])


    return <>
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
                            <Box w='full' h={{ base: '200px', md: '400px', lg: '500px' }} borderRadius='md' boxShadow='md'>
                                <iframe width='100%' className='responsive-iframe' height='100%' src={playvideo?.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Box>
                            <Flex justifyContent='space-between' alignItems='center' bg='white' p='4' mt='4' borderRadius='md' boxShadow='md'>
                                <Box>
                                    <Box fontSize='xl' fontWeight='bold'>{playvideo.subtitle}</Box>
                                    <Badge colorScheme="green">Duration: &nbsp; {playvideo.duration} Mins</Badge>
                                </Box>
                                <Flex alignItems='center'>
                                    <Button colorScheme='green' ml='4' onClick={videoData.includes(video - 1) ? null : handleComplete}>
                                        {
                                            videoData.includes(video - 1) ? <BsCheckCircleFill /> : null
                                        }
                                        &nbsp;
                                        {
                                            videoData.includes(video - 1) ? 'Completed' : 'Mark as complete'
                                        }
                                    </Button>
                                </Flex>
                            </Flex>
                            <Box bg='white' p='4' mt='4' borderRadius='md' boxShadow='md'>
                                <Box fontSize='xl' fontWeight='bold'>Description</Box>
                                <Text>
                                    {data?.description}
                                </Text>
                            </Box>
                        </GridItem>
                        <GridItem colSpan={{ base: 7, md: 2 }} mt='8' h='90vh' overflowY='scroll' gap='4' display='flex' flexDirection='column'>
                            {
                                data?.videos?.map((item, index) => (<Link href={`/course/${slug}/watch?video=${index + 1}`} key={index}>
                                    <Box p='4' borderRadius='md' boxShadow='md' cursor={'pointer'} _hover={{ bg: 'green.50' }} onClick={() => setVideo(item)}  bg={videoData.includes(index) ? 'green.200' : 'white'}>
                                        <Flex gap='4' alignItems='center'>
                                            <Box px='6' py='2' bg='blue.500' borderRadius='md' color='white'>
                                                <Text fontSize='xl' fontWeight='bold'>{index + 1}</Text>
                                            </Box>
                                            <Box>
                                                <Box fontSize='sm' fontWeight='bold'>{item.subtitle}</Box>
                                                <Badge colorScheme="green">Duration: &nbsp; {item.duration} Mins</Badge>
                                            </Box>
                                        </Flex>
                                    </Box>
                                </Link>
                                ))
                            }

                        </GridItem>
                    </Grid>
                </Box>
            </Box>
        </Box>
    </>
}


export default watch;
