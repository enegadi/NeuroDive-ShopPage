import { HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          console.log("searchInput");
        }
      }}
    >
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
    </form>
  );
};

export default SearchInput;
