import {
  Box,
  Center,
  Grid,
  GridItem,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import Logo from "../../assets/images/logo.png";
import SearchInput from "../SearchInput";
import Categories from "../Categories";
import Menu from "../../assets/images/menu.png";
import Close from "../../assets/images/close.png";
import { useState } from "react";
import CategoriesMobile from "../CategoriesMobile";

export default function Navbar() {
  const [isopen, setIsopen] = useState(false);
  return (
    <Box
      backgroundColor={"white"}
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
      <Grid
        justifyContent={{ base: "space-between" }}
        templateAreas={{
          lg: `"logo search-bar search-bar search-bar search-bar search-bar login-logout"
               "logo categories categories categories categories categories login-logout"`,
          base: `"logo login-logout"`,
        }}
        gridTemplateRows={{ lg: "50px 20px", base: "50px" }}
        gridTemplateColumns={{ lg: "100px 1fr 100px", base: "80px 50px" }} // Change the second value to "1fr"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem
          pl="2"
          // bg="orange.300"
          gridArea="logo"
        >
          <Link href="https://neurodive.co/">
            <Image src={Logo} />
          </Link>
        </GridItem>
        <GridItem
          justifyContent={"center"}
          alignItems={"center"}
          pl="2"
          gridArea="search-bar"
          display={{ base: "none", lg: "block" }}
        >
          <SearchInput />
        </GridItem>

        <GridItem
          pl="2"
          //   bg="green.300"
          gridArea="login-logout"
          pt={3}
          display={{ base: "none", lg: "inline" }}
        >
          <HStack fontFamily={"Archivo"} fontSize={"14px"} me={10}>
            <Link
              href="https://neurodive.samcart.com/products/monthly-membership-full"
              style={{ textDecoration: "none" }}
            >
              <Text
                color="#000"
                fontFamily="Archivo"
                fontSize="12px"
                fontWeight="600"
                fontStyle="normal"
                lineHeight="normal"
              >
                Sign Up
              </Text>
            </Link>
          </HStack>
        </GridItem>

        <GridItem
          justifyContent={"center"}
          alignItems={"flex-end"}
          pl="2"
          //   bg="green.300"
          gridArea="login-logout"
          pt={3}
          display={{ base: "block", lg: "none" }}
        >
          <Image
            src={isopen ? Close : Menu}
            onClick={() => setIsopen(!isopen)}
          ></Image>
        </GridItem>

        <GridItem
          pl="2"
          //   bg="blue.300"
          gridArea="categories"
          display={{ base: "none", lg: "block" }}
        >
          <Categories />
        </GridItem>
      </Grid>
      {isopen && <CategoriesMobile />}
    </Box>
  );
}
