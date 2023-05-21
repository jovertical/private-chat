'use client';

import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { SessionContext, signOut } from 'next-auth/react';
import { useContext, useMemo, Fragment } from 'react';

import UserAvatar from '@/components/user-avatar';
import withSessionProvider from '@/components/with-session-provider';
import { cx } from '@/utils';

const navigation = [{ name: 'Your profile', href: '#' }];

function UserMenu() {
  const session = useContext(SessionContext);

  const user = useMemo(() => session?.data?.user, [session?.data]);

  if (session?.status === 'loading' || !user) {
    return (
      <div className="flex items-center px-6 py-3 relative">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 animate-pulse"></div>
        <div className="hidden lg:flex lg:items-center">
          <div className="ml-4">
            <div className="h-3 w-14 bg-gray-200 animate-pulse mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="w-full flex items-center gap-x-4 px-3 sm:px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">
        <span className="sr-only">Open user menu</span>
        <UserAvatar user={user} />
        <span className="hidden lg:block">{user.name}</span>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 sm:left-0 sm:bottom-0 z-10 sm:mb-16 sm:mx-auto w-32 sm:w-64 origin-top-left rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
          {navigation.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <Link
                  href={item.href}
                  className={cx(
                    active ? 'bg-gray-50' : '',
                    'block px-3 py-1 text-sm leading-6 text-gray-900'
                  )}
                >
                  {item.name}
                </Link>
              )}
            </Menu.Item>
          ))}

          <Menu.Item as="button" onClick={() => signOut()}>
            <span className="block px-3 py-1 text-sm leading-6 text-gray-900">
              Sign Out
            </span>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default withSessionProvider(UserMenu);
