import Link from "next/link";

const Nav = () => (
  <div>
    <Link href="/">
      <a className="text-decoration-none">Home </a>
    </Link>
    <Link href="/themes">
      <a className="text-decoration-none">Themes</a>
    </Link>
  </div>
);

export default Nav;
