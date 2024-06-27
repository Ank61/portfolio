import Social from "@/components/social";
import Navbar from "@/components/navbar";
import Profile from "@/components/profile";

export default function Home() {
  return (
    <main className="flex items-center justify-between w-full flex-col p-8 min-h-screen">
      <div className="w-full max-w-3xl">
        <Profile />
        <Social />
        <Navbar />
      </div>
    </main>
  );
}
