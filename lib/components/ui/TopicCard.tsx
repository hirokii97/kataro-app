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
          w-full h-24 p-4 rounded-lg
          text-lg text-black transition-all duration-200
          cursor-pointer select-none
          hover:opacity-90 active:scale-[0.98] border-3"
        style={{ borderColor: colorCode }}
      >
        <span className="font-mono font-bold">{displayName}</span>
      </div>
    </Link>
  );
};

export default TopicCard;
