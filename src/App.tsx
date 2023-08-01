import { useState } from "react";
import Navbar from "./components/Sections/Navbar";
import Hero from "./components/Sections/Hero";
import CategoryCard from "./components/Sections/CategoryCard";
import Footer from "./components/Sections/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* Add ID to the CategoryCard component */}
      <CategoryCard id="category-card" />
      <Footer />
    </>
  );
}

export default App;
