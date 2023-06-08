'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { UnsplashResponse } from '@/type';

import PhotoDetailContent from './PhotoDetailContent';
import PhotoDetailTitle from './PhotoDetailTitle';

const PhotoModal = ({ photo }: { photo: UnsplashResponse }) => {
  const router = useRouter();

  return (
    <Dialog
      defaultOpen
      onOpenChange={open => {
        if (!open) {
          router.back();
        }
      }}>
      <DialogContent className="px-0">
        <DialogHeader>
          <DialogTitle asChild>
            <PhotoDetailTitle photo={photo} />
          </DialogTitle>
          <DialogDescription asChild>
            <PhotoDetailContent photo={photo} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoModal;
