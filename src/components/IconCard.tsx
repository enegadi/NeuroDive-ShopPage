import { Icon, Box, Text } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";

export default function IconCard() {
  return (
    <Box
      display="inline-flex"
      padding="8px 4px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      // gap="14px"
    >
      <Icon as={FaEnvelope} h={"30px"} w={"30px"} />
      <Text
        fontSize="14px"
        fontWeight="600"
        fontStyle="normal"
        lineHeight="32px"
        textTransform="uppercase"
      >
        30 000
      </Text>
      <Text
        fontSize="8px"
        fontWeight="600"
        fontStyle="normal"
        lineHeight="32px"
      >
        Subscribers
      </Text>
    </Box>
  );
}
