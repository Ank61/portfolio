
import Common from "@/components/common";
import AboutSection from "@/components/aboutSection";

export default  function Home() {
  return (
    <main className="flex items-center justify-between w-full flex-col p-8 min-h-screen">
      <Common />
      <AboutSection />
    </main>
  );
}
