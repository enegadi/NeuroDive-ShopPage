import { Button } from "@chakra-ui/react";

export default function Button1() {
  return (
    <Button
      _hover={{ bg: "#30CAC5" }}
      width={{ lg: "220px", base: "100%" }}
      height="47px"
      padding="7.5px 68.5px"
      borderRadius="100px"
      bg="#30CAC5"
      color="white"
      fontSize="14px"
      fontWeight="600"
      fontStyle="normal"
      lineHeight="32px"
      textTransform="uppercase"
    >
      Subscribe
    </Button>
  );
}
