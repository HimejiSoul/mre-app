import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ApexChart from './apex-chart';
import { fetchChart } from '@/lib/data';

export default async function PatientChartBaru() {
  const [chartAll, chartKB, chartKehamilan, chartImunisasi] = await Promise.all(
    [fetchChart(null), fetchChart(0), fetchChart(1), fetchChart(2)],
  );

  const monthsAll = chartAll.map((item: any) => item.month);
  const revenuesAll = chartAll.map((item: any) => item.revenue);

  const monthsKB = chartKB.map((item: any) => item.month);
  const revenuesKB = chartKB.map((item: any) => item.revenue);

  const monthsKehamilan = chartKehamilan.map((item: any) => item.month);
  const revenuesKehamilan = chartKehamilan.map((item: any) => item.revenue);

  const monthsImunisasi = chartImunisasi.map((item: any) => item.month);
  const revenuesImunisasi = chartImunisasi.map((item: any) => item.revenue);

  return (
    <div className="rounded-lg bg-white p-3">
      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="0">Keluarga Berencana</TabsTrigger>
          <TabsTrigger value="1">Periksa Kehamilan</TabsTrigger>
          <TabsTrigger value="2">Imunisasi</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <ApexChart months={monthsAll} revenues={revenuesAll} />
        </TabsContent>
        <TabsContent value="0">
          <ApexChart months={monthsKB} revenues={revenuesKB} />
        </TabsContent>
        <TabsContent value="1">
          <ApexChart months={monthsKehamilan} revenues={revenuesKehamilan} />
        </TabsContent>
        <TabsContent value="2">
          <ApexChart months={monthsImunisasi} revenues={revenuesImunisasi} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
