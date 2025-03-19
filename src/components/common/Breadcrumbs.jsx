'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((segment) => segment);

  return (
    <nav aria-label="breadcrumb" className="text-sm text-gray-600 py-2">
      <ol className="flex space-x-1">
        <li>
          <Link href="/" className="text-black/60 hover:text-black">Home</Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          return (
            <li key={href} className="flex items-center">
              <span className="mx-1">/</span>
              {isLast ? (
                <span className="text-black">{decodeURIComponent(segment)}</span>
              ) : (
                <Link href={href} className="text-black/60 hover:text-black">
                  {decodeURIComponent(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
