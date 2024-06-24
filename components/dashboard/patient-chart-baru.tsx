'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { urbanist } from '@/components/fonts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { fecthChart } from '@/lib/data';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function PatientChartBaru() {
  const [layanan, setLayanan] = useState('0');
  const [revenues, setRevenue] = useState([]);

  const handleChange = (value: string) => {
    setLayanan(value);
  };

  useEffect(() => {
    // Example API call
    const fetchChartData = async () => {
      try {
        const response = await fecthChart();
        console.log(response);
        setRevenue(response.map((item: any) => item.revenue));
        const months = response.map((item: any) => item.month);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchChartData();
  }, [layanan]);

  // chart color
  const currentYear = new Date().getFullYear();

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: 'bg-blue-300',
      toolbar: {
        show: true,
      },
      height: 370,
    },
    colors: ['#4287f5'],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: '60%',
        columnWidth: '80%',
        borderRadius: [6],
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all',
      },
    },

    stroke: {
      show: true,
      width: 5,
      lineCap: 'butt',
      colors: ['transparent'],
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: 'rgba(0,0,0,0.1)',
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      tickAmount: 4,
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'Mei',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
    },
  };
  const seriescolumnchart: any = [
    {
      name: 'Pasien di bulan ini',
      data: [355, 390, 300, 350, 390, 180, 355, 390, 0, 0, 0, 0],
    },
  ];

  return (
    <>
      <div className="mb-2 flex justify-between">
        <h2 className={`${urbanist.className} text-xl font-bold md:text-2xl`}>
          Bar Chart Pasien Rekam Medis Tahun {currentYear}
        </h2>
        <div>
          <Select onValueChange={handleChange} value={layanan}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih Layanan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Keluarga Berencana</SelectItem>
              <SelectItem value="1">Periksa Kehamilan</SelectItem>
              <SelectItem value="2">Imunisasi</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="rounded-lg bg-white p-3">
        <Chart
          options={optionscolumnchart}
          series={seriescolumnchart}
          type="bar"
          height={400}
          width={'100%'}
        />
      </div>
    </>
  );
}
