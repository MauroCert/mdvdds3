"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

// Social Media Icons (simple SVG components)
const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-2.508 0-4.536-2.028-4.536-4.535S5.941 7.917 8.449 7.917s4.535 2.028 4.535 4.536-2.027 4.535-4.535 4.535zm7.424-10.177h-1.712c-.229 0-.414-.185-.414-.414s.185-.414.414-.414h1.712c.229 0 .414.185.414.414s-.185.414-.414.414z"/>
  </svg>
);

const GoogleIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

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
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar with social links and contact */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-3">
                <Link href="https://www.facebook.com/mdvdds/" className="text-gray-500 hover:text-teal-600 transition-colors">
                  <FacebookIcon />
                </Link>
                <Link href="https://www.instagram.com/" className="text-gray-500 hover:text-teal-600 transition-colors">
                  <InstagramIcon />
                </Link>
                <Link href="https://www.google.com/maps?cid=14045170718670800805" className="text-gray-500 hover:text-teal-600 transition-colors">
                  <GoogleIcon />
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-gray-600">PATIENT REGISTRATION</span>
              <Link href="tel:+16159156090" className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm hover:bg-teal-700">
                CALL US
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center space-x-3">
              <Image 
                src="/images/logo.png" 
                alt="Michael D. Vaughan, DDS" 
                width={40} 
                height={40} 
                className="w-10 h-10 object-contain"
                priority 
              />
              <div>
                <div className="text-lg font-normal text-gray-900">Michael D. Vaughan, DDS</div>
                <div className="text-xs text-gray-600 uppercase tracking-wide">Special Needs & Sedation Dentistry</div>
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
                        className={`text-sm font-normal text-gray-700 hover:text-teal-600 uppercase tracking-wide ${
                          isActive(item.href) ? "text-teal-600" : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => setActiveDropdown((s) => (s === item.name ? null : item.name))}
                        className="ml-1 p-1 text-gray-700 hover:text-teal-600"
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
                    className={`text-sm font-normal text-gray-700 hover:text-teal-600 uppercase tracking-wide ${
                      isActive(item.href) ? "text-teal-600" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <Link href="/contact" className="hidden md:block bg-teal-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-teal-700">
            CONTACT US
          </Link>
        </div>
      </div>
    </header>
  );
}


