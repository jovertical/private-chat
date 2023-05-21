import { cx, generateAvatarColor } from '@/utils';
import { useMemo } from 'react';

interface Props {
  size?: 'sm' | 'md' | 'lg';
  user: {
    name?: string | null;
    [key: string]: any;
  };
}

export type UserAvatarProps = Props;

const colors = {
  gray: 'bg-black',
  red: 'bg-red',
  green: 'bg-green',
  pink: 'bg-pink',
};

const sizes = {
  sm: 'h-6 w-6',
  md: 'h-8 w-8',
  lg: 'h-10 w-10',
};

const textSizes = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

export default function UserAvatar({ size = 'md', user }: Props) {
  const initials = useMemo(() => {
    if (!user) {
      return null;
    }

    const [first, last] = (user.name ?? '').split(' ');

    if (!last) return first?.[0] + first?.[1];

    return `${first[0]}${last[0]}`;
  }, [user]);

  return (
    <span
      className={cx(
        'inline-flex items-center justify-center rounded-full',
        sizes[size],
        colors[generateAvatarColor(initials ?? '')]
      )}
    >
      <span
        className={cx(
          'font-medium leading-none text-white uppercase',
          textSizes[size]
        )}
      >
        {initials}
      </span>
    </span>
  );
}
