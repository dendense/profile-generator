import * as React from "react";
import { Box, Image, Link, Text, Button } from "@chakra-ui/react";

import Profile from "../components/Profile";
import Social from "../components/Social";
import Layout from "../components/Layout";

export default function Index() {
  return (
    <Layout title="Profile Generator" description="Profile Generator">
      <Box borderWidth="1px" borderRadius="lg" mt="3">
        <Box p={4} display={{ md: "flex" }}>
          <Box borderRadius="lg" flexShrink={0} width={{ md: 40 }}>
            <Image
              borderRadius="lg"
              src="https://i.ibb.co/ypktsr4/DSCF6559.jpg"
              alt="Foto Profile"
            />
            <Button colorScheme="yellow" mt={2} w="100%">
              Buy me a Coffee
            </Button>
            <Button colorScheme="teal" mt={2} w="100%">
              Share
            </Button>
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 4 }} w="100%">
            <Box display={{ md: "flex" }} w="100%" gap="2">
              <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
                <Profile />
              </Box>
              <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
                <Social />
              </Box>
            </Box>
            <Box w="100%" p={4} borderRadius="lg">
              Latest Works
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
