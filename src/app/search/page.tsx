'use client';

import PhotoItem from '@/components/PhotoItem';
import useSearchPhoto from '@/hooks/useSearchPhoto';

export const revalidate = 0;

type Props = {
  searchParams: {
    query?: string;
  };
};

export default function Search({ searchParams }: Props) {
  const { query = '' } = searchParams;
  const { photoList, loading } = useSearchPhoto(query);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 p-2">
        {photoList.map((item, index) => {
          return <PhotoItem photo={item} key={item.id + String(index)} />;
        })}
      </div>
    </main>
  );
}
