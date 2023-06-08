import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type { UnsplashResponse } from '@/type';

interface LovedState {
  isLiked: (photo: UnsplashResponse) => boolean;
  like: (photo: UnsplashResponse) => void;
  photos: UnsplashResponse[];
  unlike: (photo: UnsplashResponse) => void;
}

const useLikedStore = create<LovedState>()(
  devtools(
    persist(
      (set, get) => ({
        photos: [],
        like: photo => set(state => ({ photos: [...state.photos, photo] })),
        unlike: photo => set(state => ({ photos: state.photos.filter(i => i.id !== photo.id) })),
        isLiked: photo =>
          get().photos.find(p => p.id === photo.id) !== undefined || get().photos.includes(photo),
      }),
      {
        name: 'loved-image',
      },
    ),
  ),
);

export default useLikedStore;
