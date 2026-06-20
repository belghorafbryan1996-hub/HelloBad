'use client'

import { Fragment, useState, useRef, useEffect } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from "../../context.jsx"

const navigation = {
  categories: [
    { id: 'Raquettes', name: 'Raquettes', href: '/raquettes' },
    { id: 'Shuttlecocks', name: 'Shuttlecocks', href: '/shuttlecocks' },
    { id: 'Bagagerie', name: 'Bagagerie', href: '/bagagerie' },
    { id: 'Chaussures', name: 'Chaussures', href: '/chaussures' },
    { id: 'Offres', name: 'Offres', href: '/offres' },
  ],
}

export default function Example() {
  const [open, setOpen] = useState(false)
  const { panier } = useCart()
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userStored = localStorage.getItem('user')
    if (userStored) {
      setUser(JSON.parse(userStored))
    }
  }, [])

  const deconnexion = () => {
    localStorage.removeItem('user')
    window.location.href = '/'
  }

  const handleMobileNav = (href) => {
    setOpen(false)
    navigate(href)
  }

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop transition className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0" />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel transition className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full">
            <div className="flex px-4 pt-5 pb-2">
              <button type="button" onClick={() => setOpen(false)} className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Categories mobile */}
            <div className="mt-2 border-b border-gray-200 px-4 pb-4">
              {navigation.categories.map((category) => (
                <div key={category.id} className="py-3">
                  <span onClick={() => handleMobileNav(category.href)} className="cursor-pointer text-base font-medium text-gray-900">
                    {category.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Connexion mobile */}
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {user ? (
                <>
                  <div className="flow-root">
                    <span className="block font-medium text-gray-900">Bonjour {user.Nom} !</span>
                  </div>
                  <div className="flow-root">
                    <button onClick={deconnexion} className="block font-medium text-red-600">Déconnexion</button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flow-root">
                    <Link to="/connexion" onClick={() => setOpen(false)} className="-m-2 block p-2 font-medium text-gray-900">Connexion</Link>
                  </div>
                  <div className="flow-root">
                    <Link to="/inscription" onClick={() => setOpen(false)} className="-m-2 block p-2 font-medium text-gray-900">Inscription</Link>
                  </div>
                </>
              )}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">

              {/* Burger mobile */}
              <button type="button" onClick={() => setOpen(true)} className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <img src="/images/HelloBad.png" alt="HelloBad" className="h-8 w-auto"/>
                </Link>
              </div>

              {/* Categories desktop */}
              <div className="hidden lg:ml-8 lg:flex lg:space-x-8">
                {navigation.categories.map((category) => (
                  <Link
                    key={category.id}
                    to={category.href}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>

              {/* Desktop right */}
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:items-center lg:space-x-6">
                  {user ? (
                    <>
                      <span className="text-sm text-gray-700">Bonjour {user.Nom} !</span>
                      <button onClick={deconnexion} className="text-sm font-medium text-red-600 hover:text-red-800">
                        Déconnexion
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/connexion" className="text-sm font-medium text-gray-700 hover:text-gray-800">Connexion</Link>
                      <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                      <Link to="/inscription" className="text-sm font-medium text-gray-700 hover:text-gray-800">Inscription</Link>
                    </>
                  )}
                </div>

                {/* Panier */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to="/panier" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon aria-hidden="true" className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500" />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{panier.length}</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}