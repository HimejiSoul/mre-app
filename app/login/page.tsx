import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <img
        src="/loginPage/eclipse-3.svg"
        className="absolute left-0 top-0 h-[200px] w-[200px]"
      />
      <img
        src="/loginPage/rectangle-1.svg"
        className="absolute bottom-7 right-7 h-[200px] w-[200px]"
      />
      <img
        src="/loginPage/vector-1.svg"
        className="absolute right-0 top-0 z-0 h-[500px] w-[600px]"
      />
      <img
        src="/loginPage/vector-2.svg"
        className="absolute bottom-0 left-0 z-0 h-[500px] w-[600px]"
      />
      <div className="relative">
        <LoginForm />
      </div>
    </main>
  );
}
