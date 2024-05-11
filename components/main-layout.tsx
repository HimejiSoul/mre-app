import { urbanist } from '@/app/ui/fonts';

export function Heading({
  title,
  totalPatient,
}: {
  title: string;
  totalPatient: number;
}) {
  return (
    <div className="flex w-full flex-col justify-between">
      <h1 className={`${urbanist.className} text-2xl font-bold`}>{title}</h1>
      <span className="font-sm font-medium text-[#6F90BA]">
        Total {totalPatient} Pasien
      </span>
    </div>
  );
}

export function MainContainer({ children }: { children: React.ReactNode }) {
  return <div className="w-full rounded-2xl bg-[#D0E4FF] p-5">{children}</div>;
}
