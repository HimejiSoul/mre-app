'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import axios from 'axios';
import { isRedirectError } from 'next/dist/client/components/redirect';
import { kehamilanFormSchema } from '@/lib/types/periksa-kehamilan-types';
import { imunisasiFormSchema } from '@/lib/types/imunisasi/imunisasi-types';
import { soapKehamilanFormSchema } from '@/lib/types/soap-kehamilan-types';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

const UpdateInvoice = FormSchema.omit({ id: true, date: true });

const CreateInvoice = FormSchema.omit({ id: true, date: true });

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function editKBPatient(
  formData: FormData,
  id_pasien: any,
  id_layanan: any,
) {
  console.log(id_pasien);
  const KBData = {
    id_pasien: id_pasien,
    id_layanan: id_layanan,
    data: formData,
  };
  const apiEndpoint = `${process.env.API_ENDPOINT_AZURE}/edit`;
  try {
    const response = await axios.post(apiEndpoint, KBData);
    console.log(response.data);
    if (id_layanan == 0) {
      redirect(`/dashboard/keluarga-berencana`);
    } else if (id_layanan == 1) {
      redirect(`/dashboard/periksa-kehamilan`);
    } else if (id_layanan == 2) {
      redirect(`/dashboard/imunisasi`);
    } else {
      redirect(`/dashboard`);
    }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    console.error('Error:', error);
  }
}
export async function createKBPatient(formData: FormData) {
  const KBData = { data: formData };
  const apiEndpoint = `${process.env.API_ENDPOINT_AZURE}/inputkb`;
  try {
    const response = await axios.post(apiEndpoint, KBData);
    // console.log(response.data);
    const id = response.data.id_pasien;
    redirect(`/dashboard/keluarga-berencana/${id}/soap`);
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    console.error('Error:', error);
  }
}
export async function createKBSOAPPatient(formData: FormData, id: any) {
  const KBSOAPData = { data: { id_pasien: id, ...formData } };
  const apiEndpoint = `${process.env.API_ENDPOINT_AZURE}/soapkb`;
  try {
    const response = await axios.post(apiEndpoint, KBSOAPData);
    // console.log(response.data);
    redirect('/dashboard/keluarga-berencana');
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    console.error('Error:', error);
  }
}

export async function createKehamilanPatient(
  formData: z.infer<typeof kehamilanFormSchema>,
) {
  // Validation with Zod before data sent to database
  const response = kehamilanFormSchema.safeParse(formData);
  if (!response.success) {
    return console.error(response.error);
  }

  const data = { data: response.data };
  console.log(data.data.generalInformation.namaLengkap);

  // FIXME: Uncomment if zaidan already fix the endpoint
  // const apiEndpoint = `${process.env.API_ENDPOINT}/regist_kehamilan/regist_kehamilan`;
  // try {
  //   const response = await axios.post(apiEndpoint, data);
  //   const id = response.data.id_pasien;
  //   redirect(`/dashboard/periksa-kehamilan/${id}/create/soap`);
  // } catch (error) {
  //   if (isRedirectError(error)) {
  //     throw error;
  //   }
  //   console.error('Error:', error);
  // }
}

export async function editKehamilanPatient(
  formData: z.infer<typeof kehamilanFormSchema>,
  id_pasien: string | number,
) {
  // Validation with Zod before data sent to database
  const response = kehamilanFormSchema.safeParse(formData);
  if (!response.success) {
    return console.error(response.error);
  }

  const data = { data: response.data };
  console.log(id_pasien);
  console.log(data.data.generalInformation.namaLengkap);

  // FIXME: Uncomment if zaidan already fix the endpoint
  // const apiEndpoint = `${process.env.API_ENDPOINT}/edit_kehamilan/edit_kehamilan?id_pasien=${id_pasien}`;
  // try {
  //   const response = await axios.post(apiEndpoint, KBData);
  //   console.log(response.data);
  //   redirect(`/dashboard/periksa-kehamilan`);
  // } catch (error) {
  //   if (isRedirectError(error)) {
  //     throw error;
  //   }
  //   console.error('Error:', error);
  // }
}
export async function editImunisasiPatient(
  formData: z.infer<typeof imunisasiFormSchema>,
  id_pasien: string | number,
) {
  const apiEndpoint = `${process.env.API_ENDPOINT_AZURE}/editimunisasi`;
  const data = { data: formData, id_pasien: id_pasien };
  try {
    const response = await axios.post(apiEndpoint, data);
    console.log(response);
    redirect(`/dashboard/imunisasi`);
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    console.error('Error:', error);
  }
}

export async function createSoapKehamilanPatient(
  formData: z.infer<typeof soapKehamilanFormSchema>,
  id_pasien?: string | number,
) {
  // Validation with Zod before data sent to database
  const response = soapKehamilanFormSchema.safeParse(formData);
  if (!response.success) {
    return console.error(response.error);
  }

  const data = { data: { id_pasien: id_pasien, ...response.data } };
  // const apiEndpoint = `${process.env.API_ENDPOINT}/soap_kehamilan/soap_kehamilan`;
  // try {
  //   await axios.post(apiEndpoint, data);
  // } catch (error) {
  //   console.error('Error:', error);
  // }
  // redirect('/dashboard/periksa-kehamilan');
}

export async function createBidan(formData: FormData) {
  const data = { ...formData, role: 'bidan' };
  const apiEndpoint = `${process.env.API_ENDPOINT_AZURE}/registbidan`;
  // console.log('ini data', data);
  try {
    const response = await axios.post(apiEndpoint, data);
    console.log(response.data.message);
    // Return the response data first
    revalidatePath('/dashboard/manajemen-akun');
    return response.data.message;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message || 'Failed to create bidan';
      console.error(errorMessage);
      throw new Error(errorMessage);
    } else {
      console.error('Unexpected error', error);
      throw new Error('An unexpected error occurred');
    }
  }
}

export async function createImunisasiPatient(
  formData: z.infer<typeof imunisasiFormSchema>,
) {
  // Validation with Zod before data sent to database
  const response = imunisasiFormSchema.safeParse(formData);
  if (!response.success) {
    return console.error(response.error);
  }

  const data = { data: response.data };
  console.log(data);

  // FIXME: Uncomment if zaidan already fix the endpoint
  const apiEndpoint = `${process.env.API_ENDPOINT_AZURE}/inputimunisasi?`;
  try {
    const response = await axios.post(apiEndpoint, data);
    const id = response.data.id_pasien;
    redirect(`/dashboard/imunisasi/${id}/soap`);
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    console.error('Error:', error);
  }
}

export async function createSoapImunisasiPatient(formData: FormData, id: any) {
  const data = { data: { id_pasien: id, ...formData } };
  const apiEndpoint = `${process.env.API_ENDPOINT_AZURE}/soapimunisasi`;
  console.log(data);
  try {
    await axios.post(apiEndpoint, data);
  } catch (error) {
    console.error('Error:', error);
  }
  redirect('/dashboard/imunisasi');
}

export async function deleteBidan(id: any) {
  const apiEndpoint = `${process.env.API_ENDPOINT_AZURE}/deletebidan?id_bidan=${id}`;
  try {
    const response = await axios.get(apiEndpoint);
    console.log(response.data.message);
  } catch (error) {
    console.error('Error:', error);
  }
  // revalidatePath('/dashboard/manajemen-akun');
  // redirect('/dashboard/manajemen-akun');
}

export async function createInvoice(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  // Insert data into the database
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;

  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Delete Invoice',
    };
  }
  revalidatePath('/dashboard/invoices');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
