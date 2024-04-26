import { SectionTitle } from '@/app/ui/section-title';
import { fetchPatientById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import EditKBForm from '@/app/ui/keluarga-berencana/edit-kb-form';
export default async function Page({ params }: { params: { id: string } }) {
  const id_pasien = params.id;
  const patientData = await fetchPatientById(id_pasien);
  // console.log(id_pasien);
  if (!patientData) {
    notFound();
  }
  return (
    <main>
      <SectionTitle>Tambah Pasien Layanan Keluarga Berencana</SectionTitle>
      <EditKBForm patient={patientData} id_pasien={id_pasien} />
    </main>
  );
}
