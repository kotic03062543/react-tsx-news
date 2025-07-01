import type { NavItem } from "./Type";

interface NavMenuProps {
  items: NavItem[];
  className?: string;
}

function NavItemCom({ items, className = "" }: NavMenuProps) {
  return (
    <div>
      <ul className={`flex gap-4 py-4 text-black ${className}`}>
        {items.map((item) => (
          <li key={item.label}>
            <a
              className={
                window.location.pathname === item.path
                  ? "border-l-6 border-black bg-gray-100 px-3 py-3 font-medium mr-0"
                  : "text-black"
              }
              href={item.path}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavItemCom;
