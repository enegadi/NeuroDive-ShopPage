import { HStack, Icon, VStack, Heading, Box, Text } from "@chakra-ui/react";

interface Props {
  text: string;
}

export default function FooterElement({ text }: Props) {
  return (
    <Box maxW={500} pt={4}>
      <HStack alignItems={"start"}>
        <Box
        pt={1}
        w={"25px"}
        h={"25pw"}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12.7946V10.1246C6 6.8146 8.35 5.4546 11.22 7.1146L13.53 8.4546L15.84 9.7946C18.71 11.4546 18.71 14.1646 15.84 15.8246L13.53 17.1646L11.22 18.5046C8.35 20.1346 6 18.7846 6 15.4646V12.7946Z"
              stroke="black"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Box>
        <Text
          color="#000"
          fontFamily="Archivo"
          fontSize={{ lg: "18px", base: "16px" }}
          fontWeight="700"
          fontStyle="normal"
          lineHeight="36px"
          letterSpacing="1px"
          textTransform="capitalize"
        >
          {text}
        </Text>
      </HStack>
    </Box>
  );
}
