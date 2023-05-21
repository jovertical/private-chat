import { Contact } from '@prisma/client';
import { NextRequest } from 'next/server';

import { extendedDb as db } from '@/utils/db';
import * as response from '@/utils/http/response';

export async function GET(request: NextRequest) {
  const userId = request.headers.get('X-User-Id');

  if (!userId) {
    return response.unauthorized();
  }

  const { searchParams } = request.nextUrl;

  const page = parseInt(searchParams.get('page') ?? '1');
  const perPage = parseInt(searchParams.get('perPage') ?? '5');

  const contacts = await db.contact.paginate<Contact>({
    where: { ownerId: parseInt(userId) },
    include: { owner: true, contact: true },
    page,
    perPage,
  });

  return response.json(contacts);
}
