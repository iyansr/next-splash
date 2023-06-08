/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';

import React, { useCallback, useEffect, useRef } from 'react';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import type { PhotoResponse } from '@/service/photo';
import type { UnsplashResponse } from '@/type';

import PhotoItem from './PhotoItem';

type Props = {
  fetchData: ({ page = 1 }: { page: number }) => Promise<PhotoResponse>;
  initialData: UnsplashResponse[];
};

const PhotoList = ({ initialData, fetchData }: Props) => {
  const [pages, setPages] = React.useState([initialData]);
  const items = pages.flatMap(item => item);
  const currentPage = useRef(1);

  const ref = useRef<HTMLDivElement | null>(null);

  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  const loadMore = useCallback(
    async (page: number) => {
      const data = await fetchData({ page });
      setPages(prev => [...prev, data.data]);
    },
    [fetchData],
  );

  useEffect(() => {
    if (isVisible) {
      currentPage.current += 1;
      loadMore(currentPage.current);
    }
  }, [isVisible, loadMore]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap- p-2 md:p-6">
      {items.map((item, index) => {
        if (index === items.length - 1) {
          return <PhotoItem photo={item} key={item.id + String(index)} ref={ref} />;
        } else {
          return <PhotoItem photo={item} key={item.id + String(index)} />;
        }
      })}
    </div>
  );
};

export default PhotoList;
