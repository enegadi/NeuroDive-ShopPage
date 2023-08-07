import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import React from "react";
import Data from "../data/data";

export default function CategoriesMobile() {
  const categories = [
    "Bundles",
    "E-books",
    "Guides",
    "Planner-Trackers",
    "Workbook",
    "All",
  ];

  return (
    <VStack alignItems={"center"} justifyContent={"center"} w={"100%"}>
      {/* Use Link from react-scroll to scroll to the CategoryCard component */}
      {Data.map((cat) => (
        <Link
          key={cat.id}
          to={cat.divId} // Use the ID of the target component
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
            {cat.name}
          </Text>
        </Link>
      ))}
    </VStack>
  );
}
