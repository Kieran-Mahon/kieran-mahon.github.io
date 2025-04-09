import Image from "next/image";

export default function ShortAboutMe() {

  return (
    <div className="py-6 px-20">
      <div className="flex items-center justify-center">
        <Image
          src={"/profile.jpg"}
          width={400}
          height={400}
          alt={"Profile Image"}
        />
        <div className="pl-16 hidden md:block">
          <div className="text-5xl font-bold pt-4">
            Hi! I'm Kieran Mahon
          </div>
          <div className="text-xl pt-8">
            I am currently working as a Sound and Vision Technician at Auckland Live while I look for a job in the software industry.
            <br />
            <br />
            I completed a Bachelor of Computer and Information Sciences in 2023 from AUT with a double Major in Software Development & Data Science. I completed the degree with an overall GPA of 7.33 (A- Average).
          </div>
        </div>
      </div>
    </div>
  );
}
