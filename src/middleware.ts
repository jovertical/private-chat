import { NextRequest, NextResponse } from 'next/server';

import { middleware as apiAuthMiddleware } from '@/middleware/api.auth.middleware';
import { middleware as authMiddleware } from '@/middleware/auth.middleware';
import { middleware as guestMiddleware } from '@/middleware/guest.middleware';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/m')) {
    return authMiddleware(request);
  }

  if (pathname.startsWith('/auth')) {
    return guestMiddleware(request);
  }

  if (pathname.startsWith('/api/user')) {
    return apiAuthMiddleware(request);
  }

  return NextResponse.next();
}
