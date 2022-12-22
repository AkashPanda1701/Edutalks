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
            image={
              "https://media.istockphoto.com/id/1413514774/photo/stylized-3d-html-icon-design.jpg?b=1&s=170667a&w=0&k=20&c=OrkPbETxWlQ4FQSfTku07zULRenQ6KnxkGM4nU5H_Kk="
            }
            notesLink="./notes/HTML5NotesForProfessionals.pdf"
          />
          <NotesCard
            course={"CSS"}
            free={"Free"}
            getnow={"Get Now"}
            image={
              "https://media.istockphoto.com/id/1413514596/photo/stylized-3d-css-icon-design.jpg?b=1&s=170667a&w=0&k=20&c=Y2wiMC1eKiraLPz-NZmIhyk-ZJfr_FxUHXZ_3lmmLlg="
            }
            notesLink="./notes/CSSNotesForProfessionals.pdf"
          />
          <NotesCard
            course={"JavaScript"}
            free={"Free"}
            getnow={"Get Now"}
            image={
              "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
            }
            notesLink="./notes/JavaScriptNotesForProfessionals.pdf"
          />
          <NotesCard
            course={"React Js"}
            free={"Free"}
            getnow={"Get Now"}
            image={
              "https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png"
            }
            notesLink="./notes/ReactJSNotesForProfessionals.pdf"
          />
          <NotesCard
            course={"Type Script"}
            free={"Free"}
            getnow={"Get Now"}
            image={
              "https://miro.medium.com/max/800/1*yWUgGAQuiROzilwG_tEU2Q.png"
            }
            notesLink="./notes/TypeScriptNotesForProfessionals.pdf"
          />
          <NotesCard
            course={"Node JS"}
            free={"Free"}
            getnow={"Get Now"}
            image={
              "https://cdn.iconscout.com/icon/free/png-256/node-js-3550841-2970426.png"
            }
            notesLink="./notes/NodeJSNotesForProfessionals.pdf"
          />
          <NotesCard
            course={"Java"}
            free={"Free"}
            getnow={"Get Now"}
            image={"https://cdn-icons-png.flaticon.com/512/226/226777.png"}
            notesLink="./notes/JavaNotesForProfessionals.pdf"
          />
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default notes;
