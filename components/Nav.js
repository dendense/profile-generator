import * as React from "react";

import {
  Flex,
  Box,
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
      <Button colorScheme="teal">Create Yours</Button>
    </ButtonGroup>
  </Flex>
);

export default Nav;
