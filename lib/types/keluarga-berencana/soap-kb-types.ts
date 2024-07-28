import { z } from 'zod';

export const soapKBSchema = z.object({
  tglDatang: z
    .string()
    .or(z.date())
    .transform((arg) => new Date(arg)),
  s: z.string().optional(),
  o: z.object({
    td: z.string().optional(),
    bb: z.string().optional(),
    hpht: z.string().optional(),
    lain2: z.string().optional(),
  }),
  a: z.string().optional(),
  p: z.string().optional(),
});

export const defaultValues: Partial<z.infer<typeof soapKBSchema>> = {
  tglDatang: new Date(),
  s: 'Lorem Ipsum',
  o: {
    td: 'Lorem Ipsum',
    bb: 'Lorem Ipsum',
    hpht: 'Lorem Ipsum',
    lain2: 'Lorem Ipsum',
  },
  a: 'Lorem Ipsum',
  p: 'Lorem Ipsum',
};
