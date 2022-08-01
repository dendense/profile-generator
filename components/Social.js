import * as React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
const Profile = () => (
  <Box>
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Social Cards</TableCaption>
      </Table>
    </TableContainer>
  </Box>
);

export default Profile;
