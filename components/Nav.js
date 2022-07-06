import Link from "next/link";

const Nav = () => (
  <div>
    <Link href="/">
      <a className="text-decoration-none">Home </a>
    </Link>
    <Link href="/themes">
      <a className="text-decoration-none">Themes </a>
    </Link>
    <Link href="/help">
      <a className="text-decoration-none">Help</a>
    </Link>
  </div>
);

export default Nav;
