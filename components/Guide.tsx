import Image from 'next/image';

const Guide = () => {
  return (
    <section className="padding-container max-container my-8 border border-5 border-red-500">
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
          friends to have fun in the wilderness through the valley and reach the
          top of the mountain
        </p>
      </div>
    </section>
  );
};

export default Guide;
