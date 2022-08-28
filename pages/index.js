import * as React from "react";
import { Box, Image, Link, Button } from "@chakra-ui/react";

import Profile from "../components/Profile";
import Social from "../components/Social";
import Layout from "../components/Layout";
import Posts from "../components/Posts";
import Analytics from "../components/Analytics";
import DataProfile from "../json/data.json";

export default function Index() {
  return (
    <Layout title="Dendense" description="Welcome to DensLAB">
      <Analytics />
      <Box borderWidth="1px" borderRadius="lg" mt="3">
        <Box p={4} display={{ md: "flex" }}>
          <Box borderRadius="lg" flexShrink={0} width={{ md: 40 }}>
            <Image
              borderRadius="lg"
              src={DataProfile.bio.imageUrl}
              alt="Foto Profile"
            />
            <Link href={DataProfile.social.trakteer} isExternal>
              <Button colorScheme="yellow" mt={2} w="100%">
                Buy me a Coffee
              </Button>
            </Link>
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 2 }} w="100%">
            <Box display={{ md: "flex" }} w="100%" gap="2">
              <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
                <Profile />
              </Box>
              <Box
                mt={{ base: 4, md: 0 }}
                w="100%"
                p={4}
                borderWidth="1px"
                borderRadius="lg"
              >
                <Social />
              </Box>
            </Box>
            <Box w="100%" p={3} borderRadius="lg">
              <Box mb={2}>Latest Works</Box>
              <Posts />
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
