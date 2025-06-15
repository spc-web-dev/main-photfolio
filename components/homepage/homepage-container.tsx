import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";
import { skillsData } from "@/lib/data";
import ContactMe from "../dashboard/about/contact-me";
import Experience from "../dashboard/about/experience";

function HomepageContainer() {
  return (
    <div className="xl:w-6xl lg:w-4xl w-full h-screen flex gap-2">
      <ScrollArea className="w-full h-screen">
        <div className="w-full py-10 px-5 space-y-4">
            <h1 className="text-3xl font-serif">LA RESSANN</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sed impedit placeat commodi temporibus rem porro repellendus quam voluptas corrupti cum tempore ipsa, earum similique officiis ratione voluptatem fugiat iste?</p>
            <h2 className="text-2xl font-serif">My Skills</h2>
            <div className="space-y-2">
                <h5 className=" capitalize font-serif">{skillsData[0].name}</h5>
                <ul className="font-thin space-y-2 dark:text-gray-400 list-disc list-inside">
                    {skillsData[0].skills.map(el=>(
                        <li key={el}>{el}</li>
                    ))}
                </ul>
            </div>
            <div className="space-y-2">
                <h5 className=" capitalize font-serif">{skillsData[1].name}</h5>
                <ul className="font-thin space-y-2 dark:text-gray-400 list-disc list-inside">
                    {skillsData[1].skills.map(el=>(
                        <li key={el}>{el}</li>
                    ))}
                </ul>
            </div>
            <Experience />
            <ContactMe />
        </div>
      </ScrollArea>
      <div className="w-sm md:flex hidden py-10 px-5">
        <ul className="flex flex-col gap-2 dark:text-gray-500 text-gray-500 ">
          <li>
            <Link
              href={"/dashboard"}
              className="hover:text-gray-800 hover:dark:text-gray-200"
            >
              dashboard
            </Link>
          </li>
          <li>
            <Link
              href={"/dashboard/docs/tutorials"}
              className="hover:text-gray-800 hover:dark:text-gray-200"
            >
              tutorials
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="flex items-center gap-2 hover:text-gray-800 hover:dark:text-gray-200"
            >
              github{" "}
              <span>
                <ArrowUpRight className="w-5" />
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="flex items-center gap-2 hover:text-gray-800 hover:dark:text-gray-200"
            >
              follow{" "}
              <span>
                <ArrowUpRight className="w-5" />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomepageContainer;
