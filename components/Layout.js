import Link from "next/link";
import PropTypes from "prop-types";
import Nav from "../components/Nav";

const Layout = ({ children }) => (
  <div className="container">
    <Nav />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
