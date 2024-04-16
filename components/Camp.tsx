import { PEOPLE_URL } from '@/constants';
import Image from 'next/image';

interface CampSiteProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampSiteProps) => {
  return (
    <div
      className={`${backgroundImage} min-w-[1100px] h-full w-full flex justify-start bg-cover bg-no-repeat lg:rounded-r-5xl xl:rounded-5xl p-5`}
    >
      <div className="flex flex-col h-full justify-between">
        <div className="flex gap-6 flexCenter">
          <div className="bg-green-500 rounded-full  p-4">
            <Image
              src="/folded-map.svg"
              alt="folded-map"
              width={24}
              height={24}
            />
          </div>
          <div className="flex flex-col text-white">
            <p className="bold-18">{title}</p>
            <p className="regular-14">{subtitle}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="flex -space-x-3 ">
            {PEOPLE_URL.map((url) => (
              <Image src={url} alt="person" key={url} width={24} height={24} />
            ))}
          </span>
          <div className="bold-16 lg:bold-18 text-white">
            {peopleJoined}+ Joined{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="flex lg:max-container h-[380px] md:h-[400px] lg:h-[600px] relative z-20 md:py-10 overflow-x-auto hide-scrollbar gap-8">
      <CampSite
        backgroundImage="bg-bg-img-1"
        title="Putuk Truno Camp"
        subtitle="Prigen, Pasuruan"
        peopleJoined="50"
      />
      <CampSite
        backgroundImage="bg-bg-img-2"
        title="Montain View Camp"
        subtitle="Somewhere in the Wilderness"
        peopleJoined="75"
      />
    </section>
  );
};

export default Camp;
