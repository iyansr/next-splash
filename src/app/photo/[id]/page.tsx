import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import PhotoDetailContent from '@/components/PhotoDetailContent';
import PhotoDetailTitle from '@/components/PhotoDetailTitle';
import { Button } from '@/components/ui/button';
import { fetchDetailPhoto } from '@/service/photo';

type Props = {
  params: {
    id: string;
  };
};

const page = async ({ params: { id } }: Props) => {
  const currentPhoto = await fetchDetailPhoto(id);

  return (
    <div>
      <div className="p-4">
        <Link href="/">
          <Button variant="link">
            <ArrowLeft />
          </Button>
        </Link>
      </div>
      <PhotoDetailTitle photo={currentPhoto} />
      <PhotoDetailContent photo={currentPhoto} />
    </div>
  );
};

export default page;
