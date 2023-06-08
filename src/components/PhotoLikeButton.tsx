'use client';

import { Heart } from 'lucide-react';
import React from 'react';
import type { MouseEvent } from 'react';

import useLikedStore from '@/hooks/useLikedStore';
import { cn } from '@/lib/utils';
import type { UnsplashResponse } from '@/type';

import { Button } from './ui/button';

const PhotoLikeButton = ({
  photo,
  isDetail = false,
}: {
  isDetail?: boolean;
  photo: UnsplashResponse;
}) => {
  const { isLiked, like, unlike } = useLikedStore(state => state);

  const liked = isLiked(photo);

  const toggleLike = (e: MouseEvent): void => {
    e.preventDefault();
    if (liked) {
      unlike(photo);
    } else {
      like(photo);
    }
  };

  return (
    <Button
      size="sm"
      className="relative z-10"
      variant={isDetail ? 'default' : 'secondary'}
      onClick={toggleLike}>
      <Heart
        className={cn('h-4 w-4', {
          'text-red-400': liked,
        })}
      />
    </Button>
  );
};

export default PhotoLikeButton;
