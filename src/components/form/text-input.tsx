import * as React from 'react';

import { cx } from '@/utils';
import type { UseFormRegister } from 'react-hook-form';

interface Props extends React.ComponentPropsWithoutRef<'input'> {
  name: string;
  register: UseFormRegister<any>;
  required?: boolean;
}

export default function TextInput({
  name,
  register,
  required = false,
  className,
  ...props
}: Props) {
  return (
    <input
      {...props}
      {...register(name, { required })}
      className={cx(
        'block w-full rounded-md border-0 py-1.5 text-black/90 shadow-sm ring-1 ring-inset ring-primary/30 placeholder:text-black/40 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6',
        className
      )}
    />
  );
}
