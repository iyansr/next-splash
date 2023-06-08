import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import type { UnsplashResponse } from '@/type';
import { blurHashToDataURL } from '@/utils/blurhashDataURL';

import PhotoLikeButton from './PhotoLikeButton';

const PhotoItem = React.forwardRef<HTMLDivElement, { photo: UnsplashResponse }>(
  ({ photo }, ref) => {
    const blurDataUrl = blurHashToDataURL(photo.blur_hash);

    return (
      <div className="relative overflow-hidden" ref={ref}>
        <Link href={`/photo/${photo.id}`}>
          <Image
            src={photo.urls.regular}
            alt={photo.blur_hash}
            placeholder="blur"
            blurDataURL={blurDataUrl}
            width={photo.width}
            height={photo.height}
            className="aspect-square object-cover"
          />
          <div className="absolute opacity-0 hover:opacity-100 z-10 transition-opacity duration-200 bg-black/30 inset-0 p-4 md:p-8 text-white flex flex-col">
            <div className="relative flex items-center space-x-2">
              <Image
                src={photo.user.profile_image.medium}
                alt={photo.user.first_name}
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
              />
              <p className="font-semibold md:text-sm text-xs truncate">{photo.user.name}</p>
            </div>
            <div className="mt-auto">
              <PhotoLikeButton photo={photo} />
            </div>
          </div>
        </Link>
      </div>
    );
  },
);

PhotoItem.displayName = 'PhotoItem';

export default PhotoItem;
