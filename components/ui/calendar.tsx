'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { cn } from '@/lib/utils';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const calendarStyles = {
  months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
  month: 'space-y-4',
  nav: 'space-x-1 flex items-center',
  table: 'w-full border-collapse space-y-1',
  head_row: 'flex',
  head_cell: 'text-black rounded-full md w-10 font-semibold text-[0.8rem]',
  row: 'flex w-full mt-0',
  cell: 'h-9 w-10 text-center text-sm p-0 relative rounded-full',
  day: 'h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-blue-500/20 text-black rounded-full',
  day_range_end: 'day-range-end',
  day_selected:
    'bg-blue-500 text-neutral-50 hover:bg-blue-600 focus:bg-blue-500 focus:text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50 dark:hover:text-neutral-900 dark:focus:bg-neutral-50 dark:focus:text-neutral-900',
  day_today:
    'text-black border border-blue-500 text-blue-500 hover:text-black ',
  day_outside: 'day-outside text-black/50',
  day_disabled: 'text-neutral-500 opacity-50 dark:text-neutral-400',
  day_range_middle:
    'aria-selected:bg-neutral-100 aria-selected:text-neutral-900 dark:aria-selected:bg-neutral-800 dark:aria-selected:text-neutral-50',
  day_hidden: 'invisible',
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-1', className)}
      classNames={{
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-semibold',
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        ...calendarStyles,
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

function CalendarLahir({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  // TODO: Maksimal umur yang ditampilkan?
  const currentYear = new Date().getFullYear();
  const xYearsAgo = currentYear - 75;

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-1', className)}
      classNames={{
        caption: 'text-normal flex justify-between pt-1 relative items-center',
        caption_label: 'text-sm font-semibold hidden',
        caption_dropdowns: 'space-y-2',
        ...calendarStyles,
        ...classNames,
      }}
      captionLayout="dropdown-buttons"
      fromYear={xYearsAgo}
      toYear={currentYear}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-6 w-6" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-66 w-6" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'CalendarLahir';

export { Calendar, CalendarLahir };
