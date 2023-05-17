import { cx } from '@/utils';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  color?: 'primary' | 'secondary';
  loading?: boolean;
}

const colors = {
  primary: 'bg-teal-500 hover:bg-teal-400 focus-visible:outline-teal-500',
  secondary:
    'bg-gray-100/10 hover:bg-gray-100/20 focus-visible:outline-gray-50',
};

export default function Button({
  type = 'button',
  loading = false,
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      {...props}
      type={type}
      className={cx(
        'flex items-center justify-center rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50',
        colors[props.color ?? 'primary'],
        className
      )}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-1.5 h-4 w-4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}

      {children}
    </button>
  );
}
