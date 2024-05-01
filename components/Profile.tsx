import { useSession } from 'next-auth/react';

export function Profile() {
  // FIXME: Fix this ts error
  const session: any = useSession();
  if (!session) {
    alert('Data error');
  }
  const data = session?.data?.user;

  return (
    <div className="flex flex-col">
      <p className="font-bold capitalize">Hello, {data?.username}</p>
      <p className="text-xs text-blue-600">{data?.id}</p>
    </div>
  );
}
