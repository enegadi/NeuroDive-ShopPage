import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
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
          lg: 5,
          base: 6,
        }}
        // mt={{ lg: 130, base: 150 }}
        // pt={{ base: 150 }}
        pb={{ base: 100 }}
      >
        <Box
          display={"flex"}
          flexDir={{ lg: "row", base: "column" }}
          alignItems={"center"}
        >
          <Image
            display={{ lg: "none", base: "none" }}
            src={footerPic}
            position="absolute" // Position the image absolutely within the parent Box
            left={"125px"} // Align the image to the left
            bottom={"90px"} // Align the image to the bottom
            zIndex={1}
          />
          <Image
            display={{ lg: "none", base: "none" }}
            src={footerPicBase}
            position="absolute" // Position the image absolutely within the parent Box
            left={25} // Align the image to the left
            bottom={400} // Align the image to the bottom
            zIndex={1}
          />
          <Box
          //  w={"50%"}
          >
            <Image
              // display={{ lg: "block", base: "block" }}
              src={footerPic}
              zIndex={1}
            />
          </Box>
          <Box display={"flex"} flexDir={"column"} gap={4}>
            <FooterElement text={"Get all you need to thrive with ADHD!"} />
            <FooterElement
              text={"Manage your time, energy and attention better"}
            />
            <FooterElement
              text={"Improve your focus, motivation and confidence"}
            />
            <Box
              display={"flex"}
              flexDir={{ lg: "row", base: "column" }}
              gap={3}
            >
              <Link
                href={
                  "https://neurodive.samcart.com/products/monthly-membership-full"
                }
                style={{ textDecoration: 'none' }}              >
                <Button
                  _hover={{ bg: "#30CAC5" }}
                  borderRadius="50px"
                  background="#30CAC5"
                  display="flex"
                  width={{ base: "100%", lg: "220px" }}
                  padding="1.5px 0px"
                  justifyContent="center"
                  alignItems="center"
                  color="#FFF"
                  textAlign="center"
                  fontFamily="Archivo"
                  fontSize="18px"
                  fontWeight="500"
                  fontStyle="normal"
                  lineHeight="32px"
                >
                  Subscribe
                </Button>
              </Link>
              <Link href="https://neurodive.samcart.com/products/monthly-membership-full">
                <Button
                  _hover={{ bg: "white" }}
                  display="flex"
                  width={{ base: "100%", lg: "220px" }}
                  padding="1.5px 95.5px"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="50px"
                  border="2px solid #30CAC5"
                  color="#30CAC5"
                  textAlign="center"
                  fontFamily="Archivo"
                  fontSize="18px"
                  fontWeight="500"
                  fontStyle="normal"
                  lineHeight="32px"
                  bg={"white"}
                >
                  <Text>Learn More</Text>   
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
