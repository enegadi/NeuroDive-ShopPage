import { Box, Center, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import React from "react";

export default function Categories() {
  const categories = [
    "bundles",
    "e-books",
    "guides",
    "Planner-Trackers",
    "Workbook",
    "All",
  ];

  return (
    <HStack justifyContent="center" gap={6}>
      {/* Use Link from react-scroll to scroll to the CategoryCard component */}
      {categories.map((cat) => (
        <Link
          key={cat}
          to="category-card" // Use the ID of the target component
          spy={true}
          smooth={true}
          duration={500}
        >
          <Text cursor="pointer">{cat}</Text>
        </Link>
      ))}
    </HStack>
  );
}
