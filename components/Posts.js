import * as React from "react";
import Link from "next/link";
import { Box, Image, Button, SimpleGrid } from "@chakra-ui/react";
import myData from "../json/data.json";

export default function Posts() {
  const data = myData.showcases;
  return (
    <SimpleGrid columns={[1, null, 2]} spacing={2}>
      {data.map((i) => (
        <Box
          id={i.id}
          key={i.id}
          w="100%"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Image src={i.imageUrl} alt={i.title} />

          <Link href={i.siteUrl}>
            <Button
              borderRadius="0"
              colorScheme="teal"
              fontWeight="semibold"
              p="3"
              w="100%"
            >
              {i.title}
            </Button>
          </Link>
        </Box>
      ))}
    </SimpleGrid>
  );
}
