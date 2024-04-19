import Image from 'next/image';

const Guide = () => {
  return (
    <section className="max-container my-8 ">
      <div className="padding-container">
        <Image src="camp.svg" alt="camp" width={40} height={40} />
        <h2 className="text-green-50 regular-18 -mt-1">WE ARE HERE FOR YOU</h2>
        <div className="flexBetween flex-wrap">
          <h2 className="bold-40 md:bold-64 lg:max-w-[360px]">
            Guide You to Easy Path
          </h2>
          <p className="text-gray-30 lg:max-w-[560px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>
      <div className="mt-6 flexCenter relative">
        <Image
          src="/boat.png"
          alt="board"
          height={1440}
          width={580}
          className="w-full object-cover object-center max-container lg:rounded-5xl "
        />
        <div className="bg-white shadow-md rounded-2xl p-7 pl-5 md:left-[5%] md:top-8 absolute z-20 flex gap-6">
          <Image src="/meter.svg" width={26} height={167} alt="meter" />
          <div className="flex flex-col justify-center gap-10 md:space-12">
            <div>
              <div className="flexBetween">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="text-green-50 bold-16">48 m</p>
              </div>
              <p className="bold-18">Aguas Calientes</p>
            </div>
            <div>
              <p className="regular-16 text-gray-20">Start track</p>
              <p className="bold-18">Wonorejo Pasuruan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
