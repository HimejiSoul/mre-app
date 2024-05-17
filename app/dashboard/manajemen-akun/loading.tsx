import { Loader2Icon } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center gap-2">
      <Loader2Icon size={20} className="mr-2 animate-spin" />
      Loading
    </div>
  );
}
