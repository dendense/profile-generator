import * as React from "react";
import { Box, Image, Link, Button, SimpleGrid } from "@chakra-ui/react";
import myData from "../json/data.json";

export default function Posts() {
  const data = myData.showcases;
  console.log(data);
  return (
    <SimpleGrid columns={[1, null, 2]} spacing={2}>
      {data.map((i) => (
        <Box
          id={i.id}
          w="100%"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Image src={i.imageUrl} alt={i.title} />
          <Link href={i.siteUrl} isExternal>
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
