import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";

export default function Home() {

  return (
    <>
      <Navbar page={"AboutMe"} />
      <br />
      <p>
        about me
      </p>
    </>
  );
}
