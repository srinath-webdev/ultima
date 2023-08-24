import { locales } from '../../helpers/common.helpers';
import { useTranslation } from 'react-i18next';
import { Disclosure, Menu } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "../../assets/images/logo.svg";
import { classNames } from '../../helpers/common.helpers';
import './styles.css';

export default function NavBar() {
  const { t, i18n } = useTranslation();

  const navigation = [
    { name: t('navigation.dedicatedServices'), href: '#/dedication', current: false },
    { name: t('navigation.horizons'), href: '#/horizons', current: false },
    { name: t('navigation.indulgence'), href: '#/indulgence', current: false },
    { name: t('navigation.balance'), href: '#/balance', current: false },
    { name: t('navigation.moments'), href: '#/moments', current: false },
    { name: t('navigation.delights'), href: '#/delights', current: false },
  ]

  return (
    <>
      <Disclosure>
        {({ open }) => (
          <nav className={classNames(
            open ? 'bg-black' : 'bg-transparent',
            'top-0 z-50 w-screen'
          )}>
            <div className="mx-auto p-4 sm:p-6">
              <div className="flex justify-between items-center">
                <div className='flex'>
                  <a href='#/'><img src={Logo} alt='Citi' /></a>
                </div>
                <div className="flex">
                  {Object.keys(locales).map((locale, index) => (
                    <div key={locale}>
                      <button
                        key={locale}
                        className={classNames(
                          i18n.resolvedLanguage === locale ? 'text-white font-bold' : 'text-gray-700 font-normal',
                          'rounded-md px-3 py-3 text-base hover:bg-gray-700 hover:text-white'
                        )}
                        type="submit"
                        onClick={() => i18n.changeLanguage(locale)}>
                        {locales[locale].title}
                      </button>
                      {index === 0 && (<span className='text-gold font-bold'>|</span>)}
                    </div>
                  ))}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 ml-4 hover:bg-black">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-8 w-8 text-gold" aria-hidden="true" />
                    ) : (
                      <div className="flex h-8 w-8 justify-center items-center" aria-hidden="true">
                        <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M31 0C31.5523 0 32 0.447715 32 1C32 1.55228 31.5523 2 31 2V0ZM1 2H0V0H1V2ZM31 2H1V0H31V2Z" fill="white" />
                          <path d="M25 22C25.5523 22 26 21.5523 26 21C26 20.4477 25.5523 20 25 20L25 22ZM1 20L7.64949e-08 20L-7.64949e-08 22L1 22L1 20ZM25 20L1 20L1 22L25 22L25 20Z" fill="#B39A57" />
                          <path d="M29 12C29.5523 12 30 11.5523 30 11C30 10.4477 29.5523 10 29 10V12ZM1 10H0V12H1V10ZM29 10L1 10V12L29 12V10Z" fill="white" />
                        </svg>
                      </div>
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="overflow-y-scroll h-screen scrollable-element">
              <div className="bg-black">
                <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3 text-left md:text-center'>
                    <Disclosure.Button
                      key={'home'}
                      as="a"
                      href={'#/'}
                      className={"menu-item gradient-text block text-white px-3 py-2 text-lg font-semibold uppercase text-left md:text-center"}
                    >
                    {t('navigation.home')}
                    </Disclosure.Button>
                </div>
                <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3 lg:mt-10'>
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        'menu-item gradient-text',
                        'block text-white px-3 py-2 text-lg font-light uppercase text-left md:text-center ml-4 md:ml-0'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3 lg:mt-10'>
                  <Disclosure.Button
                    key={t('navigation.termsAndCondition')}
                    as="a"
                    href={'#/terms-and-conditions'}
                    className={classNames(
                      'menu-item gradient-text',
                      'block text-white px-3 py-2 text-sm font-light uppercase text-left md:text-center'
                    )}
                  >
                    {t('navigation.termsAndCondition')}
                  </Disclosure.Button>
                  <Disclosure.Button
                    key={t('navigation.contactUs')}
                    as="a"
                    href={'#/dedication#contact'}
                    className={classNames(
                      'menu-item gradient-text',
                      'block text-white px-3 py-2 text-sm font-light uppercase text-left md:text-center'
                    )}
                  >
                    {t('navigation.contactUs')}
                  </Disclosure.Button>
                </div>
              </div>
              <div className='my-14 flex justify-center'>
                <svg width="82" height="2" viewBox="0 0 82 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1H81" stroke="url(#paint0_radial_841_431)" strokeLinecap="round" />
                  <defs>
                    <radialGradient id="paint0_radial_841_431" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(41.7121 1.90203) scale(63.2879 673.558)">
                      <stop stopColor="#B39A57" />
                      <stop offset="1" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <div className='gradient-bar'></div>
            </Disclosure.Panel>
          </nav>
        )}
      </Disclosure>
      <section className='bg-black py-2 px-4 md:px-6 hide-scrollbar'>
        <ul className='flex items-left text-white w-max-content'>
          <li className='pr-2 flex-shrink-0'>
            <a href="#/" className="mr-2 mb-2 text-center pr-4 md:pr-6 pt-3 pb-3 cursor-pointer inline-block hover:bg-yellow-gold/5 rounded-xl uppercase text-white text-xs tracking-widest" aria-current="page" data-headlessui-state="open">{t('navigation.home')}</a>
          </li>
          <li className='px-2 flex-shrink-0'>
            <Menu>
              <Menu.Button
                className="mr-2 mb-2 text-center px-4 md:px-6 pt-3 pb-3 cursor-pointer inline-block hover:bg-yellow-gold/5 rounded-xl uppercase text-white text-xs tracking-widest" aria-current="page" data-headlessui-state="open">{t('navigation.privileges')}
              </Menu.Button>
              <Menu.Items className={'bg-black fixed z-50'}>
                {navigation.map((item) => (
                  <Menu.Item
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={'menu-item block flex mr-2 mb-2 text-center px-4 md:px-6 pt-3 pb-3 cursor-pointer inline-block hover:bg-yellow-gold/5 rounded-xl uppercase text-white text-xs tracking-widest'}
                  >
                    {item.name}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>
          </li>
          <li className='px-2 flex-shrink-0'>
            <a href="#/terms-and-conditions" className="mr-2 mb-2 text-center px-4 md:px-6 pt-3 pb-3 cursor-pointer inline-block hover:bg-yellow-gold/5 rounded-xl uppercase text-white text-xs tracking-widest" aria-current="page" data-headlessui-state="open">{t('navigation.termsAndCondition')}</a>
          </li>
          <li className='px-2 flex-shrink-0'>
            <a href="#/dedication#contact" className="mr-2 mb-2 text-center px-4 md:px-6 pt-3 pb-3 cursor-pointer inline-block hover:bg-yellow-gold/5 rounded-xl uppercase text-white text-xs tracking-widest" aria-current="page" data-headlessui-state="open">{t('navigation.contactUs')}</a>
          </li>
        </ul>
      </section>
    </>
  )
}