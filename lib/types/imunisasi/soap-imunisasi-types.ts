import { z } from 'zod';

export const ENUM_VALUES = {
  boolean: ['true', 'false', ''],
  jenisKelamin: ['Laki-Laki', 'Perempuan', ''],
} as const;

export const soapImunisasiFormSchema = z.object({
  tglDatang: z
    .string()
    .or(z.date())
    .transform((arg) => new Date(arg)),
  s: z.string().optional(),
  o: z.object({
    td: z.string().optional(),
    pb: z.string().optional(),
    lk: z.string().optional(),
    lain2: z.string().optional(),
  }),
  a: z.string().optional(),
  p: z.string().optional(),
});

export const defaultValues: Partial<z.infer<typeof soapImunisasiFormSchema>> = {
  tglDatang: new Date(),
  s: 'Lorem Ipsum',
  o: {
    td: 'Lorem Ipsum',
    pb: 'Lorem Ipsum',
    lk: 'Lorem Ipsum',
    lain2: 'Lorem Ipsum',
  },
  a: 'Lorem Ipsum',
  p: 'Lorem Ipsum',
};
