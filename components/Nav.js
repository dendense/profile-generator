import * as React from "react";

import {
  Flex,
  Box,
  Link,
  Heading,
  Button,
  ButtonGroup,
  Spacer,
} from "@chakra-ui/react";

import Data from "../json/data.json";

const Nav = () => (
  <Flex minWidth="max-content" alignItems="center" gap="2">
    <Box p="2">
      <Heading size="md">{Data.bio.sitename}</Heading>
    </Box>
    <Spacer />
    <ButtonGroup gap="2">
      <Link
        href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdendense%2Fprofile-generator"
        target="_blank"
        isExternal
      >
        <Button colorScheme="teal">Make Yours</Button>
      </Link>
    </ButtonGroup>
  </Flex>
);

export default Nav;
