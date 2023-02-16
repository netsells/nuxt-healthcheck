import { fromNodeMiddleware } from 'h3';

export default fromNodeMiddleware((req, res, next) => {
  if (req.url !== '/healthcheck') {
    next();
    return;
  }

  res.setHeader('Content-Type', 'text/plain');
  res.end('OK');
});
