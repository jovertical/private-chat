import { PrismaClient } from '@prisma/client';

import paginate from '@/lib/prisma/client-extensions/paginate';

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

// prettier-ignore
export const db = globalForPrisma.prisma ?? new PrismaClient({
  log: ['query'],
});

export const extendedDb = db.$extends(paginate);

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db;
}
