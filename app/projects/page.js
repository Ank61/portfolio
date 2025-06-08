import ProjectsSection from "@/components/projectsSection";
import Common from "@/components/common";
export default async function Contact() {
    return (
        <main className="flex items-center justify-between w-full flex-col p-8 min-h-screen">
            <Common />
            <ProjectsSection/>
        </main>
    )
}