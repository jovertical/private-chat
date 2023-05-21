import { useUserStore } from '@/store/user';
import * as api from '@/utils/api';

export const getList = async () => {
  useUserStore.setState({ contactsLoading: true });

  const response = await api.get<any>('/user/contacts');

  useUserStore.setState({
    contactsLoading: false,

    // prettier-ignore
    ...(response.ok ? {
      contacts: response.data.data,
      contactsMeta: response.data.meta,
    } : {}),
  });
};
