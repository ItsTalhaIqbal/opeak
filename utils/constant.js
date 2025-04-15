const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : 'https://opeak-backend.vercel.ap';

export { baseURL };
