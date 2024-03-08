'use client';
import * as Icon from '../icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Dashboard', href: '/dashboard', icon: Icon.Home },
  {
    name: 'Keluarga Berencana',
    href: '/dashboard/keluarga-berencana',
    icon: Icon.KB,
  },
  {
    name: 'Periksa Kehamilan',
    href: '/dashboard/periksa-kehamilan',
    icon: Icon.Kehamilan,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="h-8 w-6" />
            <p className="hidden font-semibold md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
