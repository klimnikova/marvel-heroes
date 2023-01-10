import { AxiosRequestConfig } from 'axios';
import { v4 as uuidv4 } from 'uuid';
import md5 from 'md5';

type Request = {
  request: AxiosRequestConfig;
};

interface RequestConfig extends AxiosRequestConfig {
  params: {
    apikey: string;
    ts: string;
    hash: string;
  };
}

const addAuthParams = ({ request }: Request): RequestConfig => {
  const timestamp = uuidv4();
  const newRequest = {
    ...request,
    params: {
      ...request.params,
      apikey: process.env.REACT_APP_MARVEL_PUBLIC_KEY || '',
      hash: md5(
        timestamp +
          process.env.REACT_APP_MARVEL_PRIVATE_KEY +
          process.env.REACT_APP_MARVEL_PUBLIC_KEY
      ),
      ts: timestamp,
    },
  } as RequestConfig;

  return newRequest;
};

export default addAuthParams;
