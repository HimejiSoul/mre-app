import { Metadata } from 'next';
import { MainContainer } from '@/components/main-layout';
import { urbanist } from '@/components/fonts';
import { ExportPatients } from '@/components/export/export-patients';

export const metadata: Metadata = {
  title: 'Manajemen Akun',
};

export default function Page({}) {
  return (
    <MainContainer>
      <div className="flex w-full flex-col justify-between">
        <h1 className={`${urbanist.className} text-2xl font-bold`}>
          Export Data Pasien
        </h1>
        <span className="font-sm font-medium text-[#6F90BA]">
          Export data bro
        </span>
      </div>
      <ExportPatients />
    </MainContainer>
  );
}
