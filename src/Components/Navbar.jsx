import { Link } from "react-router-dom";

const NavList = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/Contact", label: "Contact" },
];

export function Navbar() {
  return (
    <nav className="flex gap-4 px-6">
      {NavList.map((nav) => (
        <Link to={nav.path}>{nav.label}</Link>
      ))}
    </nav>
  );
}
