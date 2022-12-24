import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'

function AppShowcase() {
    return (
        <Box mt='8' mx={{ base: '4', md: '10', lg: '20', xl: '32' }}>
            <Grid templateColumns="repeat(2, 1fr)" gap={6} alignItems="center">
                <GridItem colSpan={{ base: 2, md: 1 }} textAlign={{ base: 'center', md: 'left' }}>
                    <Box>
                        <Text fontSize="4xl" fontWeight="semibold" letterSpacing="tight" lineHeight="shorter" color="gray.900">
                            Get the learning app
                        </Text>
                        <Text fontSize="3xl" fontWeight="semibold" letterSpacing="tight" lineHeight="shorter" color="gray.900">
                            that's right for you
                        </Text>
                        <Text fontSize="md" mt='4' letterSpacing="tight" lineHeight="shorter" color="gray.900" w={{ base: '100%', md: '80%'}}>
                            Download lessons and learn anytime, anywhere with the Unacademy app
                        </Text>
                        <Flex mt="6" gap={4} alignItems="center" justifyContent={{ base: 'center', md: 'flex-start' }}>
                            <Image h='60px' src="https://static.uacdn.net/production/_next/static/images/app_store.png?q=75&w=256" />
                            <Image h='60px' src="https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&w=256" />
                        </Flex>
                    </Box>
                </GridItem>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                    <Box>
                        <Image src="https://img.freepik.com/free-vector/ecommerce-internet-shopping-promotion-campaign_335657-2977.jpg?w=2000" />
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default AppShowcase