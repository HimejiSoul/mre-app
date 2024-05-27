'use client';

import { urbanist } from '../fonts';
import { Profile } from '@/components/Profile';
import AuthProvider from '@/components/AuthProvider';
import { Calendar } from '@/components/ui/calendar';
import { useEffect, useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { fetchReservasi } from '@/lib/data';

export default function Rightbar() {
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

    const isoDateString = date.toISOString();
    const [isoDate] = isoDateString.split('T');

    return isoDate;
  };

  return (
    <div className="flex h-screen flex-col gap-6 bg-white p-4 pt-6">
      <div className="font-base flex h-10 flex-row justify-end gap-3 text-right text-sm">
        <AuthProvider>
          <Profile />
        </AuthProvider>
      </div>
      <div className="flex flex-col font-bold text-black">
        <p className={`${urbanist.className} text-lg`}>Kalender</p>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="self-center"
        />
      </div>
      <Separator className="bg-[#C5D3E3]" />
      <div className="text-black">
        {date && (
          <div className={`${urbanist.className} text-lg font-bold`}>
            Reservasi Hari {formatDate(date)}
          </div>
        )}
        <div className="flex flex-row justify-between">
          <div className="h-10">
            <div className="text-sm">Nazwa Barokah Utari</div>
            <div className="text-xs font-normal text-[#A5A5A5]">
              Keluarga Berencana (KB)
            </div>
          </div>
          <div className="self-center text-xs text-[#A5A5A5]">18.30</div>
        </div>
      </div>
    </div>
  );
}
