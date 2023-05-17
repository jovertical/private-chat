'use client';

import Link from 'next/link';
import { useContext } from 'react';

import Logo from '@/components/logo';
import UserAvatar from '@/components/user-avatar';
import withNavigationProvider from '@/components/with-navigation-provider';
import { NavigationContext } from '@/ctx/NavigationProvider';
import { cx } from '@/utils';

const contacts = [
  { id: 1, name: 'Marisol Narvas', href: '#', initial: 'MN', current: false },
  { id: 2, name: 'Chito Navea', href: '#', initial: 'CN', current: false },
  { id: 3, name: 'Junel Barrida', href: '#', initial: 'JB', current: false },
  { id: 4, name: 'Arnie Mariano', href: '#', initial: 'AM', current: false },
  { id: 5, name: 'Kennent Mendoza', href: '#', initial: 'KM', current: false },
];

function Sidebar() {
  const items = useContext(NavigationContext);

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
        <div className="flex h-16 shrink-0 items-center">
          <Logo className="h-9 w-auto text-gray-900" />
        </div>

        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cx(
                        item.current
                          ? 'bg-gray-50 text-teal-600'
                          : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                    >
                      <item.icon
                        className={cx(
                          item.current
                            ? 'text-teal-600'
                            : 'text-gray-400 group-hover:text-teal-600',
                          'h-6 w-6 shrink-0'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <div className="text-xs font-semibold leading-6 text-gray-400">
                Your contacts
              </div>

              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {contacts.map((contact) => (
                  <li key={contact.name}>
                    <Link
                      href={contact.href}
                      className={cx(
                        contact.current
                          ? 'bg-gray-50 text-teal-600'
                          : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                    >
                      <span
                        className={cx(
                          contact.current
                            ? 'text-teal-600 border-teal-600'
                            : 'text-gray-400 border-gray-200 group-hover:border-teal-600 group-hover:text-teal-600',
                          'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                        )}
                      >
                        {contact.initial}
                      </span>

                      <span className="truncate">{contact.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="-mx-6 mt-auto">
              <a
                href="#"
                className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
              >
                <UserAvatar />
                <span className="sr-only">Your profile</span>
                <span aria-hidden="true">Tom Cook</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default withNavigationProvider(Sidebar);
