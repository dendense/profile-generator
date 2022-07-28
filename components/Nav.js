import * as React from "react";

import {
  Flex,
  Box,
  Heading,
  Button,
  ButtonGroup,
  Spacer,
} from "@chakra-ui/react";

const Nav = () => (
  <Flex minWidth="max-content" alignItems="center" gap="2">
    <Box p="2">
      <Heading size="md">PROFILER</Heading>
    </Box>
    <Spacer />
    <ButtonGroup gap="2">
      <Button colorScheme="teal">Create Yours</Button>
    </ButtonGroup>
  </Flex>
);

export default Nav;
