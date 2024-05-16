import { z } from 'zod';

export const bidanFormSchema = z.object({
  email: z
    .string({ required_error: 'Silahkan Masukkan Email' })
    .email({ message: 'Email harus valid' }),
  full_name: z.string({ required_error: 'Silahkan Mengisi Nama Panjang' }),
  username: z.string({ required_error: 'Silahkan Mengisi Username' }),
  password: z.string({ required_error: 'Silahkan Mengisi Password' }),
  phone_number: z.coerce.number({
    required_error: 'Silahkan Mengisi Nomor Telepon',
    invalid_type_error: 'Silahkan Mengisi Nomor Telepon',
  }),
});

export const defaultValues: Partial<z.infer<typeof bidanFormSchema>> = {
  email: 'safsfa@gmail.com',
  full_name: 'sadad',
  username: '234',
  password: '2323@asdAsada',
  phone_number: 23235235,
};
