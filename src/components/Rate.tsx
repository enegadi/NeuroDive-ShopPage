import { HStack } from "@chakra-ui/react";
import BlackStar from "./BlackStar";
import WhiteStar from "./WhiteStar";
interface Props {
  rate: number;
}

export default function Rate({ rate }: Props) {
  if (rate == 0)
    return (
      <HStack justifyContent={"center"}>
        <WhiteStar />
        <WhiteStar />
        <WhiteStar />
        <WhiteStar />
        <WhiteStar />
      </HStack>
    );
  if (rate == 1)
    return (
      <HStack justifyContent={"center"}>
        <BlackStar />
        <WhiteStar />
        <WhiteStar />
        <WhiteStar />
        <WhiteStar />
      </HStack>
    );
  if (rate == 2)
    return (
      <HStack justifyContent={"center"}>
        <BlackStar />
        <BlackStar />
        <WhiteStar />
        <WhiteStar />
        <WhiteStar />
      </HStack>
    );
  if (rate == 3)
    return (
      <HStack justifyContent={"center"}>
        <BlackStar />
        <BlackStar />
        <BlackStar />
        <WhiteStar />
        <WhiteStar />
      </HStack>
    );
  if (rate == 4)
    return (
      <HStack justifyContent={"center"}>
        <BlackStar />
        <BlackStar />
        <BlackStar />
        <BlackStar />
        <WhiteStar />
      </HStack>
    );
  if (rate == 5)
    return (
      <HStack justifyContent={"center"}>
        <BlackStar />
        <BlackStar />
        <BlackStar />
        <BlackStar />
        <BlackStar />
      </HStack>
    );
}
