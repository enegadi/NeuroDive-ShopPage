import React, { useRef, useState } from "react";
import {
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  Text,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import Data from "../data/data";
const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [foundBooks, setFoundBooks] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (ref.current) {
      const searchTerm = ref.current.value.trim().toLowerCase();
      let matchingBooks: any[] = [];

      Data.forEach((category) => {
        category.books.forEach((book) => {
          if (book.name.toLowerCase().includes(searchTerm)) {
            matchingBooks.push(book);
          }
        });
      });

      setFoundBooks(matchingBooks);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setFoundBooks([]);
    setIsModalOpen(false);
  };

  return (
    <form onSubmit={handleSearch}>
      <HStack justifyContent={"Center"}>
        <InputGroup maxW={"600px"}>
          <InputLeftElement children={<BsSearch />} />
          <Input
            ref={ref}
            borderRadius={20}
            placeholder="Book or Author"
            variant="filled"
          />
        </InputGroup>
      </HStack>
      <Modal isOpen={isModalOpen} onClose={closeModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Found Books</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {foundBooks.map((book) => (
              <Link
                key={book.id}
                href={book.link}
                style={{ textDecoration: "none" }}
              >
                <Box display="flex" alignItems="center" mb={4}>
                  <Image
                    h={"100px"}
                    w={"75px"}
                    borderRadius={10}
                    src={book.photo_link}
                    alt={book.name}
                    mr={4}
                  />
                  <Text fontSize={19} fontFamily="Archivo Narrow">
                    {book.name}
                  </Text>
                </Box>
              </Link>
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </form>
  );
};

export default SearchInput;
