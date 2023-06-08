import React from 'react';

import PhotoModal from '@/components/PhotoModal';
import { fetchDetailPhoto } from '@/service/photo';

type Props = {
  params: {
    id: string;
  };
};

const Photo = async ({ params: { id } }: Props) => {
  const currentPhoto = await fetchDetailPhoto(id);

  return <PhotoModal photo={currentPhoto} />;
};

export default Photo;
