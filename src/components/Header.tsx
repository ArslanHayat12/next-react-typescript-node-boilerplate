import Link from "next/link";
const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/users">
      <a style={linkStyle}>Users Page</a>
    </Link>
    <Link href="/tasks">
      <a style={linkStyle}>Task page</a>
    </Link>
  </div>
);

export default Header;
