import { ReactNode } from 'react';
import { urbanist } from '@/app/ui/fonts';

type TitleSectionProps = {
  title: string;
  subtitle: string;
};

export function TitleSection({ title, subtitle }: TitleSectionProps) {
  return (
    <div>
      <h1 className={`${urbanist.className} text-xl font-bold`}>{title}</h1>
      <p className="text-sm font-medium text-[#597395]">{subtitle}</p>
    </div>
  );
}

type FormWrapperProps = {
  children: ReactNode;
};

export function FormWrapper({ children }: FormWrapperProps) {
  return (
    <section className="w-full space-y-4 rounded-md bg-white p-6">
      {children}
    </section>
  );
}

type RowProps = {
  children: ReactNode;
};

export function Row({ children }: RowProps) {
  return <div className="grid grid-cols-12 gap-4">{children}</div>;
}
