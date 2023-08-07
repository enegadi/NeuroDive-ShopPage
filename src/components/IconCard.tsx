import { Icon, Box, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  number: string;
  title: string;
  icon: IconType;
}

export default function IconCard({ number, title, icon }: Props) {
  return (
    <Box
      display="inline-flex"
      padding="8px 4px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="0px"
    >
      <Icon as={icon} h={"30px"} w={"30px"} />
      <Text
        fontSize="14px"
        fontWeight="600"
        fontStyle="normal"
        lineHeight="32px"
        textTransform="uppercase"
      >
        {number}+
      </Text>
      <Text
        fontSize="8px"
        fontWeight="600"
        fontStyle="normal"
        lineHeight="32px"
      >
        {title}
      </Text>
    </Box>
  );
}
