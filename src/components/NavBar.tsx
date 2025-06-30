import NavItemCom from "./Nav/NavItem";

function NavBar() {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Business", path: "/business" },
    { label: "Entertainment", path: "/entertainment" },
    { label: "General", path: "/general" },
    { label: "Health", path: "/health" },
    { label: "Science", path: "/science" },
    { label: "Sports", path: "/sports" },
    { label: "Technology", path: "/technology" },
  ];

  return (
    <nav className="w-full border-b border-gray-300 bg-white sticky top-0">
      <NavItemCom items={navItems} className="flex justify-center gap-4 p-4" />
    </nav>
  );
}

export default NavBar;
