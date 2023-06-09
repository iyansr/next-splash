'use client';

import { Facebook, Share2, Twitter } from 'lucide-react';
import React from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { facebookShare, twitterShare } from '@/lib/utils';
import type { UnsplashResponse } from '@/type';

import { Button } from './ui/button';

const ShareButton = ({ photo }: { photo: UnsplashResponse }) => {
  const handleShareFacebook = () => {
    facebookShare(photo.links.html);
  };

  const handleShareTwitter = () => {
    twitterShare(photo.links.html);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button size="sm">
          <Share2 className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Share</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <div onClick={handleShareFacebook} className="cursor-pointer flex items-center space-x-2">
            <Facebook className="h-4 w-4" /> <span>Facebook</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <div onClick={handleShareTwitter} className="cursor-pointer flex items-center space-x-2">
            <Twitter className="h-4 w-4" /> <span>Twitter</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShareButton;
