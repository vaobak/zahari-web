'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Profil', href: '/profil' },
  { name: 'Publikasi', href: '/publikasi' },
  { name: 'Buku', href: '/buku' },
  { name: 'Kontak', href: '/kontak' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-primary-950 shadow-lg">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-primary-800 py-6 lg:border-none">
          <div className="flex items-center">
            <Link href="/" className="text-white">
              <span className="text-xl font-bold">Zahari.ID</span>
            </Link>
          </div>
          <div className="ml-10 hidden space-x-8 lg:block">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-medium transition-colors duration-200 ${ 
                  pathname === link.href
                    ? 'text-primary-200 border-b-2 border-primary-200 pb-1'
                    : 'text-white hover:text-primary-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="ml-10 space-x-4 lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-base font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? 'text-primary-200'
                  : 'text-white hover:text-primary-200'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50">
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-primary-800">
              <div className="flex items-center justify-between">
                <Link href="/" className="text-white" onClick={() => setMobileMenuOpen(false)}>
                  <span className="text-xl font-bold">Dr. Zahari</span>
                </Link>
                <button
                  type="button"
                  className="rounded-md p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-primary-800">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 transition-colors duration-200 ${
                          pathname === item.href
                            ? 'bg-primary-800 text-primary-200'
                            : 'text-white hover:bg-primary-800'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}