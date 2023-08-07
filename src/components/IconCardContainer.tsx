import { Box, Center, HStack, Icon, Text } from "@chakra-ui/react";
import { HiUserGroup } from "react-icons/hi";
import { FaMoneyBillWave } from "react-icons/fa";
import IconCard from "./IconCard";

export default function IconCardContainer() {
  return (
    <HStack
      //  pl={6}
      display="inline-flex"
      alignItems="center"
      gap="33px"
    >
      <IconCard number={"7000"} title="Members" icon={HiUserGroup} />
      <IconCard number="5000" title="Value" icon={FaMoneyBillWave} />
    </HStack>
  );
}
