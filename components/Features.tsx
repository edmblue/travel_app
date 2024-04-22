import { FEATURES } from '@/constants';
import Image from 'next/image';

const Features = () => {
  return (
    <section className=" flex items-center max-container padding-container my-6 relative bg-feature-bg">
      <Image
        src="/phone.png"
        alt="phone"
        width={428}
        height={815}
        className="hidden lg:flex rotate-[15deg] relative md:-left-16 top-10"
      />
      <div>
        <Image src="camp.svg" alt="camp" width={40} height={40} />
        <h2 className="bold-40 lg:bold-64 -mt-3">Our Features</h2>
        <div className="py-6">
          <ul className="grid md:grid-cols-2 gap-8">
            {FEATURES.map((feature) => (
              <li key={feature.title}>
                <FeatureItem
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

interface FeaturesItemProps {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeaturesItemProps) => (
  <div className="flex flex-col items-start gap-4">
    <div className="rounded-full bg-green-50 p-4">
      <Image src={icon} width={28} height={28} alt="icon" />
    </div>
    <h3 className="bold-20 lg:bold-32">{title}</h3>
    <p className="text-gray-50 regular-16 lg:regular-18">{description}</p>
  </div>
);

export default Features;
