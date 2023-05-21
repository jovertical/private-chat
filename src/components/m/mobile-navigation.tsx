import { Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';

import MobileSidebar from '@/components/m/mobile-sidebar';
import UserMenu from '@/components/user-menu';

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-1 shadow-sm sm:px-6 lg:hidden">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-black/70 lg:hidden"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>

        <div className="flex-1 text-sm font-semibold leading-6 text-black/90">
          Chats
        </div>

        <UserMenu avatar={{ size: 'md' }} />
      </div>

      <MobileSidebar open={open} setOpen={setOpen} />
    </>
  );
}
