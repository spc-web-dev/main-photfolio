
import Image from "next/image";
import Skills from "./skills";
import Experience from "./experience";
import Link from "next/link";
import ContactMe from "./contact-me";

export default function AboutMe() {
  return (
    <main className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {/* Section Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Let me introduce myself
          </p>
        </div>

        {/* Profile and Bio */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <Image
            src="/images/ressann.jpg"
            alt="Profile photo"
            width={200}
            height={200}
            priority
            quality={95}
            className="rounded-md shadow-lg object-cover"
          />
          <div>
            <h2 className="text-2xl font-semibold">Hi, I'm RESSANN LA 👋</h2>
            <p className="mt-4 text-lg leading-relaxed">
              I'm a passionate full-stack developer with a focus on building
              scalable web applications. I specialize in modern JavaScript
              frameworks like React and Next.js, and I have a keen interest in
              cloud technologies and AI.
            </p>
            <p className="mt-2 text-md text-gray-600 dark:text-gray-400">
              In my spare time, I contribute to open-source, write technical
              blogs, and explore the latest trends in AI.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mt-10">My Github</h3>
          <p className="mt-2 text-md text-gray-600 dark:text-gray-400">
            Check out my projects and contributions on GitHub:
          </p>
          <ul className="mt-4 flex flex-col gap-2 pl-5 list-disc">
            <li>
              <Link
                href={"https://github.com/spc-web-dev"}
                className="text-gray-200 hover:underline"
              >
                RESSANN.DEV
              </Link>
            </li>
            <li>
              <Link
                href={"https://github.com/ressann"}
                className=" text-gray-200 hover:underline"
              >
                LA RESSANN
              </Link>
            </li>
          </ul>
        </div>
        {/* Skills */}
        <Skills />

        {/* Experience / Timeline */}
        <Experience />

        {/* Call to Action */}
        <ContactMe />
      </div>
    </main>
  );
}
