import { Box, Center, HStack, Text } from "@chakra-ui/react";
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
    <HStack justifyContent={"Center"} gap={6}>
      {categories.map((cat) => (
        <Text>{cat}</Text>
      ))}
    </HStack>
  );
}
