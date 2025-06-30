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
                  ? "text-blue-500"
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
