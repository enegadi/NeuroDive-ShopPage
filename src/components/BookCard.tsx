import { Button, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import Rate from "./Rate";

interface Props {
  id: number;
  name: string;
  photo_link: string;
  rate: number;
  old_price: number | 0;
  current_price: number;
  link: string;
}

export default function BookCard({
  id,
  photo_link,
  name,
  rate,
  old_price,
  current_price,
  link,
}: Props) {
  return (
    <VStack justifyContent={"center"}>
      <Image src={photo_link} />
      <Rate rate={rate} />
      <Text
        color="#000"
        textAlign="center"
        fontFamily="Archivo Narrow"
        fontSize="21px"
        fontWeight="700"
        fontStyle="normal"
        lineHeight="32px"
      >
        {name}
      </Text>
      <HStack>
        <Text
          color="#F48475"
          textAlign="center"
          fontFamily="Archivo Black"
          fontSize="21px"
          fontWeight="400"
          fontStyle="normal"
          lineHeight="32px"
          textDecoration="line-through"
        >
          ${old_price}
        </Text>
        <Text
          color="#000"
          textAlign="center"
          fontFamily="Archivo"
          fontSize="21px"
          fontWeight="400"
          fontStyle="normal"
          lineHeight="32px"
        >
          ${current_price}
        </Text>
      </HStack>
      <Button
        display="inline-flex"
        padding={{
          lg: "1.5px 64.5px 1.5px 63.5px",
          base: "1.5px 23.5px 1.5px 23.5px",
        }}
        justifyContent="center"
        alignItems="center"
        borderRadius="50px"
        background="#30CAC5"
        color="#FFF"
        textAlign="center"
        fontFamily="Archivo"
        fontSize="18px"
        fontWeight="500"
        fontStyle="normal"
        lineHeight="32px"
      >
        <Link href={link}>Learn More</Link>
      </Button>
    </VStack>
  );
}
