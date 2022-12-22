import React from "react";
import {
  Box,
  Grid,
  chakra,
  Divider,
  Flex,
  HStack,
  Image,
  Heading,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OurTeam from "../components/OurTeam";

const about = () => {
  return (
    <Box w="100%">
      <Navbar />
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        w="95%"
        m="auto"
        mb="80px"
        // gap={16}
      >
        {" "}
        <Box m="auto">
          <Image src="./Aboutuspage.gif" />
        </Box>
        <Box mt="150px">
          <Heading mb="30px">About us</Heading>
          <chakra.p lineHeight={7} letterSpacing={1}>
            Education is about learning skills and knowledge. It also means
            helping people to learn how to do things and support them to think
            about what they learn. It's also important for educators to teach
            ways to find and use information. Education needs research to find
            out how to make it better. Through education, the knowledge of
            society, country, and of the world is passed on from generation to
            generation. This may include education in morality, for example
            learning how to act as loyal, honest and effective citizen. Specific
            articles are included in the Catechism of the Catholic Church
            relating to the education of children.Learning in a library
            Education may help and guide individuals from one class to other.
            Educated individuals and groups can do things like, help less
            educated people and encourage them to get educated.
          </chakra.p>
        </Box>
      </Grid>
      {/* <HStack w="95%" m="auto" mt="10px" mb="100px" spacing={40}>
       
      </HStack> */}
      <chakra.h1 w="100%" fontSize="3xl" textAlign="center" fontWeight="700">
        OUR TEAM
      </chakra.h1>
      <Divider />
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        // gap={16}
        w="95%"
        m="auto"
        mb="150px"
        // m="auto"
        // border="5px solid red"
      >
        <OurTeam
          image="https://avatars.githubusercontent.com/u/107460709?v=4"
          name="Akash Panda"
          role="Mern Developer"
          location="Siliguri, WestBengal"
          email="akashpanda1701@gmail.com"
          linkedIn="https://www.linkedin.com/in/akashpanda1701/"
        />
        <OurTeam
          image="https://avatars.githubusercontent.com/u/53786566?v=4"
          name="Abdul Quadir"
          role="Mern Developer"
          location="keonjhar, Odisha"
          email="abdulquadir77@yahoo.com"
          linkedIn="https://www.linkedin.com/in/abdul-quadir-aa0a60200/"
        />
        <OurTeam
          image="https://avatars.githubusercontent.com/u/106377969?v=4"
          name="Chandan Kumar"
          role="Mern Developer"
          location="Jamshedpur, Jharkhand"
          email="indspunk@gmail.com"
          linkedIn="https://www.linkedin.com/in/indspunk/"
        />
        <OurTeam
          image="https://avatars.githubusercontent.com/u/107462124?v=4"
          name="Zuhed Shaikh "
          role="Mern Developer"
          location="Sangli, Maharastra"
          email="zuhed95@gmail.com"
          linkedIn="https://www.linkedin.com/in/zuhedshaikh95/"
        />
      </Grid>
      <Footer />
    </Box>
  );
};

export default about;
