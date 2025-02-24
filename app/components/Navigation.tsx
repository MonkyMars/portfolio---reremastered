import { Send, IdCard, Trophy, Code } from "lucide-react";
import Link from "next/link";
interface navIcons {
  label: string;
  href: string;
  src: React.ComponentType<{ size?: string | number; className?: string }>;
}

const nav_icons: navIcons[] = [
  { label: "Contact", href: "#aside", src: Send },
  { label: "Me", href: "#about", src: IdCard },
  { label: "Experience", href: "#experience", src: Trophy },
  { label: "Projects", href: "#projects", src: Code },
];

const Navigation = () => (
  <nav
    className="bg-white rounded-xl shadow-lg mb-8 border border-gray-100"
    id="navigation"
  >
    <div className="flex justify-around p-2 sm:p-1">
      {nav_icons?.map((icon, index) => (
        <Link
          key={index}
          href={icon.href} 
          prefetch
          className="flex flex-col items-center p-4 w-full hover:bg-slate-200/70 rounded-lg cursor-pointer transition-all hover:scale-[1.02]"
        >
          <icon.src size={24} className="text-primary-500 mb-1" />
          <span className="text-sm font-medium text-gray-700">
            {icon.label}
          </span>
        </Link>
      ))}
    </div>
  </nav>
);

export default Navigation;
