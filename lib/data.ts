import { sql } from '@vercel/postgres';
import { CustomerField, InvoiceForm, User } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';
import axios, { AxiosResponse } from 'axios';

export async function fetchAllPatientFind(query: any, id_layanan: any) {
  noStore();
  let url = `${process.env.API_ENDPOINT_AZURE}/findpasien?id_layanan=${id_layanan}`;
  if (query != null) {
    url += `&keyword=${query}`;
  }
  try {
    const response: AxiosResponse<any> = await axios.get(url);
    const allDataPatient = response.data.id_pasien;
    // console.log(allDataPatient);
    return allDataPatient;
  } catch (error) {
    console.error('Database Error:', error);
    return [];
    // throw new Error('Failed to fetch card data.');
  }
}
export async function fetchAllPatientTable(id_layanan: any) {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${process.env.API_ENDPOINT}/all_pasien_endpoint/all_pasien?id_layanan=${id_layanan}`,
    );
    const allDataPatient = response.data.data;
    // console.log(allDataPatient);
    return allDataPatient;
  } catch (error) {
    console.error('Database Error:', error);
    // throw new Error('Failed to fetch card data.');
  }
}

export async function fetchPatientTable(id_pasien: any, id_layanan: any) {
  noStore();
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${process.env.API_ENDPOINT_AZURE}/table?id_pasien=${id_pasien}&id_layanan=${id_layanan}`,
    );
    const dataPatient = response.data.data;
    // console.log(dataPatient);
    return dataPatient;
  } catch (error) {
    console.error('Database Error:', error);
    // throw new Error('Failed to fetch card data.');
  }
}

export async function fetchPatientTableKehamilan(id_pasien: any) {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${process.env.API_ENDPOINT}/table_kehamilan/table_kehamilan?id_pasien=${id_pasien}`,
    );
    const dataPatient = response.data.data;
    // console.log(dataPatient);
    return dataPatient;
  } catch (error) {
    console.error('Database Error:', error);
    // throw new Error('Failed to fetch card data.');
  }
}
export async function fetchPatientTableImunisasi(id_pasien: any) {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${process.env.API_ENDPOINT_AZURE}/table?id_pasien=${id_pasien}&id_layanan=2`,
    );
    const dataPatient = response.data.data;
    // console.log(dataPatient);
    return dataPatient;
  } catch (error) {
    console.error('Database Error:', error);
    // throw new Error('Failed to fetch card data.');
  }
}
export async function fetchTableBidan(query: string) {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${process.env.API_ENDPOINT_AZURE}/getbidan?keyword=${query}`,
    );
    const dataBidan = response.data.data;
    // console.log(dataBidan);
    return dataBidan;
  } catch (error) {
    console.error('Database Error:', error);
    // throw new Error('Failed to fetch card data.');
  }
}

export async function fetchPatientById(id_pasien: any, id_layanan: any) {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${process.env.API_ENDPOINT_AZURE}/edit?id_pasien=${id_pasien}&id_layanan=${id_layanan}`,
    );
    const dataPatient = response.data.data;
    // console.log(dataPatient);
    return dataPatient;
  } catch (error) {
    console.error('Database Error:', error);
    // throw new Error('Failed to fetch card data.');
  }
}

export async function fetchKehamilanPatientById(id_pasien: any) {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${process.env.API_ENDPOINT}/edit_kehamilan/edit_kehamilan?id_pasien=${id_pasien}`,
    );
    const dataPatient = response.data.data;
    return dataPatient;
  } catch (error) {
    console.error('Database Error:', error);
    // throw new Error('Failed to fetch card data.');
  }
}
export async function fetchImunisasiPatientById(id_pasien: any) {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${process.env.API_ENDPOINT_AZURE}/editimunisasi?id_pasien=${id_pasien}`,
    );
    const dataPatient = response.data.data;
    // console.log(dataPatient);
    return dataPatient;
  } catch (error) {
    console.error('Database Error:', error);
    // throw new Error('Failed to fetch card data.');
  }
}

export async function fetchReservasi(tanggal: any) {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${process.env.API_ENDPOINT_AZURE}/getreservasi?tanggal=${tanggal}`,
    );
    const dataPatient = response.data.data;
    // console.log('data', dataPatient);
    return dataPatient;
  } catch (error) {
    console.error('Database Error:', error);
    // throw new Error('Failed to fetch card data.');
  }
}

export async function fetchChart(value?: any) {
  // console.log(value);
  noStore();
  try {
    let url = `${process.env.API_ENDPOINT_AZURE}/chart`;
    if (value != null) {
      url += `?id_layanan=${value}`;
    }
    const response: AxiosResponse<any> = await axios.get(url);
    const chart = response.data.data;
    return chart;
  } catch (error) {
    console.error('Database Error:', error);
    // throw new Error('Failed to fetch chart data.');
  }
}

export async function fetchPatientData(id_layanan: string) {
  const apiEndpoint = `${process.env.API_ENDPOINT_AZURE}/count`;
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${apiEndpoint}?id_layanan=${id_layanan}`,
    );
    const dataPatient = response.data;
    // console.log(jumlah_pasien);
    return dataPatient;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
