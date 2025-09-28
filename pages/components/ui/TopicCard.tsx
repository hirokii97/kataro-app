import Link from "next/link";

interface TopicCardProps {
  name: string;
  colorCode: string;
  displayName: string;
}

const TopicCard = ({ name, colorCode, displayName }: TopicCardProps) => {
  return (
    <Link href={`/${name}`} passHref>
      <div
        className="
          flex flex-col items-center justify-center 
          w-full h-24 p-4 rounded-lg shadow-md 
          text-lg font-bold text-white transition-all duration-200
          cursor-pointer select-none
          hover:shadow-xl hover:opacity-90 active:scale-[0.98]"
        style={{ backgroundColor: colorCode }}
      >
        <span>{displayName}</span>
      </div>
    </Link>
  );
};

export default TopicCard;
