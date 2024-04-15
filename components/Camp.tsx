interface CampSiteProps {
  backgroundImage: string;
}

const CampSite = ({ backgroundImage }: CampSiteProps) => {
  return (
    <div
      className={`${backgroundImage} w-full flex items-start bg-center bg-contain bg-no-repeat border-2 border-red-600`}
    >
      CampSite
    </div>
  );
};

const Camp = () => {
  return (
    <section className="flex lg:max-container h-[380px] md:h-[400px] lg:h-[600px] py-10">
      <CampSite backgroundImage="bg-bg-img-1" />
    </section>
  );
};

export default Camp;
