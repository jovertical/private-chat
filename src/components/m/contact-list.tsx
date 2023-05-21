import Link from 'next/link';
import { useContext, Suspense } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

import ContactListSkeleton from '@/components/m/contact-list-skeleton';
import UserAvatar from '@/components/user-avatar';
import { ContactListContext } from '@/ctx/ContactListProvider';
import { cx } from '@/utils';

export default function ContactList({
  className = '',
  ...props
}: ComponentPropsWithoutRef<'ul'>) {
  const contacts = useContext(ContactListContext);

  if (contacts.loading) {
    return <ContactListSkeleton className={className} />;
  }

  return (
    <ul role="list" className={cx(['-mx-2 space-y-1', className])} {...props}>
      {contacts.data.map((item) => (
        <li key={item.id.toString()}>
          <Link
            href="#"
            className={cx(
              false
                ? 'bg-secondary/10 text-black'
                : 'text-black/90 hover:bg-black/5',
              'group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6'
            )}
          >
            <UserAvatar user={item.contact} />
            <span className="truncate">{item.contact.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
