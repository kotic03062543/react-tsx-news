import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import NavItemCom from "./Nav/NavItem";

function Footer() {
  const [open, setOpen] = useState(false);

  const sampleNavItems = [
    { label: "Home", path: "/" },
    { label: "Graph", path: "/graph" },
    { label: "Business", path: "/business" },
    { label: "Innovation", path: "/innovation" },
    { label: "Culture", path: "/culture" },
    { label: "Arts", path: "/arts" },
    { label: "Travel", path: "/travel" },
    { label: "Earth", path: "/earth" },
    { label: "Audio", path: "/audio" },
    { label: "Video", path: "/video" },
    { label: "Live", path: "/live" },
  ];
  const languages = [
    [
      "Oduu Afaan Oromoo",
      "Amharic አማርኛ",
      "Arabic عربي",
      "Azeri AZƏRBAYCAN",
      "Bangla বাংলা",
      "Burmese မြန်မာ",
      "Chinese 中文网",
      "French AFRIQUE",
      "Hausa HAUSA",
      "Hindi हिंदी",
      "Gaelic NAIDHEACHDAN",
    ],
    [
      "Gujarati ગુજરાતીમાં સમાચાર",
      "Igbo AKỤKỌ N’IGBO",
      "Indonesian INDONESIA",
      "Japanese 日本語",
      "Kinyarwanda GAHUZA",
      "Kirundi KIRUNDI",
      "Korean 한국어",
      "Kyrgyz Кыргыз",
      "Marathi मराठी",
      "Nepali नेपाली",
      "Noticias para hispanoparlantes",
    ],
    [
      "Pashto پښتو",
      "Persian فارسی",
      "Pidgin",
      "Polish PO POLSKU",
      "Portuguese BRASIL",
      "Punjabi ਪੰਜਾਬੀ ਖ਼ਬਰਾੰ",
      "Russian НА РУССКОМ",
      "Serbian NA SRPSKOM",
      "Sinhala සිංහල",
      "Somali SOMALI",
      "Swahili HABARI KWA KISWAHILI",
    ],
    [
      "Tamil தமிழ் செய்திகள்",
      "Telugu తెలుగు వార్తలు",
      "Thai ข่าวภาษาไทย",
      "Tigrinya ትግርኛ",
      "Turkish TÜRKÇE",
      "Ukrainian УКРАЇНСЬКА",
      "Urdu اردو",
      "Uzbek O‘ZBEK",
      "Vietnamese TIẾNG VIỆT",
      "Welsh NEWYDDION",
      "Yoruba ÌRÒYÌN NÍ YORÙBÁ",
    ],
  ];

  return (
    <div className="bg-white text-white px-5 md:px-20 py-10 text-center">
      <div className="flex gap-3 items-center">
        <div className="text-2xl font-bold bg-black text-white py-1 px-2">
          B
        </div>
        <div className="text-2xl font-bold bg-black text-white py-1 px-2">
          B
        </div>
        <div className="text-2xl font-bold bg-black text-white py-1 px-2">
          C
        </div>
      </div>
      <div>
        <NavItemCom
          items={sampleNavItems}
          className="flex flex-wrap justify-start gap-4 text-black font-bold"
        />
      </div>
      <div
        className="flex items-center justify-between cursor-pointer w-60 bg-gray-300 px-5 py-4"
        onClick={() => setOpen(!open)}
      >
        <h2 className="text-sm text-black">BBC in other languages</h2>
        {open ? <FaAngleUp color="black" /> : <FaAngleDown color="black" />}
      </div>

      {open && (
        <div className="bg-gray-300 p-6 text-black">
          <h2 className="text-2xl font-bold text-center">
            The BBC is in multiple languages
          </h2>
          <p className="text-center text-gray-600 mt-2 mb-6">
            Read the BBC in your own language
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm text-blue-700 underline">
            {languages.map((column, i) => (
              <div key={i} className="flex flex-col gap-2">
                {column.map((lang, j) => (
                  <a href="#" key={j}>
                    {lang}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="border"></div>
      <div className="flex gap-3 text-black items-center mt-3">
        <div className="font-bold">Follow BBC on:</div>
        <div className="flex flex-wrap">
          <a
            href="https://www.facebook.com/bbcnews"
            className="text-blue-600 hover:underline"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com/bbcnews"
            className="ml-2 text-blue-400 hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/bbcnews"
            className="ml-2 text-pink-600 hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/bbcnews"
            className="ml-2 text-red-600 hover:underline"
          >
            YouTube
          </a>
        </div>
      </div>
      <div>
        <NavItemCom
          items={sampleNavItems}
          className="flex flex-wrap justify-start gap-4 text-black"
        />
      </div>
      <div className="text-xs text-gray-500 text-start">
        Copyright 2025 BBC. All rights reserved. The BBC is not responsible for
        the content of external sites. Read about our approach to external
        linking.
      </div>
    </div>
  );
}

export default Footer;
