import * as React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

import Layout from "../components/Layout";

export default function Index() {
  return (
    <Layout title="Profile Generator" description="Profile Generator">
      <Box borderWidth="1px" borderRadius="lg" mt="3">
        <SimpleGrid minChildWidth="200px" spacing="10px" padding="3">
          <Box borderRadius="lg" bg="tomato" height="80px"></Box>
          <Box borderRadius="lg" bg="tomato" height="80px"></Box>
          <Box borderRadius="lg" bg="tomato" height="80px"></Box>
          <Box borderRadius="lg" bg="tomato" height="80px"></Box>
          <Box borderRadius="lg" bg="tomato" height="80px"></Box>
          <Box borderRadius="lg" bg="tomato" height="80px"></Box>
        </SimpleGrid>
      </Box>
    </Layout>
  );
}
