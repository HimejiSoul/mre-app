'use client';
import * as Icon from '../icons';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import { Skeleton } from '@/components/ui/skeleton';
import { Loader2Icon } from 'lucide-react';
import { useEffect, useState } from 'react';

// Map of links to display in the side navigation.
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
    name: 'Imunisasi',
    href: '/dashboard/imunisasi',
    icon: Icon.Imunisasi,
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
  // FIXME: Fix this ts error
  const session: any = useSession();
  const pathname = usePathname();
  const [loadingStates, setLoadingStates] = useState<{
    [key: string]: boolean;
  }>({});
  useEffect(() => {
    setLoadingStates({});
  }, [pathname]);

  const handleClick = (linkHref: string) => {
    setLoadingStates((prevStates) => ({
      ...prevStates,
      [linkHref]: true,
    }));
  };

  if (session.status === 'loading' || !session?.data?.user) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-[48px] w-full bg-slate-200" />
        <Skeleton className="h-[48px] w-full bg-slate-200" />
        <Skeleton className="h-[48px] w-full bg-slate-200" />
      </div>
    );
  }

  let role = 'both';
  if (session && session.data && session.data.user) {
    role = session.data.user.role;
  } else {
    const errorMessage = session
      ? 'User data not found in session'
      : 'Session data not found';
    console.error(errorMessage);
  }

  // Filter links based on role and 'both' role
  const filteredLinks = links.filter(
    (link) => link.role === role || link.role === 'both',
  );

  // Check if the path is need to redirect
  let isRedirect = false;
  if (
    pathname === '/dashboard' ||
    filteredLinks.slice(1).some((link) => pathname.startsWith(link.href))
  ) {
    isRedirect = true;
  }
  if (!isRedirect) {
    redirect('/dashboard');
  }

  return (
    <div className="space-y-2">
      {filteredLinks.map((link, i) => {
        const LinkIcon = link.icon;
        const isLoading = loadingStates[link.href] || false;

        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => handleClick(link.href)}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium transition duration-200 ease-out hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600':
                  i === 0
                    ? pathname === link.href
                    : pathname.startsWith(link.href),
              },
            )}
          >
            {isLoading ? (
              <Loader2Icon size={20} className="mr-2 animate-spin" />
            ) : (
              <LinkIcon className="h-8 w-6" />
            )}
            <p className="hidden font-semibold md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
