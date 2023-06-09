'use client';

import React, { useEffect } from 'react';
import type { MouseEvent } from 'react';

import useLikedStore from '@/hooks/useLikedStore';
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
  const [mounted, setMounted] = React.useState(false);

  const toggleLike = (e: MouseEvent): void => {
    e.preventDefault();
    if (liked) {
      unlike(photo);
    } else {
      like(photo);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      size="sm"
      className="relative z-10"
      variant={isDetail ? 'default' : 'secondary'}
      onClick={toggleLike}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M30 11.75C30 20.5 17.0262 27.5825 16.4737 27.875C16.3281 27.9533 16.1654 27.9943 16 27.9943C15.8346 27.9943 15.6719 27.9533 15.5262 27.875C14.9738 27.5825 2 20.5 2 11.75C2.00232 9.69528 2.81958 7.72539 4.27248 6.27248C5.72539 4.81958 7.69528 4.00232 9.75 4C12.3313 4 14.5912 5.11 16 6.98625C17.4088 5.11 19.6688 4 22.25 4C24.3047 4.00232 26.2746 4.81958 27.7275 6.27248C29.1804 7.72539 29.9977 9.69528 30 11.75Z"
          fill={liked ? 'red' : 'gray'}
        />
      </svg>
    </Button>
  );
};

export default PhotoLikeButton;
