import { urbanist } from '@/components/fonts';
import { Suspense } from 'react';
import { RevenueChartSkeleton, CardsSkeleton } from '@/components/skeletons';
import CardWrapper from '@/components/dashboard/cards';
import PatientChartBaru from '@/components/dashboard/patient-chart-baru';

export default async function Page() {
  const currentMonth = new Date().toLocaleString('id-ID', { month: 'long' });

  return (
    <main className="rounded-2xl bg-[#D0E4FF] p-5 pt-8">
      <h1
        className={`${urbanist.className} mb-4 text-xl font-bold md:text-2xl`}
      >
        Total Layanan Bulan {currentMonth}
      </h1>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <PatientChartBaru />
        </Suspense>
        {/* <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense> */}
      </div>
    </main>
  );
}
