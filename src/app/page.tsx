import PhotoList from '@/components/PhotoList';
import { fetchPhotoList } from '@/service/photo';

export const revalidate = 60;

export default async function Home() {
  const { data } = await fetchPhotoList({ page: 1 });
  return (
    <main>
      <PhotoList initialData={data} fetchData={fetchPhotoList} key={data[0].id} />
    </main>
  );
}
