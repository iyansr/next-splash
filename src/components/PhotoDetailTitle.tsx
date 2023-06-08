import { Download, Share2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import type { UnsplashResponse } from '@/type';

import PhotoLikeButton from './PhotoLikeButton';
import { Button } from './ui/button';

const PhotoDetailTitle = ({ photo }: { photo: UnsplashResponse }) => {
  return (
    <div className="px-6 pt-6">
      <div className="relative flex items-center space-x-2 flex-1">
        <Image
          src={photo.user.profile_image.medium}
          alt={photo.user.first_name}
          width={32}
          height={32}
          className="h-8 w-8 rounded-full object-cover"
        />
        <p className="font-semibold text-sm truncate">{photo.user.name}</p>
      </div>

      <div className="flex items-center space-x-2 mt-4">
        <div className="flex-1 flex items-center space-x-2">
          <PhotoLikeButton photo={photo} isDetail />
          <Button size="sm">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        <div>
          <Link target="_blank" href={photo.urls.raw} download={true}>
            <Button size="sm" className="text-xs">
              <Download className="mr-2 h-4 w-4" /> Download
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailTitle;
