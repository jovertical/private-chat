import type { Contact, User } from '@prisma/client';
import type { StateCreator } from 'zustand';

export interface ContactsSlice {
  contacts: (Contact & { owner: User; contact: User })[];
  contactsLoading: boolean;
  contactsMeta: {
    page: number;
    nextPage: number | null;
    prevPage: number | null;
    perPage: number;
    total: number;
  };
}

export const initialState: ContactsSlice = {
  contacts: [],
  contactsLoading: false,
  contactsMeta: {
    page: 1,
    nextPage: null,
    prevPage: null,
    perPage: 5,
    total: 0,
  },
};

export const createContactsSlice: StateCreator<ContactsSlice, []> = () => {
  return initialState;
};
