import { Button } from '@/components/ui/button';
import { RefreshCcw } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { Button as ButtonSubmit } from '@/app/ui/button';

// TODO: Fix ts data type
export function TableButtonGroup({ remove, append, fields, data }: any) {
  return (
    <div className="flex gap-2">
      <Button
        type="button"
        variant={'outline'}
        className="border-red-500 text-red-500 hover:text-red-600"
        onClick={() => remove(fields.length - 1)}
      >
        Hapus
      </Button>
      <Button
        type="button"
        className="w-full border-rme-blue-500 text-rme-blue-500 hover:text-rme-blue-500"
        variant={'outline'}
        onClick={() => append(data)}
      >
        Tambah
      </Button>
    </div>
  );
}

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    // <Button
    //   type="submit"
    //   aria-disabled={pending}
    //   className="w-fit bg-blue-600 hover:bg-blue-500"
    // >
    //   Tambah Pasien
    // </Button>
    <ButtonSubmit
      className="w-fit bg-blue-600 hover:bg-blue-500"
      aria-disabled={pending}
    >
      {pending ? (
        <>
          <RefreshCcw size={20} className="mr-2 animate-spin" /> Loading...
        </>
      ) : (
        'Tambah Pasien'
      )}
    </ButtonSubmit>
  );
}
