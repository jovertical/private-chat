'use client';

import Link from 'next/link';
import { useContext } from 'react';

import Logo from '@/components/logo';
import UserAvatar from '@/components/user-avatar';
import UserMenu from '@/components/user-menu';
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
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-black border-opacity-10 bg-white px-6">
        <div className="flex h-16 shrink-0 items-center">
          <Logo className="h-9 w-auto text-primary" />
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
                          ? 'bg-secondary/10 text-black'
                          : 'text-black/70 hover:bg-black/5',
                        'group flex gap-x-3 px-4 py-2 text-sm leading-6 font-medium rounded-sm'
                      )}
                    >
                      <item.icon
                        className={cx(
                          item.current
                            ? 'text-black/90'
                            : 'text-black/70 group-hover:text-black/90',
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
              <div className="text-xs font-medium leading-6 text-black/40">
                Contacts
              </div>

              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {contacts.map((contact) => (
                  <li key={contact.name}>
                    <Link
                      href={contact.href}
                      className={cx(
                        contact.current
                          ? 'bg-secondary/10 text-black'
                          : 'text-black/90 hover:bg-black/5',
                        'group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6'
                      )}
                    >
                      <UserAvatar user={contact} />
                      <span className="truncate">{contact.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="-mx-6 mt-auto">
              <UserMenu />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default withNavigationProvider(Sidebar);
