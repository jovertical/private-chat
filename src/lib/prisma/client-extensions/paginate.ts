import { Prisma } from '@prisma/client';

import { db } from '@/utils/db';

export type PaginateArgs<T> = {
  where?: Prisma.Args<T, 'findMany'>['where'];
  include?: Prisma.Args<T, 'findMany'>['include'];
  select?: Prisma.Args<T, 'findMany'>['select'];
  page?: number;
  perPage?: number;
};

export default Prisma.defineExtension({
  name: 'paginate',
  model: {
    $allModels: {
      async paginate<T>({
        where,
        include,
        select,
        page = 1,
        perPage = 10,
      }: PaginateArgs<T>) {
        const ctx = Prisma.getExtensionContext(this);

        const result = await (ctx as any).findMany({
          where,
          include,
          select,
          take: perPage,
          skip: (page - 1) * perPage,
        });

        const total = await (ctx as any).count({ where });

        const nextPage = total > page * perPage ? page + 1 : null;
        const prevPage = page > 1 ? page - 1 : null;

        return {
          data: result as T[],
          meta: {
            page,
            perPage,
            prevPage,
            nextPage,
            total,
          },
        };
      },
    },
  },
});
