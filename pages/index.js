import * as React from "react";
import { Box, Image, Link, Text, Grid, GridItem } from "@chakra-ui/react";

import Layout from "../components/Layout";

export default function Index() {
  return (
    <Layout title="Profile Generator" description="Profile Generator">
      <Box borderWidth="1px" borderRadius="lg" mt="3">
        <Box p={4} display={{ md: "flex" }}>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            flexShrink={0}
            width={{ md: 40 }}
          ></Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Box
              bg="green"
              display={{ md: "flex" }}
              w="100%"
              p={4}
              color="white"
            >
              <Box bg="tomato" w="100%" p={4} color="white">
                Ini Box2
              </Box>
              <Box bg="tomato" w="100%" p={4} color="white">
                Ini Box2
              </Box>
            </Box>
            <Box bg="tomato" w="100%" p={4} color="white">
              Ini Box2
            </Box>
          </Box>
        </Box>
        <Box p={4} display={{ md: "flex" }}>
          <Box flexShrink={0}>
            <Image
              borderRadius="lg"
              width={{ md: 40 }}
              src="https://bit.ly/2jYM25F"
              alt="Woman paying for a purchase"
            />
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Text
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="sm"
              letterSpacing="wide"
              color="teal.600"
            >
              Marketing
            </Text>
            <Link
              mt={1}
              display="block"
              fontSize="lg"
              lineHeight="normal"
              fontWeight="semibold"
              href="#"
            >
              Finding customers for your new business
            </Link>
            <Text mt={2} color="gray.500">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </Text>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
