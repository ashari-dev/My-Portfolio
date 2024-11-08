import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Start from "@/components/Start";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Fullstact Web Developer</span>
            <h1 className="h1 mb-6">
              Hello i'm <br />{" "}
              <span className="text-accent">Muhammad Ashari</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a passionate web developer with practical experience gained
              through intensive bootcamps. Proficient in HTML, CSS, JavaScript,
              and frameworks like React, Laravel, and Vite, I specialize in
              building responsive, interactive websites. I'm skilled in Git,
              PostgreSQL, and always eager to embrace new challenges to grow in
              a dynamic team.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                href={
                  "https://drive.usercontent.google.com/download?id=1vU4KB249nhiKWDThDlR2W-DPjIwLkFp8&export=download&authuser=0&confirm=t&uuid=4f4e1475-7230-4cd2-8b86-0dc2fa6784cf&at=AENtkXYEwk-_vMC0phigNG60NTHZ:1731061542200"
                }
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload />
                </Button>
              </Link>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStayle="flex gap-6"
                  iconStayle="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-center text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Start />
    </section>
  );
};

export default Home;
