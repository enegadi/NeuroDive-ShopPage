import {
  Button,
  Center,
  Grid,
  GridItem,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import HeroImage from "../../assets/images/HeroImage.png";
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
        base: "160px 110px 100px 340px 50px 0px ",
        lg: "145px 95px 110px 60px ",
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
      <GridItem area={"heading"} ps={{ base: 5, lg: 0 }}>
        <Text
          color="#000"
          fontSize={{ lg: "32px", base: "26px" }}
          fontWeight="900"
          fontStyle="normal"
          lineHeight="normal"
          textTransform="uppercase"
        >
          Get access to all the ebooks all at once through our exclusive
          membership
        </Text>
      </GridItem>
      <GridItem textColor={"black"} area={"paragraph"} ps={{ base: 5, lg: 5 }}>
        <ul>
          <li>
            <Text
              fontSize="16px"
              fontWeight="400"
              fontStyle="normal"
              lineHeight="normal"
            >
              Pay what you want.
            </Text>
          </li>
          <li>
            <Text
              fontSize="16px"
              fontWeight="400"
              fontStyle="normal"
              lineHeight="normal"
            >
              Help us build the largest affordable ND resource library in the world 
            </Text>
          </li>
          <li>
            <Text
              fontSize="16px"
              fontWeight="400"
              fontStyle="normal"
              lineHeight="normal"
            >
              Get more for less
            </Text>
          </li>
          <li>
            <Text
              fontSize="16px"
              fontWeight="400"
              fontStyle="normal"
              lineHeight="normal"
            >
              Get new resources every month  
            </Text>
          </li>
          <li>
            <Text
              fontSize="16px"
              fontWeight="400"
              fontStyle="normal"
              lineHeight="normal"
            >
              Get access to our private community 
            </Text>
          </li>
        </ul>
      </GridItem>
      <GridItem
        pl={{ lg: "8" }}
        justifySelf={"center"}
        alignItems={"center"}
        area={"pic"}
      >
        <Image
          src={HeroImage}
          borderRadius={25}
          display={{ base: "none", lg: "block" }}
        />
        <Image
          src={HeroImage}
          borderRadius={25}
          display={{ base: "block", lg: "none" }}
        />
      </GridItem>
      <GridItem
        // pl="2"
        area={"card"}
        justifySelf={{ base: "center", lg: "normal" }}
      >
        <IconCardContainer />
      </GridItem>
      <GridItem area={"button-1"}>
        <Link href="https://neurodive.samcart.com/products/monthly-membership-full">
          <Button1 />
        </Link>
      </GridItem>
      <GridItem area={"button-2"} display={"none"}>
        <Button2 />
      </GridItem>
    </Grid>
  );
}
