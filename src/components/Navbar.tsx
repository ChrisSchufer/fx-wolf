'use client';

import Image from 'next/image';
import React, {useState} from 'react';
import {
  logoBlack,
  logoTextBlack,
  logoTextWhite,
  logoWhite,
} from '../../public/img';
import {ModeToggle} from './mode-toggle';
import Link from 'next/link';

const Navbar = () => {
  const [theme, setTheme] = useState('');

  return (
    <nav className="flex justify-around py-4 border border-b-gray-200">
      <Link
        href="/"
        className="flex items-center gap-4"
      >
        <Image
          alt="fx-wolf logo"
          src={theme === 'dark' ? logoWhite : logoBlack}
          width={60}
          height={60}
        />
        <Image
          alt="fx-wolf logo"
          src={
            theme === 'dark' ? logoTextWhite : logoTextBlack
          }
          width={130}
          height={100}
        />
      </Link>
      <ModeToggle theme={setTheme} />
    </nav>
  );
};

export default Navbar;
