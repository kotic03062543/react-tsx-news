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
      <ul className="flex justify-center gap-4 p-4">
        {navItems.map((label) => (
          <li key={label.label}>
            <a
              href={label.path}
              className={
                window.location.pathname === label.path
                  ? "text-blue-500"
                  : "text-black"
              }
            >
              {label.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
