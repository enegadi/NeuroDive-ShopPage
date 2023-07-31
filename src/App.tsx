import { useState } from "react";
import Navbar from "./components/Sections/Navbar";
import Hero from "./components/Sections/Hero";
import CategoryCard from "./components/Sections/CategoryCard";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryCard/>
    </>
  );
}

export default App;
