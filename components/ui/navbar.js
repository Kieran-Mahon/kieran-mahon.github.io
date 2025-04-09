import Link from "next/link";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";

export default function Navbar({page}) {

  return (
    <>
      <nav className="h-12 bg-[#333] flex justify-evenly md:justify-start">
        <div className="nav-bar-title font-bold hidden md:flex">
          Kieran Mahon
        </div>

        {page === "/" ? (
          <div className="nav-bar-item-active md:ml-4 md:px-5">
            Home
          </div>
        ) : (
          <Link href="/" className="nav-bar-item md:ml-4 md:px-5">
            Home
          </Link>
        )}

        {/*page === "/aboutme" ? (
          <div className="nav-bar-item-active md:ml-4 md:px-5">
            About Me
          </div>
        ) : (
          <Link href="/aboutme" className="nav-bar-item md:ml-4 md:px-5">
            About Me
          </Link>
        */}

        {page === "/portfolio" ? (
          <div className="nav-bar-item-active md:ml-4 md:px-5">
            Portfolio
          </div>
        ) : (
          <Link href="/portfolio" className="nav-bar-item md:ml-4 md:px-5">
            Portfolio
          </Link>
        )}
        
        <Link href="https://github.com/Kieran-Mahon" className="nav-bar-item md:ml-4 md:px-5">
          GitHub
        </Link>
        
        <Link href="https://www.linkedin.com/in/kierandmahon" className="nav-bar-item md:ml-4 md:px-5">
          LinkedIn
        </Link>
      </nav>
    </>
  );
}
