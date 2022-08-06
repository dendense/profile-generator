import * as React from "react";
import { Box, Button, Link } from "@chakra-ui/react";

import DataProfile from "../json/data.json";

const Profile = () => (
  <Box display={{ md: "flex" }}>
    <Box borderRadius="lg" flexShrink={0} width="100%">
      <Link href={DataProfile.social.github} target="_blank" isExternal>
        <Button colorScheme="gray" w="100%">
          Github
        </Button>
      </Link>
      <Link href={DataProfile.social.twitter} target="_blank" isExternal>
        <Button colorScheme="twitter" mt={2} w="100%">
          Twitter
        </Button>
      </Link>
      <Link href={DataProfile.social.instagram} target="_blank" isExternal>
        <Button colorScheme="pink" mt={2} w="100%">
          Instagram
        </Button>
      </Link>
    </Box>
  </Box>
);

export default Profile;
