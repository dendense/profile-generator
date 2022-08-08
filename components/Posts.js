import * as React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Link, Button } from "@chakra-ui/react";
import DataPosts from "../json/data.json";

export default function Posts() {
  return (
    <Box display={{ md: "flex" }} w="100%" gap="2">
      <Box
        id={DataPosts.showcases.id}
        w="100%"
        mt={{ base: 4, md: 2 }}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Image
          src={DataPosts.showcases.imageUrl}
          alt={DataPosts.showcases.title}
        />
        <Link href={DataPosts.showcases.siteUrl} isExternal>
          <Button
            borderRadius="0"
            colorScheme="blue"
            fontWeight="semibold"
            p="3"
            w="100%"
          >
            {DataPosts.showcases.title}
          </Button>
        </Link>
      </Box>
      <Box
        id={DataPosts.showcases.id}
        w="100%"
        mt={{ base: 4, md: 2 }}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Image
          src={DataPosts.showcases.imageUrl}
          alt={DataPosts.showcases.title}
        />
        <Link href={DataPosts.showcases.siteUrl2} isExternal>
          <Button
            borderRadius="0"
            colorScheme="gray"
            fontWeight="semibold"
            p="3"
            w="100%"
          >
            Underconstruction
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
