import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import { ComponentPropsWithoutRef, useMemo } from 'react';

import { cx } from '@/utils';

interface Props extends ComponentPropsWithoutRef<'div'> {
  state?: 'success' | 'warning' | 'error' | 'info';
  title: string;
  message: string | string[];
}

export default function Alert({
  state = 'info',
  title,
  message,
  className,
  ...props
}: Props) {
  const colors = useMemo(() => {
    return {
      success: 'text-green',
      warning: 'text-yellow',
      error: 'text-red',
      info: 'text-blue',
    };
  }, []);

  const textColor = useMemo(() => colors[state], [state, colors]);

  return (
    <div
      {...props}
      className={cx('rounded-md bg-white shadow-sm p-4', className)}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon
            className={cx('h-6 w-6', textColor)}
            aria-hidden="true"
          />
        </div>

        <div className="ml-3">
          <h3 className={cx('font-medium', textColor)}>{title}</h3>

          <div className="mt-1 text-sm text-black/90">
            {typeof message === 'string' ? (
              <p>{message}</p>
            ) : (
              <ul role="list" className="list-disc space-y-1 pl-5">
                {message.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
