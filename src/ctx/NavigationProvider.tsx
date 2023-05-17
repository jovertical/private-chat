import {
  ChatBubbleOvalLeftIcon,
  ArchiveBoxArrowDownIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import { createContext, useMemo } from 'react';
import type { PropsWithChildren } from 'react';

const items = [
  { name: 'Chats', href: '/m', icon: ChatBubbleOvalLeftIcon, current: true },

  {
    name: 'Archive',
    href: '/m/archive',
    icon: ArchiveBoxArrowDownIcon,
    current: false,
  },

  {
    name: 'Spam',
    href: '/m/spam',
    icon: ExclamationCircleIcon,
    current: false,
  },
];

export const NavigationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const pathname = usePathname();

  const navigation = useMemo(() => {
    return items.map((item) => ({
      ...item,
      current: pathname === item.href,
    }));
  }, [pathname]);

  return (
    <NavigationContext.Provider value={navigation}>
      {children}
    </NavigationContext.Provider>
  );
};

export const NavigationContext = createContext(items);
