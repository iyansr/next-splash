import { useCallback, useEffect, useState } from 'react';

import { searchPhoto } from '@/service/photo';
import type { UnsplashResponse } from '@/type';

function useSearchPhoto(query?: string, page = 1) {
  const [photoList, setPhotoList] = useState<UnsplashResponse[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearchPhoto = useCallback(
    async (_query?: string, _page = 1) => {
      if (!query) return;
      setLoading(true);
      const response = await searchPhoto({ query, page: _page });
      setPhotoList(response.results);
      setLoading(false);
    },
    [query],
  );

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    handleSearchPhoto(query, page);
  }, [query, page, handleSearchPhoto]);

  return { photoList, loading };
}

export default useSearchPhoto;
