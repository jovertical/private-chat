'use client';

import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useContext, useState, Fragment } from 'react';

import Logo from '@/components/logo';
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

function MobileSidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const items = useContext(NavigationContext);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50 lg:hidden" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/80" />
        </Transition.Child>

        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
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
                                aria-hidden="true"
                                className={cx(
                                  item.current
                                    ? 'text-teal-600'
                                    : 'text-gray-400 group-hover:text-teal-600',
                                  'h-6 w-6 shrink-0'
                                )}
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
                  </ul>
                </nav>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default withNavigationProvider(MobileSidebar);
