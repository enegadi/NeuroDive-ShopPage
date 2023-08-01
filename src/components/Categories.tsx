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
          <Text
            cursor="pointer"
            color="#575757"
            textAlign="center"
            fontFamily="Archivo"
            fontSize="16px"
            fontWeight="500"
            fontStyle="normal"
            lineHeight="36px"
            letterSpacing="1px"
            textTransform="capitalize"
          >
            {cat}
          </Text>
        </Link>
      ))}
    </HStack>
  );
}
