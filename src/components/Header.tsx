import { useState } from "react";
import hamburger from "../assets/hamburger.png";
import user from "../assets/user.png";
import NavItemCom from "./Nav/NavItem";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Header Bar */}
      <div className="flex justify-between items-center text-white p-4 border border-b-gray-200 bg-white z-50 relative">
        {/* Hamburger - Mobile */}
        <div className="cursor-pointer" onClick={() => setIsMenuOpen(true)}>
          <img className="w-8" src={hamburger} alt="menu" />
        </div>

        {/* Logo */}
        <div className="flex gap-3 justify-center items-center">
          <div className="text-4xl font-bold bg-black text-white py-1 px-2">
            B
          </div>
          <div className="text-4xl font-bold bg-black text-white py-1 px-2">
            B
          </div>
          <div className="text-4xl font-bold bg-black text-white py-1 px-2">
            C
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-5">
          <button className="bg-black text-white px-4 py-2 cursor-pointer">
            Register
          </button>
          <button className="text-black cursor-pointer">Sign In</button>
        </div>

        {/* Mobile User Icon */}
        <div className="md:hidden cursor-pointer">
          <img className="w-12" src={user} alt="user" />
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="drawer-example"
          className={`fixed top-0 left-0 z-50 h-screen overflow-y-auto transition-transform bg-white w-80
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
          aria-labelledby="drawer-label"
        >
          <div className="w-72 h-full bg-white p-4 overflow-auto">
            {/* Close */}
            <div className="flex justify-between items-center mb-4">
              <button onClick={handleCloseMenu} className="text-xl font-bold">
                ✕
              </button>
            </div>

            <ul className="divide-y">
              {navItems.map((item) => (
                // <li key={item.label}>
                //   <button
                //     className="w-full text-left px-2 py-3 hover:bg-gray-100 capitalize font-medium"
                //     onClick={() => handleNavClick(item.path)}
                //   >
                //     {item.label}
                //   </button>
                // </li>
                <NavItemCom
                  key={item.label}
                  items={[item]}
                  className="w-full text-left px-2 py-3 hover:bg-gray-100 font-medium"
                />
              ))}
            </ul>
          </div>

        </div>
      )}
    </>
  );
}

export default Header;
