"use client"
import { AnimatePresence, motion } from "framer-motion";
const UsesSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="max-w-3xl mb-auto"
    // onClick={() => setSelectedId(null)}
    >
      <div >
        <div className="space-y-6">
          <div>
            <h2 className="font-medium text-gray-900 mb-4 text-md mb-3">
              Languages
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript (ES6+)",
                "TypeScript",
                "Python",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 text-sm bg-gray-100 text-gray-500 font-normal leading-relaxed rounded-full cursor-pointer hover:text-black transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>


          <div>
            <h2 className="text-md font-medium text-gray-700 mb-3">Frontend</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "React.js",
                "Redux / Zustand",
                "Next.js",
                "Tailwind CSS",
                "Bootstrap",
                "Material-UI",
                "Shadcn",
                "Chakra UI",
                "Azure Web Apps",
                "Power BI Reports",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 text-sm bg-gray-100 text-gray-500 font-normal leading-relaxed rounded-full cursor-pointer hover:text-black transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-md font-medium font-medium text-gray-700 mb-3">Backend</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Node.js",
                "NestJS",
                "Express.js",
                "FastAPI",
                "Mongoose",
                "GraphQL",
                "Prisma ORM",
                "Socket.io",
                "Redis",
                "Twilio",
                "Push Notification",
                "MQTT (Pub-Sub)",
                "Duo MFA",
                "Husky",
                "Jest",
                "Supertest",
                "Stripe",
                "Paystack",
                "Micorsoft Authentication Library (MSAL)",
                "Azure Functions (Serverless)",
                "Azure Container Storage",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 text-sm bg-gray-100 text-gray-500 font-normal leading-relaxed rounded-full cursor-pointer hover:text-black transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-medium text-gray-900 mb-4 text-md mb-3">
              DevOps & Database
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Nginx",
                "AWS (EC2, S3, Cloudfront)",
                "Azure Functions",
                "MySQL",
                "MongoDB",
                "Azure CI/CD Pipelines",
                "GitHub Actions",
                "Docker",
                "Azure Table Storage",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 text-sm bg-gray-100 text-gray-500 font-normal leading-relaxed rounded-full cursor-pointer hover:text-black transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-medium text-gray-900 mb-4 text-md mb-3">
              AI & Data
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "RAG",
                "Adv. Semantic Search",
                "NLP",
                "OpenAI Integration",
                "Dall-E 3",
                "ElevenLabs AI",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 text-sm bg-gray-100 text-gray-500 font-normal leading-relaxed rounded-full cursor-pointer hover:text-black transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default UsesSection;
