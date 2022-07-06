import { NextSeo } from "next-seo";
import PropTypes from "prop-types";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Layout = ({ children, title, description }) => (
  <div className="container">
    <NextSeo title={title} description={description} />
    <Nav />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
