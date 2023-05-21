import * as React from 'react';

import { cx } from '@/utils';
import type { UseFormRegister } from 'react-hook-form';

interface Props extends React.ComponentPropsWithoutRef<'textarea'> {
  name: string;
  register: UseFormRegister<any>;
  required?: boolean;
}

export default function Textarea({
  name,
  register,
  required = false,
  rows = 4,
  className,
  ...props
}: Props) {
  return (
    <textarea
      {...props}
      {...register(name, { required })}
      rows={rows}
      className={cx(
        'block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6',
        className
      )}
    />
  );
}
