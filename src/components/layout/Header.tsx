"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";


type NavItem = {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
};

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Special Needs Dentistry", href: "/services/special-needs-dentistry" },
    ],
  },
  { name: "Destination Nashville", href: "/destination-nashville" },
  { name: "Patient Information", href: "/patient-forms" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = pathname === "/";
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    // Only add scroll listener on home page
    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (isHomePage) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isHomePage]);

  return (
    <header className={`${isHomePage ? 'fixed' : 'sticky'} top-0 w-full z-50 transition-all duration-300 ${
      isHomePage 
        ? (isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent')
        : 'bg-white shadow-sm'
    }`}>
      {/* Main header */}
      <div className="w-full px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center space-x-3">
              <Image 
                src="/images/logo.png" 
                alt="Michael D. Vaughan, DDS" 
                width={80} 
                height={80} 
                className="w-20 h-20 object-contain"
                priority 
              />
              <div>
                <div className={`text-lg font-normal transition-colors ${
                  isHomePage 
                    ? (isScrolled ? 'text-gray-900' : 'text-white')
                    : 'text-gray-900'
                }`}>Michael D. Vaughan, DDS</div>
                <div className={`text-xs uppercase tracking-wide transition-colors ${
                  isHomePage 
                    ? (isScrolled ? 'text-gray-600' : 'text-white/80')
                    : 'text-gray-600'
                }`}>Special Needs & Sedation Dentistry</div>
              </div>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div className="relative">
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className={`text-sm font-normal uppercase tracking-wide transition-colors ${
                          isActive(item.href) 
                            ? "text-teal-600" 
                            : isHomePage
                              ? (isScrolled ? "text-gray-700 hover:text-teal-600" : "text-white hover:text-teal-200")
                              : "text-gray-700 hover:text-teal-600"
                        }`}
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => setActiveDropdown((s) => (s === item.name ? null : item.name))}
                        className={`ml-1 p-1 transition-colors ${
                          isHomePage 
                            ? (isScrolled ? "text-gray-700 hover:text-teal-600" : "text-white hover:text-teal-200")
                            : "text-gray-700 hover:text-teal-600"
                        }`}
                      >
                        <ChevronDownIcon className={`h-3 w-3 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-xl border border-gray-100 py-1 z-50">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600 ${
                              isActive(sub.href) ? "bg-gray-50 text-teal-600" : ""
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-normal uppercase tracking-wide transition-colors ${
                      isActive(item.href) 
                        ? "text-teal-600" 
                        : isHomePage
                          ? (isScrolled ? "text-gray-700 hover:text-teal-600" : "text-white hover:text-teal-200")
                          : "text-gray-700 hover:text-teal-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <Link href="/contact" className={`hidden md:block px-6 py-2 rounded-full text-sm font-medium transition-all ${
            isHomePage 
              ? (isScrolled 
                  ? "bg-teal-600 text-white hover:bg-teal-700" 
                  : "bg-white/20 text-white border border-white/30 hover:bg-white hover:text-teal-600")
              : "bg-teal-600 text-white hover:bg-teal-700"
          }`}>
            CONTACT US
          </Link>
        </div>
      </div>
    </header>
  );
}


