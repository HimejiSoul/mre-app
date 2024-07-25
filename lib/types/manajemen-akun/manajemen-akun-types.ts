import { z } from 'zod';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

export const bidanFormSchema = z.object({
  // email: z
  //   .string({ required_error: 'Silahkan Masukkan Email' })
  //   .email({ message: 'Email harus valid' }),
  full_name: z.string({ required_error: 'Silahkan Mengisi Nama Panjang' }),
  username: z.string({ required_error: 'Silahkan Mengisi Username' }),
  password: z
    .string({ required_error: 'Silahkan Mengisi Password' })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password harus terdiri dari 1 huruf kapital, 1 huruf kecil, 1 angka, and 1 simbol.',
    ),
  phone_number: z.string({ required_error: 'Silahkan Mengisi No. HP' }),
});

export const defaultValues: Partial<z.infer<typeof bidanFormSchema>> = {
  // email: '',
  // full_name: '',
  // username: '',
  // password: '',
  // phone_number: '',
};
