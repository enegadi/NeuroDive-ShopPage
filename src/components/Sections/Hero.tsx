import { Button, Center, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import HeroLg from "../../assets/images/Hero-lg.png";
import HeroBase from "../../assets/images/Hero-base.png";
import IconCardContainer from "../IconCardContainer";
import Button1 from "../Button1";
import Button2 from "../Button2";

export default function Hero() {
  return (
    <Grid
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
        base: "80px 60px 100px 440px 50px 60px ",
        lg: "105px 45px 110px 60px ",
      }}
      gridTemplateColumns={{
        base: "1fr 1fr 1fr 1fr",
        lg: "110px 110px 1fr 1fr 200px 200px",
      }}
      gap="1"
      // fontWeight="bold"
      bg={"white"}
      m={{
        lg: 8,
        base: 4,
      }}
      borderRadius={25}
      p={{
        lg: 8,
        base: 8,
      }}
    >
      <GridItem area={"heading"}>
        <Text
          color="#000"
          fontSize={{ lg: "48px", base: "31px" }}
          fontWeight="900"
          fontStyle="normal"
          lineHeight="normal"
          textTransform="uppercase"
        >
          Get Our Latest Products
        </Text>
      </GridItem>
      <GridItem area={"paragraph"}>
        <Text
          fontSize="16px"
          fontWeight="400"
          fontStyle="normal"
          lineHeight="normal"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          venenatis sapien mauris, in aliquet risus ultricies consequat.
        </Text>
      </GridItem>
      <GridItem
        pl={{lg :"8"}}
        justifySelf={"center"}
        alignItems={"center"}
        area={"pic"}
      >
        <Image src={HeroLg} display={{ base: "none", lg: "block" }} />
        <Image src={HeroBase} display={{ base: "block", lg: "none" }} />
      </GridItem>
      <GridItem
        // pl="2"
        area={"card"}
        justifySelf={{base: "center"}}
      >
        <IconCardContainer />
      </GridItem>
      <GridItem area={"button-1"}>
        <Button1 />
      </GridItem>
      <GridItem area={"button-2"}>
        <Button2 />
      </GridItem>
    </Grid>
  );
}
