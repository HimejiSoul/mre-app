import PatientChart from '@/app/ui/dashboard/patient-chart';
import { urbanist } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { RevenueChartSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';

export default function Page() {
  return (
    <main className="rounded-2xl bg-[#D0E4FF] p-5 pt-8">
      <h1
        className={`${urbanist.className} mb-4 text-xl font-bold md:text-2xl`}
      >
        Total Pasien tiap Layanan
      </h1>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <PatientChart />
        </Suspense>
        {/* <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense> */}
      </div>
    </main>
  );
}
