/* eslint-disable @typescript-eslint/no-namespace */
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      UNSPLASH_ACCESS_KEY: string;
      UNSPLASH_SECRET_KEY: string;
    }
  }
}

export interface UnsplashResponse {
  alt_description: string;
  blur_hash: string;
  color: string;
  created_at: string;
  current_user_collections: any[];
  description: any;
  exif: {
    name: string;
  };
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: Links;
  location: Location;
  promoted_at: any;
  slug: string;
  sponsorship: Sponsorship;
  tags: Tag[];
  updated_at: string;
  urls: Urls;
  user: User;
  width: number;
}
export type SearchResponse = {
  results: UnsplashResponse[];
  total: number;
  total_pages: number;
};

export interface Urls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
}

export interface Links {
  download: string;
  download_location: string;
  html: string;
  self: string;
}

export interface Sponsorship {
  impression_urls: string[];
  sponsor: Sponsor;
  tagline: string;
  tagline_url: string;
}

export interface Sponsor {
  accepted_tos: boolean;
  bio: string;
  first_name: string;
  for_hire: boolean;
  id: string;
  instagram_username: any;
  last_name: string;
  links: Links2;
  location: any;
  name: string;
  portfolio_url: string;
  profile_image: ProfileImage;
  social: Social;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  twitter_username: any;
  updated_at: string;
  username: string;
}

export interface Links2 {
  followers: string;
  following: string;
  html: string;
  likes: string;
  photos: string;
  portfolio: string;
  self: string;
}

export interface ProfileImage {
  large: string;
  medium: string;
  small: string;
}

export interface Social {
  instagram_username: any;
  paypal_email: any;
  portfolio_url: string;
  twitter_username: any;
}

export interface User {
  accepted_tos: boolean;
  bio: string;
  first_name: string;
  for_hire: boolean;
  id: string;
  instagram_username: any;
  last_name: string;
  links: Links3;
  location: any;
  name: string;
  portfolio_url: string;
  profile_image: ProfileImage2;
  social: Social2;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  twitter_username: any;
  updated_at: string;
  username: string;
}

export interface Links3 {
  followers: string;
  following: string;
  html: string;
  likes: string;
  photos: string;
  portfolio: string;
  self: string;
}

export interface ProfileImage2 {
  large: string;
  medium: string;
  small: string;
}

export interface Social2 {
  instagram_username: any;
  paypal_email: any;
  portfolio_url: string;
  twitter_username: any;
}

export interface Tag {
  title: string;
}

export interface Location {
  city: string;
  country: string;
  name: string;
  position: {
    latitude: number;
    longitude: number;
  };
}
