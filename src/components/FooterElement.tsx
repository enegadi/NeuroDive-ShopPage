import { HStack, Icon, VStack, Heading, Box, Text } from "@chakra-ui/react";
export default function FooterElement() {
  return (
    <Box>
      <HStack>
        <Icon />
        <VStack alignItems={"start"} spacing={0}>
          <Heading
            color="#000" // Text color
            fontSize="22px" // Font size
            fontStyle="normal" // Font style (normal, italic, etc.)
            fontWeight="700" // Font weight (normal, bold, etc.)
            lineHeight="36px" // Line height (163.636%)
            letterSpacing="1px" // Letter spacing
            textTransform="capitalize"
          >
            Lorem ipsum dolor sit amet
          </Heading>
          <Text
            color="#575757" // Text color
            fontSize="16px" // Font size
            fontStyle="normal" // Font style (normal, italic, etc.)
            fontWeight="400" // Font weight (normal, bold, etc.)
            lineHeight="36px" // Line height (225%)
            letterSpacing="1px" // Letter spacing
            textTransform="capitalize"
          >
            Lorem ipsum dolor sit amet, consectetur
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}
