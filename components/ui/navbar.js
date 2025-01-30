import Link from "next/link";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";

export default function Navbar({page}) {

  return (
    <>
      <nav className="h-12 bg-[#333] flex">
        <div className="nav-bar-title font-bold">
          Kieran Mahon
        </div>

        <Link href="/" className="nav-bar-item">
          Home
        </Link>

        {page === "AboutMe" ? (
          <div className="nav-bar-item-active">
            About Me
          </div>
        ) : (
          <Link href="/aboutme" className="nav-bar-item">
            About Me
          </Link>
        )}

        {page === "Portfolio" ? (
          <div className="nav-bar-item-active">
            Portfolio
          </div>
        ) : (
          <Link href="/portfolio" className="nav-bar-item">
            Portfolio
          </Link>
        )}
        
        <Link href="https://github.com/Kieran-Mahon" className="nav-bar-item">
          GitHub
        </Link>
      </nav>
    </>
  );
}
