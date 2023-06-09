'use server';

import type { SearchResponse, UnsplashResponse } from '@/type';

import axiosInstance from './axios';

export type PhotoResponse = {
  data: UnsplashResponse[];
  has_next_page: boolean;
  next_page: number;
  per_page: number;
  previous_page: number;
  total_item: number;
  total_page: number;
};

export async function fetchPhotoList({ page = 1 }): Promise<PhotoResponse> {
  const perPage = 30;
  const response = await axiosInstance.request<UnsplashResponse[]>({
    method: 'GET',
    url: 'photos',
    params: {
      page,
      per_page: perPage,
    },
  });

  const totalItem: number = parseInt(response.headers['x-total'] as string);
  const totalPage: number = Math.ceil(totalItem / perPage);

  return {
    data: response.data,
    total_page: totalPage,
    next_page: page + 1,
    previous_page: page - 1,
    has_next_page: page < totalPage,
    total_item: totalItem,
    per_page: perPage,
  };
}

export async function searchPhoto({ page = 1, query = '' }): Promise<SearchResponse> {
  const response = await axiosInstance.request<SearchResponse>({
    method: 'GET',
    url: 'search/photos',
    params: {
      page,
      query: encodeURIComponent(query),
    },
  });

  return response.data;
}

export async function fetchDetailPhoto(id: string): Promise<UnsplashResponse> {
  const response = await axiosInstance.request<UnsplashResponse>({
    method: 'GET',
    url: `photos/${id}`,
  });

  return response.data;
}
