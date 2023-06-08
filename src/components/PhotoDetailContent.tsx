import { formatDistance } from 'date-fns';
import { Calendar, Camera, MapPin, Maximize2, Minimize2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';
import type { UnsplashResponse } from '@/type';
import { blurHashToDataURL } from '@/utils/blurhashDataURL';

import { Button } from './ui/button';

const PhotoDetailContent = ({ photo }: { photo: UnsplashResponse }) => {
  const blurDataUrl = blurHashToDataURL(photo.blur_hash);
  const date = new Date(photo.created_at);
  const timeAgo = formatDistance(date, new Date(), { addSuffix: true });

  const [zoomed, setZoomed] = React.useState(false);

  const toggleZommed = () => {
    setZoomed(prev => !prev);
  };
  return (
    <div>
      <div
        className={cn(
          'md:w-1/2 w-full mx-auto mt-6 cursor-zoom-in transition duration-100 relative',
          {
            'md:w-full cursor-zoom-out': zoomed,
          },
        )}>
        <Image
          onClick={toggleZommed}
          src={photo.urls.regular}
          alt={photo.blur_hash}
          placeholder="blur"
          blurDataURL={blurDataUrl}
          width={photo.width}
          height={photo.height}
        />
        <Button className="absolute top-4 right-4 hidden md:block">
          {zoomed ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
        </Button>
      </div>
      <div className="p-4">
        <div className="flex flex-col space-y-2 font-medium">
          {photo?.location?.name && (
            <div className="flex items-center space-x-3">
              <MapPin className="h-4 w-4" />
              <span className="md:text-sm text-xs text-gray-900">{photo?.location?.name}</span>
            </div>
          )}

          <div className="flex items-center space-x-3">
            <Calendar className="h-4 w-4" />
            <span className="md:text-sm text-xs text-gray-900">Published {timeAgo}</span>
          </div>
          {photo?.exif?.name && (
            <div className="flex items-center space-x-3">
              <Camera className="h-4 w-4" />
              <span className="md:text-sm text-xs text-gray-900">{photo?.exif?.name}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center mt-4">
          {photo.tags.map(tag => {
            return (
              <div
                key={tag.title}
                className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md mr-2 mb-2">
                {tag.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailContent;
