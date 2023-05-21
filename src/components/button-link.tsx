import Link from 'next/link';
import type { LinkProps } from 'next/link';

import { cx } from '@/utils';

interface Props extends LinkProps {
  className?: string;
  children: React.ReactNode;
}

export default function ButtonLink({ className, children, ...props }: Props) {
  return (
    <Link
      {...props}
      className={cx(
        'flex w-auto items-center justify-center rounded-md bg-primary px-3.5 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        className
      )}
    >
      {children}
    </Link>
  );
}
