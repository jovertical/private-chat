import { NextRequest } from 'next/server';

import { middleware as apiAuthMiddleware } from '@/middleware/api.auth.middleware';
import { middleware as authMiddleware } from '@/middleware/auth.middleware';
import { middleware as guestMiddleware } from '@/middleware/guest.middleware';

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/m')) {
    return authMiddleware(request);
  }

  if (request.nextUrl.pathname.startsWith('/auth')) {
    return guestMiddleware(request);
  }

  if (request.nextUrl.pathname.startsWith('/api/user')) {
    return apiAuthMiddleware(request);
  }
}
