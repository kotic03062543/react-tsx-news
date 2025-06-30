import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface MenuItem {
  label: string;
  value: string;
  subItems?: string[];
}

const menuItems: MenuItem[] = [
  { label: "Business", value: "business" },
  { label: "Entertainment", value: "entertainment" },
  { label: "General", value: "general" },
  { label: "Health", value: "health" },
  { label: "Science", value: "science" },
  { label: "Sports", value: "sports" },
  { label: "Technology", value: "technology" },
];

const VerticalAccordionMenu = ({
  onItemSelect,
}: {
  onItemSelect?: () => void;
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul className="divide-y">
      {menuItems.map((item, index) => (
        <li key={item.value}>
          <button
            className="w-full flex justify-between items-center px-2 py-3 text-left hover:bg-gray-100 font-medium capitalize"
            onClick={() => {
              navigate(`/${item.value}`);
              onItemSelect?.(); // ปิด Drawer ถ้า parent ส่งมา
            }}
          >
            {item.label}
            {item.subItems && (
              <>{openIndex === index ? <FaAngleUp /> : <FaAngleDown />}</>
            )}
          </button>

          {/* Subitems */}
          {item.subItems && openIndex === index && (
            <ul className="bg-gray-50 px-6 py-1 text-sm space-y-1">
              {item.subItems.map((sub) => (
                <li key={sub}>
                  <a href="#" className="block text-gray-600 hover:text-black">
                    {sub}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default VerticalAccordionMenu;
