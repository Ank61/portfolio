import Navbar from "./navbar";
import Profile from "./profile";
import Social from "./social";

export default function Common() {
    return (
        <div className="w-full max-w-3xl">
            <Profile />
            <Social />
            <div className="border-b w-full  mt-6 mb-5 md:my-7"></div>
            <Navbar />
        </div>
    )
} 