import Image from 'next/image';

const Hero = () => {
  return (
    <div className="padding-container max-container  py-12 flex flex-col lg:flex-row">
      <div className="hero-map" />
      <div className="relative flex flex-col lg:w-1/2 gap-12 lg:gap-8">
        <Image
          src="camp.svg"
          alt="camp"
          width={40}
          height={40}
          className="absolute left-[-5px] top-[-30px]"
        />
        <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
        <p className="regular-16 text-gray-50">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>
        <div className="flex gap-10">
          <div className="flex gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  alt="star"
                  key="index"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="text-blue-70">
            <span className="bold-16">198k</span> Excellent Review
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
