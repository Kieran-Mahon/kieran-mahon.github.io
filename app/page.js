import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { User, FolderCode, Github, Linkedin} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full md:px-10 pt-4 px-4">
      <div className="md:hidden block">
        <div className="text-5xl font-bold">
          Kieran Mahon
        </div>
        <div className="text-xl pt-8">
          Bachelor of Computer and Information Sciences
          <br />
          Double Major in Software Development & Data Science
          <br />
          7.33 GPA (A- Average)
        </div>
      </div>

      <div className="md:flex hidden">
        <Image
          src={"/profile.jpg"}
          width={250}
          height={250}
          alt={"Profile Image"}
        />
        <div className="pl-5 hidden md:block">
          <div className="text-5xl font-bold pt-4">
            Kieran Mahon
          </div>
          <div className="text-xl pt-8">
            Bachelor of Computer and Information Sciences
            <br />
            Double Major in Software Development & Data Science
            <br />
            7.33 GPA (A- Average)
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-16 mt-16 mb-12 mx-2 flex-grow">
      <Button className="home-buttons hover:bg-[#333]/95" asChild>
          <Link href="/aboutme" className="flex-col">
            <User className="!w-12 !h-12 mb-2"/>
            About Me
          </Link>
        </Button>

        <Button className="home-buttons hover:bg-[#333]/95" asChild>
          <Link href="/portfolio" className="flex-col">
            <FolderCode className="!w-12 !h-12 mb-2"/>
            Portfolio
          </Link>
        </Button>

        <Button className="home-buttons hover:bg-[#333]/95" asChild>
          <Link href="https://github.com/Kieran-Mahon" className="flex-col">
            <Github className="!w-12 !h-12 mb-2"/>
            GitHub
          </Link>
        </Button>

        <Button className="home-buttons hover:bg-[#333]/95" asChild>
          <Link href="https://www.linkedin.com/in/kierandmahon" className="flex-col">
          <Linkedin className="!w-12 !h-12 mb-2"/>
            LinkedIn
          </Link>
        </Button>
      </div>
    </div>
  );
}
