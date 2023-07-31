import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Book from "../assets/images/BookImage.png";
export default function BookCard() {
  return (
    <VStack justifyContent={"center"}>
      <Image src={Book} />
      <HStack justifyContent={"center"}>
        <Icon />
        <Icon />
        <Icon />
        <Icon />
        <Icon />
      </HStack>
      <Text fontSize={"21px"}>EVERYTHING BUNDLE</Text>
      <HStack>
        <Text textDecor="line-through" textColor={"red"}>
          $89.99
        </Text>
        <Text>$59.99</Text>
      </HStack>
      <Button colorScheme="teal" borderRadius={"20px"} maxW={"150px"} w={"100%"}>Learn More</Button>
    </VStack>
  );
}
