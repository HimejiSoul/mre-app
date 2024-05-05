import { redirect } from 'next/navigation';

export default function Page() {
  //we dont need landing page so why this page exist? 😙
  redirect('/login');
}
