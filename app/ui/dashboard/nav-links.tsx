'use client';
import * as Icon from '../icons';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Dashboard', href: '/dashboard', icon: Icon.Home, role: 'both' },
  {
    name: 'Keluarga Berencana',
    href: '/dashboard/keluarga-berencana',
    icon: Icon.KB,
    role: 'bidan',
  },
  {
    name: 'Periksa Kehamilan',
    href: '/dashboard/periksa-kehamilan',
    icon: Icon.Kehamilan,
    role: 'bidan',
  },
  {
    name: 'Manajemen Akun',
    href: '/dashboard/manajemen-akun',
    icon: Icon.ManajemenAkun,
    role: 'superadmin',
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  // FIXME: Fix this ts error
  const session: any = useSession();
  if (!session) {
    alert('Data error');
  }

  const role = session?.data?.user.role;

  // Filter links based on role and 'both' role
  const filteredLinks = links.filter(
    (link) => link.role === role || link.role === 'both',
  );

  // Check if the current pathname exists in filtered links
  const isRedirect = filteredLinks.some((link) => link.href === pathname);
  if (!isRedirect) {
    redirect('/dashboard');
  }

  return (
    <div className="space-y-2">
      {filteredLinks.map((link, i) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600':
                  i === 0
                    ? pathname === link.href
                    : pathname.startsWith(link.href),
              },
            )}
          >
            <LinkIcon className="h-8 w-6" />
            <p className="hidden font-semibold md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
