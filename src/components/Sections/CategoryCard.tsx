import {
  Box,
  HStack,
  Heading,
  VStack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import BookCard from "../BookCard";
import bundles from "../../data/bundles";
import Data from "../../data/data";

export default function CategoryCard() {
  return (
    <Box>
      {Data.map((cat) => (
        <Box
          id={cat.divId}
          backgroundColor={"white"}
          m={{
            lg: 8,
            base: 4,
          }}
          borderRadius={25}
          p={{
            lg: 10,
            base: 6,
          }}
        >
          <HStack
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"start"}
          >
            <VStack justify={"start"} alignItems={"start"}>
              <HStack alignSelf={{ base: "center", lg: "start" }}>
                <Box display={{ lg: "block", base: "none" }}>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.16992 7.57617L11.9999 12.6862L20.7699 7.60617M11.9999 21.7462V12.6762"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.93062 2.61602L4.59063 5.57602C3.38063 6.24602 2.39062 7.92602 2.39062 9.30602V14.956C2.39062 16.336 3.38063 18.016 4.59063 18.686L9.93062 21.656C11.0706 22.286 12.9406 22.286 14.0806 21.656L19.4206 18.686C20.6306 18.016 21.6206 16.336 21.6206 14.956V9.30602C21.6206 7.92602 20.6306 6.24602 19.4206 5.57602L14.0806 2.60602C12.9306 1.97602 11.0706 1.97602 9.93062 2.61602Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Box>
                <Box display={{ lg: "none", base: "block" }}>
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.16992 7.57617L11.9999 12.6862L20.7699 7.60617M11.9999 21.7462V12.6762"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.93062 2.61602L4.59063 5.57602C3.38063 6.24602 2.39062 7.92602 2.39062 9.30602V14.956C2.39062 16.336 3.38063 18.016 4.59063 18.686L9.93062 21.656C11.0706 22.286 12.9406 22.286 14.0806 21.656L19.4206 18.686C20.6306 18.016 21.6206 16.336 21.6206 14.956V9.30602C21.6206 7.92602 20.6306 6.24602 19.4206 5.57602L14.0806 2.60602C12.9306 1.97602 11.0706 1.97602 9.93062 2.61602Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Box>
                <Heading
                  fontSize={{ lg: "21px", base: "31" }}
                  fontWeight="700"
                  fontStyle="normal"
                  lineHeight="normal"
                >
                  {cat.name}
                </Heading>
              </HStack>
              <Text
                maxW={{ lg: "506.086px" }}
                color="#4B4B4B"
                fontSize="14px"
                fontWeight="400"
                fontStyle="normal"
                lineHeight="normal"
                align={{ base: "center", lg: "start" }}
              >
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                venenatis sapien mauris, in aliquet risus ultricies consequat. */}
              </Text>
            </VStack>

            <HStack display={{ base: "none", lg: "flex" }}>
              <Text
                color="#30CAC5"
                fontSize="21px"
                fontWeight="700"
                fontStyle="normal"
                lineHeight="normal"
              >
                More
              </Text>
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.85352 13.2807L11.2002 8.93404C11.7135 8.4207 11.7135 7.5807 11.2002 7.06737L6.85352 2.7207"
                  stroke="#30CAC5"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </HStack>
          </HStack>

          <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={8} padding="10px">
            {cat.books.map((b) => (
              <BookCard
                key={b.id}
                link={b.link}
                id={b.id}
                rate={b.rate}
                photo_link={b.photo_link}
                name={b.name}
                old_price={b.old_price}
                current_price={b.current_price}
              />
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </Box>
  );
}
