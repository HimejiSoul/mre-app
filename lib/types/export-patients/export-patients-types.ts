import { z } from 'zod';

export const ENUM_VALUES = {
  layanan: ['Keluarga Berencana', 'Periksa Kehamilan', 'Imunisasi'],
} as const;

export const exportPatientsFormSchema = z.object({
  layanan: z.enum(ENUM_VALUES.layanan, {
    required_error: 'Pilih layanan untuk pencarian',
  }),
  date: z
    .object(
      {
        from: z.date(),
        to: z.date().optional(),
      },
      { required_error: 'Date is required.' },
    )
    .refine((date) => {
      return !!date.to;
    }, 'End Date is required.'),
});

export const defaultValues: Partial<z.infer<typeof exportPatientsFormSchema>> =
  {};
