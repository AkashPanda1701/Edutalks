import { Badge, Box, GridItem, Image, Skeleton, SkeletonText, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../redux/course/action';
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
    const dispatch = useDispatch();
    const { Allcourses: { data, loading, error } } = useSelector(state => state.course);
    React.useEffect(() => {
        dispatch(getAllCourses());
    }, [dispatch]);
    return (
        <Box py='16' mx={{ base: '4', md: '10', lg: '20', xl: '32' }}>
            <Carousel responsive={responsive}>
                {
                    loading ? new Array(6).fill(6).map((el, index) => <GridItem colSpan={1} key={index} >
                        <Box m='2' borderRadius='lg' boxShadow={'md'} bg='white'>
                            <Skeleton roundedTop={'lg'} h={'180px'} />
                            <Box p='4'>
                                <SkeletonText mt='2' noOfLines={1} spacing='4' />
                                <SkeletonText mt='2' noOfLines={1} spacing='4' />
                                <SkeletonText mt='2' noOfLines={1} spacing='4' />

                            </Box>
                        </Box>
                    </GridItem>) : data?.map((course, index) => <Link key={index} href={`/course/${course.slug}`}>
                        <GridItem colSpan={1}>
                            <Box m='2' borderRadius='lg' boxShadow={'md'} bg='white'>
                                <Image src={course.image} roundedTop={'lg'} />
                                <Box p='4'>
                                    <Badge colorScheme={course.type === 'free' ? 'green' : 'orange'} mb='2'>
                                        {course.type} Course
                                    </Badge>
                                    <Text fontSize='md' fontWeight='semibold'>{course.title}</Text>
                                    <Text mt='2' fontSize='sm' textColor='gray.500'>Learn {
                                        course.title?.split('to')[1]?.length > 10 ? `${course.title?.split('to')[1].slice(0, 10)}... ` : course.title?.split('to')[1]
                                    } from scratch</Text>
                                    <Text mt='2' fontSize='sm' textColor='gray.500'>Duration: <Badge colorScheme='green' ml='2'>{
                                        course.totalDuration
                                    } Mins</Badge></Text>
                                </Box>
                            </Box>
                        </GridItem>
                    </Link>
                    )
                }
            </Carousel>
        </Box>
    )
}

export default CourseSlider