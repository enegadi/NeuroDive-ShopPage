import { Box, Center, HStack, Icon, Text } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";

export default function IconCard() {
  return (
    <HStack justifyContent={"space-around"} maxW={"500px"} mx={"auto"} >
      <Box justifyContent={"center"} alignItems={"center"}>
        <Icon as={FaEnvelope} h={"30px"} w={"30px"} />
        <Text fontSize={"14px"}>30 000</Text>
        <Text fontSize={"8px"}>Subscribers</Text>
      </Box>
      <Box justifyContent={"center"} alignItems={"center"}>
        <Icon as={FaEnvelope} h={"30px"} w={"30px"} />
        <Text fontSize={"14px"}>30 000</Text>
        <Text fontSize={"8px"}>Subscribers</Text>
      </Box>
      <Box justifyContent={"center"} alignItems={"center"}>
        <Icon as={FaEnvelope} h={"30px"} w={"30px"} />
        <Text fontSize={"14px"}>30 000</Text>
        <Text fontSize={"8px"}>Subscribers</Text>
      </Box>
      <Box justifyContent={"center"} alignItems={"center"}>
        <Icon as={FaEnvelope} h={"30px"} w={"30px"} />
        <Text fontSize={"14px"}>30 000</Text>
        <Text fontSize={"8px"}>Subscribers</Text>
      </Box>
    </HStack>
  );
}
