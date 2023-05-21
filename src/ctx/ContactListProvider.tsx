import { createContext, useEffect } from 'react';
import type { PropsWithChildren } from 'react';

import { useUserStore } from '@/store/user';
import { getList } from '@/store/user/contacts.action';
import { initialState as defaults } from '@/store/user/contacts.slice';
import type { ContactsSlice } from '@/store/user/contacts.slice';

type Contacts = {
  data: ContactsSlice['contacts'];
  loading: ContactsSlice['contactsLoading'];
  meta: ContactsSlice['contactsMeta'];
};

export const ContactListProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const value = useUserStore((state) => ({
    data: state.contacts,
    loading: state.contactsLoading,
    meta: state.contactsMeta,
  }));

  useEffect(() => {
    getList();
  }, []);

  return (
    <ContactListContext.Provider value={value}>
      {children}
    </ContactListContext.Provider>
  );
};

export const ContactListContext = createContext<Contacts>({
  data: defaults.contacts,
  loading: defaults.contactsLoading,
  meta: defaults.contactsMeta,
});
