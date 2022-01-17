import { Disclosure, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { useRouter } from "next/router"
import Link from "next/link"

export default function MenuBar() {

  const path = useRouter().pathname;

  return (
    <Disclosure as="nav" className="bg-slate-800 pt-0 sm:pt-6 sticky top-0">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon  className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x 4">
                    {path === "/" ? (
                      <>
                      <Link href="#main">
                        <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          Back to top
                        </a>
                      </Link>
                      <Link href="/about">
                        <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          About
                        </a>
                      </Link>
                      </>
                    ) : (
                      <Link href="/">
                        <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          Back to home
                        </a>
                      </Link>
                  )}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 hidden items center pr-2 sm:flex sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-6">
                <WalletMultiButton className="bg-gradient-to-r from-indigo-700 via-indigo-400 to-cyan-500" />
              </div>
            </div>
          </div>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="sm:hidden w-full">
              <div className="px-2 pt-2 pb-3 space-y-4 mx-auto">
                <Disclosure.Button>
                  <a href="#main" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Back to top</a>
                </Disclosure.Button>
                <div>
                  <WalletMultiButton className="bg-gradient-to-r from-indigo-700 via-indigo-400 to-cyan-500"/>
                </div>
              </div>
            </Disclosure.Panel>
        </Transition>
        </>
      )}
    </Disclosure>
  )
}