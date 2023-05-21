import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { createContactsSlice } from '@/store/user/contacts.slice';
import type { ContactsSlice } from '@/store/user/contacts.slice';
import { createSelectors } from '@/utils/zustand';

type State = ContactsSlice;

const useUserStoreBase = create(
  devtools<State>(
    (...base) => ({
      ...createContactsSlice(...base),
    }),
    {
      name: 'user',
    }
  )
);

export const useUserStore = createSelectors(useUserStoreBase);
