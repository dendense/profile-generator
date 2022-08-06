import * as React from "react";
import { Box, Table, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";

import DataProfile from "../json/data.json";

export default function Profile() {
  return (
    <Box>
      <TableContainer>
        <Table variant="simple" size="sm">
          <Tbody>
            <Tr>
              <Td>Name</Td>
              <Td>:</Td>
              <Td>{DataProfile.bio.name}</Td>
            </Tr>
            <Tr>
              <Td>Birth</Td>
              <Td>:</Td>
              <Td>{DataProfile.bio.birth}</Td>
            </Tr>
            <Tr>
              <Td>Rank</Td>
              <Td>:</Td>
              <Td>{DataProfile.bio.rank}</Td>
            </Tr>
            <Tr>
              <Td>Horoscope</Td>
              <Td>:</Td>
              <Td>{DataProfile.bio.horoscope}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
