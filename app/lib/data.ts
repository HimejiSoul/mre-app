import { sql } from '@vercel/postgres';
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  User,
  Revenue,
} from './definitions';
import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';
import axios, { AxiosResponse } from 'axios';

export async function fetchAllPatientFind(query: any, id_layanan: any) {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${process.env.API_ENDPOINT_AZURE}/findpasien?keyword=${query}&id_layanan=${id_layanan}`,
    );
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
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${process.env.API_ENDPOINT_AZURE}/tablekb?id_pasien=${id_pasien}`,
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
      `${process.env.API_ENDPOINT_AZURE}/tableimunisasi?id_pasien=${id_pasien}`,
    );
    const dataPatient = response.data.data;
    // console.log(dataPatient);
    return dataPatient;
  } catch (error) {
    console.error('Database Error:', error);
    // throw new Error('Failed to fetch card data.');
  }
}
export async function fetchTableBidan() {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${process.env.API_ENDPOINT_AZURE}/getallbidan`,
    );
    const dataBidan = response.data.data;
    console.log(dataBidan);
    return dataBidan;
  } catch (error) {
    console.error('Database Error:', error);
    // throw new Error('Failed to fetch card data.');
  }
}

export async function fetchPatientById(id_pasien: any) {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${process.env.API_ENDPOINT}/edit_kb/edit_kb?id_pasien=${id_pasien}`,
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

export async function fecthChart() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${process.env.API_ENDPOINT_AZURE}/chart`,
    );
    const chart = response.data.data;
    console.log(chart);
    return chart;
  } catch (error) {
    console.error('Database Error:', error);
    // throw new Error('Failed to fetch card data.');
  }
}

export async function fetchLatestInvoices() {
  noStore();
  try {
    const data = await sql<LatestInvoiceRaw>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`;

    const latestInvoices = data.rows.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

export async function fetchPatientData(id_layanan: string) {
  const apiEndpoint = `${process.env.API_ENDPOINT_AZURE}/count`;
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${apiEndpoint}?id_layanan=${id_layanan}`,
    );
    const jumlah_pasien = response.data.jumlah;
    // console.log(jumlah_pasien);
    return jumlah_pasien;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

export async function fetchCardData() {
  noStore();
  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);

    const numberOfInvoices = Number(data[0].rows[0].count ?? '0');
    const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
    const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
    const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  noStore();
  try {
    const invoices = await sql<InvoicesTable>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchInvoicesPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`} OR
      invoices.amount::text ILIKE ${`%${query}%`} OR
      invoices.date::text ILIKE ${`%${query}%`} OR
      invoices.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchInvoiceById(id: string) {
  noStore();
  try {
    const data = await sql<InvoiceForm>`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${id};
    `;

    const invoice = data.rows.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
      amount: invoice.amount / 100,
    }));
    console.log(invoice);
    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchCustomers() {
  noStore();
  try {
    const data = await sql<CustomerField>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchFilteredCustomers(query: string) {
  noStore();
  try {
    const data = await sql<CustomersTableType>`
		SELECT
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.image_url,
		  COUNT(invoices.id) AS total_invoices,
		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
		FROM customers
		LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		  customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
	  `;

    const customers = data.rows.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));

    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
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
