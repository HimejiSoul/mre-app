import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { urbanist } from '@/app/ui/fonts';
import { Revenue } from '@/app/lib/definitions';
import { fecthChart } from '@/app/lib/data';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function PatientChart() {
  const chart = await fecthChart();
  // console.table(revenue);
  const chartHeight = 350;
  // NOTE: comment in this code when you get to this point in the course

  const tabel = [
    { month: 'Jan', revenue: 10 },
    { month: 'Feb', revenue: 18 },
    { month: 'Mar', revenue: 22 },
    { month: 'Apr', revenue: 25 },
    { month: 'May', revenue: 23 },
    { month: 'Jun', revenue: 32 },
    { month: 'Jul', revenue: 35 },
    { month: 'Aug', revenue: 37 },
    { month: 'Sep', revenue: 25 },
    { month: 'Oct', revenue: 28 },
    { month: 'Nov', revenue: 30 },
    { month: 'Dec', revenue: 48 },
  ];

  const { yAxisLabels, topLabel } = generateYAxis(chart);

  if (!chart || chart.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      <h2
        className={`${urbanist.className} mb-4 text-xl font-bold md:text-2xl`}
      >
        Line Chart Graph Rekam Medis
      </h2>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <div className="rounded-xl bg-gray-50 p-4">
        <div className="sm:grid-cols-13 mt-0 flex items-end gap-4 rounded-md bg-white p-4">
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex "
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>
          <div className="grid w-full grid-cols-12 items-end gap-3">
            {chart.map((month: any) => (
              <div
                key={month.month}
                className="flex flex-col items-center gap-2 "
              >
                <div
                  className="w-full rounded-md bg-blue-300"
                  style={{
                    height: `${(chartHeight / topLabel) * month.revenue}px`,
                  }}
                ></div>
                <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                  {month.month}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Last 12 months</h3>
        </div>
      </div>
    </div>
  );
}
