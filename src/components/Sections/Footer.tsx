import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Bg from "../../assets/images/footerBg.png";
import BgBase from "../../assets/images/footerBgBase.png";
import footerPic from "../../assets/images/footerPic.png";
import footerPicBase from "../../assets/images/footerPicBase.png";
import FooterElement from "../FooterElement";

export default function Footer() {
  return (
    <Box>
      <Box
        backgroundColor={"white"}
        backgroundImage={{ lg: Bg, base: BgBase }} // Replace with the path to your image
        backgroundPosition={"left bottom"} // Align the image to the left bottom side
        backgroundRepeat="no-repeat" // Prevent the image from repeating
        //   h={300}
        m={{
          lg: 8,
          base: 4,
        }}
        borderRadius={25}
        p={{
          lg: 10,
          base: 6,
        }}
        mt={{ lg: 130, base: 150 }}
        pt={{ base: 150 }}
        pb={{ base: 100 }}
      >
        <Box
          display={"flex"}
          flexDir={{ lg: "row", base: "column" }}
          alignItems={"center"}
        >
          <Image
            display={{ lg: "block", base: "none" }}
            src={footerPic}
            position="absolute" // Position the image absolutely within the parent Box
            left={0} // Align the image to the left
            bottom={0} // Align the image to the bottom
            zIndex={1}
          />
          <Image
            display={{ lg: "none", base: "Block" }}
            src={footerPicBase}
            position="absolute" // Position the image absolutely within the parent Box
            left={25} // Align the image to the left
            bottom={400} // Align the image to the bottom
            zIndex={1}
          />
          <Box w={"50%"} />
          <Box display={"flex"} flexDir={"column"} gap={4}>
            <FooterElement />
            <FooterElement />
            <FooterElement />
            <Box display={"flex"} flexDir={"row"} gap={8}>
              <Button
                colorScheme="teal"
                borderRadius={"20px"}
                maxW={"150px"}
                w={"100%"}
              >
                Subscribe
              </Button>
              <Button
                colorScheme="teal"
                variant="outline"
                borderRadius={"20px"}
                maxW={"150px"}
                w={"100%"}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
