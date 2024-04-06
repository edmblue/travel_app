'use client';

import Image from 'next/image';
import { NAV_LINKS } from '@/constants';
import Link from 'next/link';
import { useState } from 'react';

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <div className="lg:hidden cursor-pointer" onClick={handleOpenMenu}>
        <Image src="/menu.svg" alt="menu" height={41} width={41} />
      </div>

      {openMenu && (
        <div className="absolute top-0 w-1/2 left-0 z-50 lg:hidden">
          <nav className="flex gap-12 flex-col bg-green-90 h-screen padding-container py-5">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-16 hover:font-bold text-white transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
