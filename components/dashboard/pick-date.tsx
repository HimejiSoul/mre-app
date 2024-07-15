'use client';

import { urbanist } from '../fonts';
import { Calendar } from '@/components/ui/calendar';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function PickDate() {
  const router = useRouter();
  const [date, setDate] = useState<Date | undefined>(new Date());

  const formatDate = (date: Date | undefined) => {
    if (!date) return '';
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatDateAPI = (date: Date | undefined) => {
    if (!date) return '';

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0'); // Get day of the month

    const formattedDate = `${year}-${month}-${day}`;
    // console.log(formattedDate);
    return formattedDate;
  };

  useEffect(() => {
    if (date) {
      Cookies.set('selectedDate', formatDateAPI(date));
    }
    console.log('Date changed:', String(date));
    router.refresh();
  }, [date, router]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col font-bold text-black">
        <p className={`${urbanist.className} text-lg`}>Kalender</p>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="self-center"
        />
      </div>
      <div>
        <Separator />
        <div className={`${urbanist.className} mt-3 text-lg font-bold`}>
          Reservasi Hari {formatDate(date)}
        </div>
      </div>
    </div>
  );
}
