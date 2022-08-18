import * as React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Link, Button } from "@chakra-ui/react";
import myData from "../json/data.json";

export default function Posts() {
  const data = myData.showcases;
  console.log(data);
  return (
    <Box display={{ md: "flex" }} w="100%" gap="2">
      {data.map((i) => (
        <Box
          id={i.id}
          w="100%"
          mt={{ base: 4, md: 2 }}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Image src={i.imageUrl} alt={i.title} />
          <Link href={i.siteUrl} isExternal>
            <Button
              borderRadius="0"
              colorScheme="blue"
              fontWeight="semibold"
              p="3"
              w="100%"
            >
              {i.title}
            </Button>
          </Link>
        </Box>
      ))}
    </Box>
  );
}
