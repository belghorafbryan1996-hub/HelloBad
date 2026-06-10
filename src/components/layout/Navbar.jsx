'use client'

import { Fragment, useState, useRef } from 'react'
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
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logoHelloBad from "../../assets/images/logo_HellBad.png"
import { Link } from 'react-router-dom'

//ici j'ai pris le chemijn absolue car j'ai eu un probleme avec le chemin relatif ../../assets/etc.... du coup j'ai opter pour le chemin absolue pour m'eviter des erreus de chargements d'image dans la navbar.

const navigation = {
  categories: [
    {
      id: 'Raquettes',
      name: 'Raquettes',
      href: '/raquettes', // j'ai crée le lien dans la navbar redirige vers la page des raquettes
      featured: [
        {
          name: 'Nouvelles Arrivées',
          href: '#',
          imageSrc: '../../bad_rsl2.png',
          imageAlt: 'Nouvelles raquettes rsl couleurs noir/bleu alias NEPTUNE',
        },
        {
          name: 'Nouveautés RSL',
          href: '#',
          imageSrc: '../../bad_rsl3.png',
          imageAlt: 'nouvelles raquettes rsl couleurs noir/rouge alias VENUS',
        },
      ],
      sections: [
        {
          id: 'Gamme Attaques',
          name: 'Gammes Attaques',
          items: [
            { name: 'Browse All', href: '#' },
            { name: 'Yonex', href: '#' },
            { name: 'Victor', href: '#' },
            { name: 'RSL', href: '#' },
            { name: 'Forza', href: '#' },
          ],
        },
        {
          id: 'Gamme Défenses',
          name: 'Gammes Défenses',
          items: [
            { name: 'Browse All', href: '#' },
            { name: 'Yonex', href: '#' },
            { name: 'Victor', href: '#' },
            { name: 'RSL', href: '#' },
            { name: 'Forza', href: '#' },
          ],
        },
        {
          id: 'Gamme Polyvalentes',
          name: 'Gammes Polyvalentes',
          items: [
            { name: 'Browse All', href: '#' },
            { name: 'Yonex', href: '#' },
            { name: 'Victor', href: '#' },
            { name: 'RSL', href: '#' },
            { name: 'Forza', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'Shuttlecocks',
      name: 'Shuttlecocks',
      href: '/shuttlecocks',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            '../../volantsling.png',
          imageAlt: 'Volants à plumes LingMein 80, 12 douzaines par boîte.',
        },
        // {
        //   name: 'Artwork Tees',
        //   href: '#',
        //   imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg',
        //   imageAlt:
        //     'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        // },
      ],
      sections: [
        {
          id: 'Volants en plumes',
          name: 'Volants en plumes',
          items: [
            { name: 'Browse All', href: '#' },
            { name: 'Yonex', href: '#' },
            { name: 'Victor', href: '#' },
            { name: 'RSL', href: '#' },
            { name: 'Forza', href: '#' },
          ],
        },
        {
          id: 'Volants Hybrides',
          name: 'Volants Hybrides',
          items: [
            { name: 'Browse All', href: '#' },
            { name: 'Yonex', href: '#' },
            { name: 'Victor', href: '#' },
            { name: 'RSL', href: '#' },
            { name: 'Forza', href: '#' },
          ],
        },
         {
          id: 'Volants en nylon',
          name: 'Volants en nylon',
          items: [
            { name: 'Browse All', href: '#' },
            { name: 'Yonex', href: '#' },
            { name: 'Victor', href: '#' },
            { name: 'RSL', href: '#' },
            
          ],
        },

      ],
    },

    {
      id: 'Bagagerie',
      name: 'Bagagerie',
      href: '/bagagerie',
      featured: [
        {
          name: 'Nouveauté',
          href: '#',
          imageSrc:
            '../../sac_yonex.png',
          imageAlt: 'Sac de Badminton Yonex rouge à 3 poches.',
        },
        {
          name: 'Edition limitée',
          href: '#',
          imageSrc: '../../sac_yonex2',
          imageAlt:
            'Sac de Badminton Yonex rouge à 4 poches.',
        },
      ],
      sections: [
        {
          id: 'Sac 3 poches',
          name: 'Sac 3 poches',
          items: [
            { name: 'Browse All', href: '#' },
            { name: 'Yonex', href: '#' },
            { name: 'Victor', href: '#' },
            { name: 'RSL', href: '#' },
            { name: 'Forza', href: '#' },
          ],
        },
        {
          id: 'Sac 2 poches',
          name: 'Sac 2 poches',
          items: [
            { name: 'Browse All', href: '#' },
            { name: 'Yonex', href: '#' },
            { name: 'Victor', href: '#' },
            { name: 'RSL', href: '#' },
            { name: 'Forza', href: '#' },
          ],
        },

      ],
    },
    {
      id: 'Chaussures',
      name: 'Chaussures',
      href: '/chaussures',
      featured: [
        {
          name: 'Nouveauté',
          href: '#',
          imageSrc:
            '../../chaussures_yonex.png',
          imageAlt: 'Chaussures de badminton en nylon, couleur noir, jaune et rose.',
        },

        // la je hide encore une fois un item "nouvelles arrivées" au cas où j'en aurais envie ou besoin.
        // {
        //   name: 'Edition limitée',
        //   href: '#',
        //   imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg',
        //   imageAlt:
        //     'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        // },
      ],
      sections: [
        {
          // id: 'Sac 3 poches',
          // name: 'Sac 3 poches',
          // pour le moment je hide id + name ne voyant pas l'utilité de le mettre pour les chaussures je priviligie quelque chose de simple 

          items: [
            { name: 'Browse All', href: '/chaussures' },
            { name: 'Yonex', href: '#' },
            { name: 'Victor', href: '#' },
            { name: 'Forza', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'Offres',
      name: 'Offres',
      href: '/offres',
      featured: [
        {
          name: 'Remise',
          href: '#',
          imageSrc:
            'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
      ],
      sections: [
        {
          id: 'Promotions',
          name: 'Promotions',
          items: [
            { name: 'Browse All', href: '#' },
            { name: 'Yonex', href: '#' },
            { name: 'Victor', href: '#' },
            { name: 'RSL', href: '#' },
            { name: 'Forza', href: '#' },
          ],
        },
      ],
    },
  ],
//  l'assitance je le positionne dans le footer ca evite de surcharger la navbar et de faire une menu mega long, puis tous le monde trouve l'assistance dans le footer sur certains site e-commerce
}

export default function Example() {
  const [open, setOpen] = useState(false)
   const buttonRefs = useRef([])

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex flex-col px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600"
                    >
                      {category.name}
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
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

    
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Sign in
                </a>
              </div>
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Create account
                </a>
              </div>
            </div>

          
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <p className="hidden flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>
          {/* ici j'ai hide la barre bleu car comme le composant react a toujour un return je prefer faire au plus simple pour ne pas casser la structure html, donc je fait un hidden et la barre sera masquée */}

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <span className="sr-only">Your Company</span>
                  <img src={logoHelloBad} alt="logo_HelloBad" className="h-8 w-auto"/>
                </Link>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category, index) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>

                       <div 
                              ref={(el) => (buttonRefs.current[index] = el)}
                              onMouseEnter={() => { if (!open) buttonRefs.current[index].querySelector('button').click() }}
                              onMouseLeave={() => { if (open) buttonRefs.current[index].querySelector('button').click() }}
                              className="relative flex"
                            >
                              <PopoverButton className="group relative flex items-center justify-center text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:text-indigo-600">
                                <Link to={category.href}>{category.name}</Link>
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-x-0 -bottom-px z-30 h-0.5 transition duration-200 ease-out group-data-open:bg-indigo-600"
                                />
                              </PopoverButton>
                      </div>
                                              
                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full z-20 w-full bg-white text-sm text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-sm" />
                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div key={item.name} className="group relative text-base sm:text-sm">
                                    <img
                                      alt={item.imageAlt}
                                      src={item.imageSrc}
                                      className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                    />
                                    <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                      <span aria-hidden="true" className="absolute inset-0 z-10" />
                                      {item.name}
                                    </a>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <a href={item.href} className="hover:text-gray-800">
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                      </>
                      )}
                    </Popover>
                  ))}
                </div> 
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                  </a>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create account
                  </a>
                </div>

              

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="/panier" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
