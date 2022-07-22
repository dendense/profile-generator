import Layout from "../components/Layout";

import { Grid, GridItem, Box } from "@chakra-ui/react";

export default function IndexPage() {
  return (
    <Layout
      title="🔖 Profile Generator"
      description="Create Your Free Profile Page"
    >
      <Box borderWidth="1px" borderRadius="lg" marginTop="1em">
        <Grid
          style={{ margin: "0.5rem" }}
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1} bg="tomato" borderRadius="lg" />
          <GridItem colSpan={2} bg="papayawhip" borderRadius="lg" />
          <GridItem colSpan={2} bg="papayawhip" borderRadius="lg" />
          <GridItem colSpan={4} bg="tomato" borderRadius="lg" />
        </Grid>
      </Box>
    </Layout>
  );
}
