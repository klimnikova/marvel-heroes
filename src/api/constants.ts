export const BASE_API_URL =
  process.env.NODE_ENV === 'production'
    ? `${String(process.env.REACT_APP_API_URL)}`
    : `/dev`;

export const UNAUTHORIZED_STATUS_CODE = 401;
