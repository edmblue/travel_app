import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  return (
    <nav className="flexBetween padding-container z-30 max-container py-5">
      <Image src="hilink-logo.svg" alt="logo" width={72} height={20} />

      <ul className="hidden lg:flex gap-12">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 hover:font-bold text-gray-50 transition-all"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:inline-block">
        <Button
          type="button"
          title="Log In"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <MobileMenu />
    </nav>
  );
};

export default Navbar;
