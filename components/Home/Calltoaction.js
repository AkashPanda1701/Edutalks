import React from 'react'
import { Flex, Box, chakra, Button } from '@chakra-ui/react'
import { FaShare } from 'react-icons/fa'
import Link from 'next/link'

function Calltoaction() {
    return (
        <>
            <Flex
                alignItems="center"
                bg='#FFF5E5'
                p={{ base: 4, md: 8, lg: 12 }}
                px={{ base: '4', md: '10', lg: '20', xl: '32' }}
                flexDirection={{ base: 'column', md: 'row' }}
                justifyContent="space-between">

                <chakra.h2
                    fontSize="2xl"
                    fontWeight="semibold"
                    letterSpacing="tight"
                    lineHeight="shorter"
                    color="gray.900"
                    _dark={{
                        color: "gray.100",
                    }}
                >
                    <chakra.span display="block">Start Your Learning Journey Today For Free</chakra.span>
                </chakra.h2>
                <Link href="/referral">
                <Button colorScheme="orange" size='md'><FaShare /> &nbsp; Refer Now</Button>
                </Link>
            </Flex>
        </>
    )
}

export default Calltoaction