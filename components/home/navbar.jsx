"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/assets/static-data";
import { cn } from "@/lib/utils";
import { logo } from "@/assets";
import Image from "next/image";
import ModeToggle from "@/components/theme/mode-toggle";

function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
        
      if (window?.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash);
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    // Cleanup
    return () => window.removeEventListener("hashchange", updateHash);
  }, [activeHash]);

  console.log(activeHash);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b shadow-sm",
        isScrolled && "dark:bg-black bg-white"
      )}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href={"/"}>
          <Image className="w-34" alt="logo" src={logo} height={100} width={100} />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-muted-foreground">
          {NAV_LINKS.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary font-semibold" : ""
                )}
              >
                {link.name}
              </Link>
            </div>
          ))}
          <ModeToggle />
        </ul>
        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black shadow-md px-4 py-4">
          <ul className="flex flex-col space-y-3 text-sm text-muted-foreground">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block transition-colors hover:text-primary",
                    activeHash === link.href ? "text-primary font-semibold" : ""
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Button asChild className="w-full mt-3">
                <Link href="/#demo">Book a Demo</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
