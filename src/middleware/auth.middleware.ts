import { NextRequest } from 'next/server';
import authMiddleware from 'next-auth/middleware';

export async function middleware(request: NextRequest) {
  return authMiddleware(request as any);
}
