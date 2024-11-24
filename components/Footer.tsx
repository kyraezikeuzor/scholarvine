'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logo from './Logo';

function Footer() {
  const pathname = usePathname();

  // Determine if the footer should be shown based on the pathname
  const hiddenPaths = ['/explore', '/categories', '/home'];
  const showFooter = !hiddenPaths.some((path) => pathname.includes(path));

  if (!showFooter) return null; // If footer should be hidden, render nothing

  return (
    <footer className="px-[5vw] py-[8vh] flex flex-col gap-8">
      {/* Logo Section */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* Footer Text */}
      <div className="align-self-left text-sm ">
        <p>© 2024 All rights reserved.</p>
        <p>
          Built with <span className="text-red-500">❤️</span> by Kyra E.
        </p>
      </div>

      {/* Platform Description */}
      <p className="mt-8 text-sm text-gray-600">
        The all-in-one platform for programs, activities, and opportunities.
      </p>
    </footer>
  );
}

export default Footer;
