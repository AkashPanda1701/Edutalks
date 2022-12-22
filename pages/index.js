import Head from "next/head";
import { Inter } from "@next/font/google";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Calltoaction from "../components/Calltoaction";
import CourseSlider from "../components/CourseSlider";
import AppShowcase from "../components/AppShowcase";
import Features from "../components/Features";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Navbar />
        <Header />
        <Calltoaction />
        <CourseSlider />
        <Features />
        <AppShowcase />
        <Pricing />
        <Footer />
      </Box>
    </>
  );
}
