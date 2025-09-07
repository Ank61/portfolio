'use client';

import { useState } from 'react';
import Image from "next/image";
import ProfileImage from "../images/profile.png";
import ProfileModal from './ProfileModal';

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div 
        className="cursor-pointer hover:opacity-90 transition-opacity duration-200 w-fit"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          width={50}
          height={50}
          src={ProfileImage}
          alt="Ankit Chohan - Senior Software Engineer"
          className="rounded-full object-cover w-[50px] h-[50px] border-2 border-gray-200"
          priority
        />
      </div>
      
      <h1 className="font-medium text-gray-900 mt-2 text-xl font-heading">
        Ankit Chohan
      </h1>
      <p className="text-gray-500">Senior Software Engineer</p>
      
      <ProfileModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
