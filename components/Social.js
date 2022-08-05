import * as React from "react";
import {
  Box,
  Table,
  Tbody,
  Tr,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Profile = () => (
  <Box>
    <TableContainer>
      <Table variant="simple">
        <Tbody>
          <Tr>
            <Td>
              <Box></Box>
            </Td>
          </Tr>
        </Tbody>
        <TableCaption>Social Cards</TableCaption>
      </Table>
    </TableContainer>
  </Box>
);

export default Profile;
