import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User, FolderCode, Github, Linkedin} from "lucide-react"
import ShowCase from "@/components/home-ui/showcase";
import ShortAboutMe from "@/components/home-ui/short-about-me";
import MyCanvas from "@/components/home-ui/canvas";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <div className="relative w-full bg-blue-100 h-[250px] md:h-[500px]">
          <div className="w-full h-full blur-xs hidden md:block">
            <MyCanvas />
          </div>
          <div className="absolute inset-0 h-full w-full flex flex-col items-center justify-center text-[#333]">
            {/* Desktop */}
            <div className="hidden md:flex text-6xl border-8 rounded-t-lg border-[#e7e7e7] bg-[#e7e7e7]">
              Kieran Mahon
            </div>
            <div className="hidden md:flex text-3xl border-8 rounded-lg border-[#e7e7e7] bg-[#e7e7e7] text-center">
              Software Developer - Full Stack - Game Development
            </div>

            {/* Phone */}
            <div className="md:hidden flex text-5xl">
              Kieran Mahon
            </div>
            <div className="md:hidden flex text-2xl text-center">
              Software Developer - Full Stack - Game Development
            </div>
          </div>
        </div>

        <div className="w-full bg-blue-150">
          <ShowCase />
        </div>

        <div className="w-full bg-blue-100">
          <ShortAboutMe />
        </div>
      </div>
    </>
  );
}
