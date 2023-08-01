import {
  Box,
  HStack,
  Heading,
  Icon,
  VStack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";
import BookCard from "../BookCard";

export default function CategoryCard({ id }: { id: string }) {
  return (
    <Box
      id={id}
      backgroundColor={"white"}
      m={{
        lg: 8,
        base: 4,
      }}
      borderRadius={25}
      p={{
        lg: 10,
        base: 6,
      }}
    >
      <HStack
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"start"}
      >
        <VStack justify={"start"} alignItems={"start"}>
          <HStack>
            <Icon />
            <Heading>Bundles</Heading>
          </HStack>
          <Text maxW={{ lg: "700px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            venenatis sapien mauris, in aliquet risus ultricies consequat.
          </Text>
        </VStack>

        <HStack display={{ lg: "block", base: "none" }}>
          <Text>More</Text>
          <Icon />
        </HStack>
      </HStack>

      <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={6} padding="10px">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </SimpleGrid>
    </Box>
  );
}
