'use client';

import * as React from 'react';
import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { BACKEND_URL } from '../api';

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();
  const [deleting, setDeleting] = React.useState(false);

  async function handleDelete() {
    if (!window.confirm('Delete this destination? This cannot be undone.'))
      return;
    setDeleting(true);
    try {
      const res = await fetch(`${BACKEND_URL}/destinations/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error(`Delete failed (${res.status})`);
      router.push('/destinations');
      router.refresh();
    } catch (error) {
      console.error(error);
      window.alert('Failed to delete. Is the backend running on port 8000?');
      setDeleting(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={deleting}
      className="inline-flex items-center gap-1.5 rounded-md border border-destructive/30 px-4 py-2 text-sm text-destructive transition-colors hover:bg-destructive/10 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Trash2 className="size-4" />
      {deleting ? 'Deleting…' : 'Cancel'}
    </button>
  );
}
