import React from "react";
import { Box, Flex, chakra, Grid, Heading, Divider } from "@chakra-ui/react";
import NotesCard from "../components/NotesCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const notes = () => {
  return (
    <Box w="100%" m="auto">
      <Navbar />
      <Heading textAlign="center">Get Notes in pdf format</Heading>
      <Divider />
      <Box
        w={{ base: "90%", md: "90%", sm: "90%" }}
        m="auto"
        mt="50px"
        mb="70px"
      >
        <Grid
          templateColumns={{
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            sm: "repeat(1, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={16}
        >
          <NotesCard
            course={"HTML"}
            free={"Free"}
            getnow={"Get Now"}
            image={"https://cdn.worldvectorlogo.com/logos/html-1.svg"}
            notesLink="./notes/HTML5NotesForProfessionals.pdf"
          />
          <NotesCard
            course={"CSS"}
            free={"Free"}
            getnow={"Get Now"}
            image={"https://cdn.worldvectorlogo.com/logos/css-3.svg"}
            notesLink="./notes/CSSNotesForProfessionals.pdf"
          />
          <NotesCard
            course={"JavaScript"}
            free={"Free"}
            getnow={"Get Now"}
            image={"https://cdn.worldvectorlogo.com/logos/javascript-1.svg"}
            notesLink="./notes/JavaScriptNotesForProfessionals.pdf"
          />
          <NotesCard
            course={"React Js"}
            free={"Free"}
            getnow={"Get Now"}
            image={"https://cdn.worldvectorlogo.com/logos/react-2.svg"}
            notesLink="./notes/ReactJSNotesForProfessionals.pdf"
          />
          <NotesCard
            course={"Type Script"}
            free={"Free"}
            getnow={"Get Now"}
            image={"https://cdn.worldvectorlogo.com/logos/typescript.svg"}
            notesLink="./notes/TypeScriptNotesForProfessionals.pdf"
          />
          <NotesCard
            course={"Node JS"}
            free={"Free"}
            getnow={"Get Now"}
            image={"https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"}
            notesLink="./notes/NodeJSNotesForProfessionals.pdf"
          />
          <NotesCard
            course={"Java"}
            free={"Free"}
            getnow={"Get Now"}
            image={"https://cdn.worldvectorlogo.com/logos/java-14.svg"}
            notesLink="./notes/JavaNotesForProfessionals.pdf"
          />
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default notes;
