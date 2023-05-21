import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const cookiePrefix = process.env.NODE_ENV === 'production' ? '__Secure-' : '';

  const token = request.cookies.get(cookiePrefix + 'next-auth.session-token');

  if (!token) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/m', request.url));
}
