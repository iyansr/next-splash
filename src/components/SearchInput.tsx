'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

import useDebounce from '@/hooks/useDebounce';
import useUpdated from '@/hooks/useUpdated';

export default function SearchInput() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const defaultValue = encodeURIComponent(searchParams.get('query') ?? '');
  const [value, setValue] = React.useState(defaultValue);

  const debouncedValue = useDebounce<string>(value, 1000);

  useUpdated(() => {
    if (debouncedValue) {
      const params = new URLSearchParams(searchParams as unknown as URLSearchParams);
      params.set('query', debouncedValue);
      router.push(`/search?${params.toString()}`);
    }
  }, [debouncedValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="md:px-6 p-2 pt-6 md:pt-0">
      <input
        type="text"
        placeholder="Search photo"
        value={value}
        onChange={handleChange}
        className="h-14 w-full rounded-md border px-4 py-2 text-sm focus:outline-4 focus:outline-gray-700 mb-4"
      />
    </div>
  );
}
