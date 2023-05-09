import React from "react";
import { Box } from "@chakra-ui/react";
import About from "../components/About/About";
import Title from "../components/Title/Title";
import VideoBg from "../components/VideoBg/VideoBg";
import Cards from "../components/Cards/Cards";
//TODO: add animation

export default function Main() {
  return (
    <>
      <VideoBg />
      <Title />
      <Box background="linear-gradient(180deg, #81CDF3 0%, #CEE2D6 43.74%)">
        <About />
        <Cards />
      </Box>
    </>
  );
}
