'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import SocialSidebar from '@/components/common/SocialSidebar';

export default function RouteWrapper({ children }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <>
      {!isHome && (
        <>
          <Navbar />
          <SocialSidebar />
        </>
      )}
      {children}
      {!isHome && <Footer />}
    </>
  );
}
