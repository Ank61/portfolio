import Common from "@/components/common";
import Google from "../images/google.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex items-center justify-between w-full flex-col p-8 min-h-screen">
      <Common />
      <div style={{ opacity: 1, transform: "none" }} className="max-w-3xl">
        <div className="">
          <p className="text-gray-500">
            Transform your projects with a Full Stack Developer skilled in
            JavaScript, React.js, Node.js, and Next.js. Let{"'"}s create
            something exceptional!
          </p>
        </div>
        <div className="mt-16">
          <h1 className="font-medium text-gray-900 mb-4 text-lg">Experience</h1>
          <ol className="relative border-s border-gray-200">
            <li className="mb-10 ms-4">
              <div className="flex flex-row items-center gap-2">
                <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border "></div>
                <div className="text-md font-medium text-gray-900">
                  Senior Software Engineer
                </div>
                <div className="inline-block ml-2  text-xs rounded-full px-1 py-0  text-gray-500">
                  Present
                </div>
              </div>
              <div className="mb-4 text-sm font-normal text-gray-500">
                Google India
              </div>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>
              <div className="text-md font-medium text-gray-900">
                Software Engineer
              </div>
              <div className="mb-4 text-sm font-normal text-gray-500">
                Microsoft
              </div>
            </li>
          </ol>
        </div>
        <div className="mt-16">
          <h1 className="font-medium text-gray-900 mb-4 text-lg">Projects</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-x-10 gap-y-5">
            <div className="mt-5">
              <a target="_blank" rel="noopener noreferrer" href="#">
                <div className="text-sm mb-1 font-medium text-gray-900">
                  Meditations App
                </div>
                <div className="max-w-xs text-sm font-normal text-gray-500">
                  An app for organizing book notes and personal reflections.
                </div>
              </a>
            </div>
            <div className="mt-5" style={{ transform: "none" }}>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <div className="text-sm mb-1 font-medium text-gray-900">
                  Personal Blog
                </div>
                <div className="max-w-xs text-sm font-normal text-gray-500">
                  A platform for sharing thoughts and insights on various
                  topics.
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
