import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { secureHeaders } from 'hono/secure-headers';
import { serve } from '@hono/node-server';

const app = new Hono();

// Apply secure headers (Helmet-like)
app.use('*', secureHeaders());

// Configure CORS
app.use(
  '*',
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowHeaders: ['Content-Type', 'Authorization'],
    exposeHeaders: ['Content-Length'],
    maxAge: 600,
    credentials: true,
  })
);

app.get('/', (c) => {
  return c.json({
    message: 'Welcome to Hono backend',
    version: '1.0.0',
  });
});

app.get('/health', (c) => {
  return c.json({ status: 'ok' });
});

const port = Number(process.env.PORT) || 3001;

console.log(`🚀 Server started on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
