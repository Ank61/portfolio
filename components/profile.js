import Image from "next/image";
import ProfileImage from "../images/profile.png";

export default function Profile() {
  return (
    <div>
      <Image
        width="120"
        height="200"
        decoding="async"
        src={ProfileImage}
        loading="lazy"
        alt="Profile"
        className="rounded-full object-fit w-[50px] h-[50px]"
      />
      <h1 className="font-medium text-gray-900 mt-2 text-xl font-heading">
        Ankit Chohan
      </h1>
      <p className="text-gray-500">Software Engineer</p>
    </div>
  );
}
