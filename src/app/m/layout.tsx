'use client';

import Sidebar from '@/components/m/sidebar';
import MobileNavigation from '@/components/m/mobile-navigation';
import { ContactListProvider } from '@/ctx/ContactListProvider';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ContactListProvider>
      <div className="bg-white/80 h-full">
        <MobileNavigation />

        <Sidebar />

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </ContactListProvider>
  );
}
