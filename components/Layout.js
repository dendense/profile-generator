import { NextSeo } from "next-seo";
import PropTypes from "prop-types";

import { Container } from "@chakra-ui/react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Layout = ({ children, title, description }) => (
  <Container maxW="container.md" marginTop="1rem">
    <NextSeo title={title} description={description} />
    <Nav />
    {children}
    <Footer />
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
