import Image from 'next/image';

export default function LoginPage({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex h-screen items-center justify-center">
      <BackgroundAssets />
      {children}
    </main>
  );
}

function BackgroundAssets() {
  return (
    <>
      <Image
        src="/svg/eclipse-3.svg"
        width={0}
        height={0}
        alt="Just an asset, doesn't matter"
        className="absolute left-0 top-0 h-auto w-[250px]"
      />
      <Image
        src="/svg/rectangle-1.svg"
        width={0}
        height={0}
        alt="Just an asset, doesn't matter"
        className="absolute bottom-8 right-8 h-auto w-[250px]"
      />
      <Image
        src="/svg/vector-1.svg"
        width={0}
        height={0}
        alt="Just an asset, doesn't matter"
        className="absolute right-0 top-0 h-auto w-[600px]"
      />
      <Image
        src="/svg/vector-2.svg"
        width={0}
        height={0}
        alt="Just an asset, doesn't matter"
        className="absolute bottom-0 left-0 h-auto w-[600px]"
      />
    </>
  );
}
