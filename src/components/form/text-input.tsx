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
        'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6',
        className
      )}
    />
  );
}
