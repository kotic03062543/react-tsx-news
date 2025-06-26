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
            <a href={item.path}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavItemCom;
