import { useState } from "react";
import Navbar from "./components/Sections/Navbar";
import Hero from "./components/Sections/Hero";
import CategoryCard from "./components/Sections/CategoryCard";
import Footer from "./components/Sections/Footer";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box maxW={"1036px"} display={"flex"} flexDir={"column"} mx={"auto"}>
      <Navbar />
      <Hero />
      {/* Add ID to the CategoryCard component */}
      <CategoryCard id="category-card" />
      <Footer />
    </Box>
  );
}

export default App;
