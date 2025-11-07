import Image from 'next/image';

interface ValueProps {
  icon: string;
  title: string;
  description: string;
}

export const Card = ({ icon, title, description }: ValueProps) => {
  return (
    <div className="bg-[rgba(36,34,34,0.68)] border border-white/20 rounded-[34px] p-6 sm:p-8">
      <div className="mb-2 sm:mb-3 h-10 w-10 relative">
        <Image src={icon} alt={`${title} icon`} fill className="object-contain" />
      </div>

      <h3 className="text-xl sm:text-2xl font-semibold font-inter mb-3 sm:mb-4 text-white">
        {title}
      </h3>
      <p className="text-base font-normal font-inter text-gray-300 leading-[1.21]">{description}</p>
    </div>
  );
};
