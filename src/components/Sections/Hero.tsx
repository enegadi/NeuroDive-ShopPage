import { Button, Center, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import HeroLg from "../../assets/images/Hero-lg.png";
import HeroBase from "../../assets/images/Hero-base.png";
import IconCard from "../IconCard";

export default function Hero() {
  return (
    <Grid
      textColor={"gray.900"}
      gridGap={1}
      templateAreas={{
        base: `"heading heading heading heading"
                "paragraph paragraph paragraph paragraph"
                "card card card card"
                "pic pic pic pic"
                "button-1 button-1 button-1 button-1"
                "button-2 button-2 button-2 button-2"`,
        lg: `"heading heading heading heading pic pic"
            "paragraph paragraph paragraph paragraph pic pic"
            "card card card card pic pic"
            "button-1 button-1 button-2 button-2 pic pic  "`,
      }}
      gridTemplateRows={{
        base: "90px 100px 100px 440px 50px 60px ",
        lg: "100px 100px 100px 60px ",
      }}
      gridTemplateColumns={{
        base: "1fr 1fr 1fr 1fr",
        lg: "1fr 1fr 1fr 1fr 1fr 1fr",
      }}
      //   h="200px"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
      bg={"white"}
      m={{
        lg: 8,
        base: 4,
      }}
      borderRadius={25}
      p={{
        lg: 5,
        base: 3,
      }}
    >
      <GridItem
        pl={10}
        //   bg="orange.300"
        area={"heading"}
        paddingBottom={{ base: 5 }}
      >
        <Text
          fontSize={{
            base: "30px",
            lg: "48px",
          }}
          fontWeight={"extrabold"}
        >
          Get Our Latest Products
        </Text>
      </GridItem>
      <GridItem
        pl={10}
        justifySelf={"center"}
        //   bg="pink.300"
        area={"paragraph"}
      >
        <Text fontSize={"16px"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          venenatis sapien mauris, in aliquet risus ultricies consequat.
        </Text>
      </GridItem>
      <GridItem
        pl="2"
        justifySelf={"center"}
        alignItems={"center"}
        //   bg="green.300"
        area={"pic"}
      >
        <Image src={HeroLg} display={{ base: "none", lg: "block" }} />
        <Image src={HeroBase} display={{ base: "block", lg: "none" }} />
      </GridItem>
      <GridItem
        pl="2"
        //   bg="blue.300"
        area={"card"}
      >
        <IconCard />
      </GridItem>
      <GridItem
        mx={{ base: 3 }}
        //   bg="blue.300"
        area={"button-1"}
      >
        <Button
          colorScheme="teal"
          maxW={{ lg: "300px" }}
          w={"100%"}
          borderRadius={"25px"}
          h={"50px"}
        >
          Subscribe
        </Button>
      </GridItem>
      <GridItem
        mx={{ base: 3 }} //   bg="blue.300"
        area={"button-2"}
      >
        <Button
          colorScheme="teal"
          maxW={{ lg: 300 }}
          w={"100%"}
          borderRadius={"25px"}
          h={"50px"}
          variant="outline"
        >
          Get the latest one now
        </Button>
      </GridItem>
    </Grid>
  );
}
