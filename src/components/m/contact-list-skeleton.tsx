import type { ComponentPropsWithoutRef } from 'react';

import { cx } from '@/utils';

export default function ContactListSkeleton({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={cx(['-mx-2 space-y-1', className])} {...props}>
      {[...Array(5)].map((_, idx) => (
        <div
          key={idx}
          className="group flex items-center gap-x-3 rounded-md p-2"
        >
          <div className="inline-flex items-center justify-center rounded-full bg-black/20 animate-pulse h-8 w-8" />
          <div
            className={cx([
              'h-4 rounded-sm bg-black/20 animate-pulse',
              idx % 2 === 1 ? 'w-24' : 'w-28',
            ])}
          />
        </div>
      ))}
    </div>
  );
}
