'use client'

import { Fragment, useState, useRef, useEffect } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logoHelloBad from "../../assets/images/logo_HellBad.png"
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from "../../context.jsx"

const navigation = {
  categories: [
    {
      id: 'Raquettes',
      name: 'Raquettes',
      href: '/raquettes',
      featured: [
        { name: 'Nouvelles Arrivées', href: '/raquettes', imageSrc: '../../bad_rsl2.png', imageAlt: 'Nouvelles raquettes RSL' },
      ],
      sections: [],
    },
    {
      id: 'Shuttlecocks',
      name: 'Shuttlecocks',
      href: '/shuttlecocks',
      featured: [],
      sections: [],
    },
    {
      id: 'Bagagerie',
      name: 'Bagagerie',
      href: '/bagagerie',
      featured: [],
      sections: [],
    },
    {
      id: 'Chaussures',
      name: 'Chaussures',
      href: '/chaussures',
      featured: [],
      sections: [],
    },
    {
      id: 'Offres',
      name: 'Offres',
      href: '/offres',
      featured: [],
      sections: [],
    },
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
    setUser(null)
    navigate('/')
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

            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex flex-col px-4">
                  {navigation.categories.map((category) => (
                    <Tab key={category.name} className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600">
                      <span onClick={() => handleMobileNav(category.href)} className="cursor-pointer">
                        {category.name}
                      </span>
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <img alt={item.imageAlt} src={item.imageSrc} className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75" />
                          <Link to={item.href} onClick={() => setOpen(false)} className="mt-6 block font-medium text-gray-900">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {user ? (
                <>
                  <div className="flow-root">
                    <span className="-m-2 block p-2 font-medium text-gray-900">Bonjour {user.Nom} !</span>
                  </div>
                  <div className="flow-root">
                    <button onClick={deconnexion} className="-m-2 block p-2 font-medium text-red-600">Déconnexion</button>
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
              <button type="button" onClick={() => setOpen(true)} className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <span className="sr-only">HELLOBAD</span>
                  <img src={logoHelloBad} alt="logo_HelloBad" className="h-8 w-auto"/>
                </Link>
              </div>

              {/* Categories desktop - sans hover */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <div key={category.name} className="flex items-center">
                      <Link
                        to={category.href}
                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        {category.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </PopoverGroup>

              {/* Desktop right */}
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
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
                    <span className="sr-only">items in cart, view bag</span>
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