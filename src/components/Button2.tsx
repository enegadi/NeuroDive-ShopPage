import { Button } from "@chakra-ui/react";

export default function Button2() {
  return (
    <Button
      display="flex"
      width={{ lg: "220px", base: "100%" }}
      height="47px"
      padding="7.5px 16px 7.5px 17px"
      justifyContent="center"
      alignItems="center"
      flexShrink="0"
      borderRadius="100px"
      borderWidth="2px"
      borderColor="#30CAC5"
      color="#30CAC5"
      textAlign="center"
      fontFamily="Archivo"
      fontSize="14px"
      fontWeight="600"
      fontStyle="normal"
      lineHeight="32px"
      textTransform="uppercase"
      bg="white"
    >
      Get the latest one now
    </Button>
  );
}
