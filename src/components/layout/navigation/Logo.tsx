import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Routes } from '@/shared/enums/routes.enum';

import logo from '@/assets/icons/logo.svg';

const Logo: FC = () => (
  <Link
    href={Routes.Home}
    className='flex items-center gap-3 mb-10 text-white text-xl uppercase'
  >
    <Image src={logo} alt='logotip' width={48} height={48} />
    kinoman
  </Link>
);

export default Logo;
