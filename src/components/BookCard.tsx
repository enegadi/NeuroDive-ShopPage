import {
  Box,
  Button,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
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
      {/* 193.983×274.4 */}
      <Image
        w={{ lg: "275px", base: "100%" }}
        h={{ lg: "325.4px", base: "200px" }}
        src={photo_link}
        objectFit={"cover"}
        borderRadius={10}
      />
      <Rate rate={rate} />
      <Text
        color="#000"
        textAlign="center"
        fontFamily="Archivo Narrow"
        fontSize={{ lg: "21px", base: "16px" }}
        fontWeight="700"
        fontStyle="normal"
        lineHeight={{ lg: "32px", base: "normal" }}
        h={{ lg: "80px", base: "75px" }}
      >
        {name}
      </Text>
      <HStack>
        {old_price ? (
          <Text
            color="#F48475"
            textAlign="center"
            fontFamily="Archivo Narrow"
            fontSize={{ lg: "21px", base: "16px" }}
            fontWeight="700"
            fontStyle="normal"
            lineHeight={{ lg: "32px", base: "normal" }}
            textDecoration="line-through"
          >
            ${old_price}
          </Text>
        ) : (
          <Box />
        )}
        <Text
          color="#000"
          textAlign="center"
          fontFamily="Archivo"
          fontSize={{ lg: "21px", base: "16px" }}
          fontWeight="700"
          fontStyle="normal"
          lineHeight="32px"
        >
          ${current_price}
        </Text>
      </HStack>
      <Link href={link}>
        <Button
          _hover={{ bg: "#30CAC5" }}
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
          Learn More
        </Button>
      </Link>
    </VStack>
  );
}
