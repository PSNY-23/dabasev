import React from 'react'

interface MemberProps {
  name: string,
  role: string,
  image?: string
}

export const MemberCard = ({name, role, image}:MemberProps) => {
  return (
    <div className="flex-1">
      <div className="h-48 sm:h-[312px] bg-gray-700/50 flex items-center justify-center rounded-t-3xl">
        <span className="text-gray-400">Photo</span>
      </div>
      <div className="p-4 sm:p-6 bg-[#8B3D3D]  shadow-[8px_8px_5px_white] rounded-b-3xl">
        <h3 className="text-xl sm:text-2xl font-bold font-inter mb-2 text-[#FFFBFB]">
          {name}
        </h3>
        <p className="text-base font-normal font-inter text-[#FFFBFB">{role}</p>
      </div>
    </div>
  );
}
