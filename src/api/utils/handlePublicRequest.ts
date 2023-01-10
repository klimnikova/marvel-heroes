import { AxiosRequestConfig } from 'axios';

import axiosInstance from './axiosInstance';
import addAuthParams from './addAuthParams';

export const handlePublicRequest = async <T>(
  request: AxiosRequestConfig
): Promise<T> => {
  const requestWithHeaders = addAuthParams({
    request,
  });

  const { data } = (await axiosInstance(requestWithHeaders)) as { data: T };
  return data;
};
