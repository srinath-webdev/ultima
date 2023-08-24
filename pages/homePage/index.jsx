import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useTranslation } from 'react-i18next';
import Footer from "../../components/Footer";
import StarField from '../../components/StarField';
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import FivePanelCarousel from "../../components/FivePanelCarousel";
import Concierge from '../../components/Concierge';
import BrandVideo from '../../components/BrandVideo';

const HomePage = () => {
    const { scroll } = useLocomotiveScroll();
    const location = useLocation();

    useEffect(() => {
        if (scroll) {
            scroll.scrollTo(0, { disableLerp: true })
        }
    }, [location, scroll]);

    const { t } = useTranslation();

    return (
        <>
            <NavBar />
            <section className='bg-black' data-scroll-section >
                <Header
                    type="video"
                    title={t('home.header')}
                    subTitle={t('home.subCopy')}
                />
            </section>
            <section className='bg-black py-10 lg:py-40' data-scroll-section>
                <div className='inline-block w-full'>
                    <div className="flex justify-center mb-2 pb-2 section-line">
                        <div className="grid grid-cols-1 mx-10 mt-10 md:mt-0 md:mx-48">
                            <div>
                                <h2 className='text-2xl text-center tracking-custom leading-10 text-light-grey'>{t('home.brandVideoTitle')}</h2>
                            </div>
                        </div>
                    </div>
                    <BrandVideo />
                </div>
            </section>
            <section className='bg-black pt-10 md:pt-52 pb-10 md:pb-52' data-scroll-section>
                <StarField stars={30} />
                <div className="container mx-auto relative py-16">
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 mx-10 mt-10 md:mt-0 md:mx-48">
                            <div>
                                <h2 className='text-2xl text-center tracking-custom leading-10 text-light-grey'>{t('home.carouselTitle')}</h2>
                            </div>
                            <div className='mt-8'>
                                <p className='text-center text-white text-sm leading-5 tracking-widest font-extralight'>{t('home.carouselCopy')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto pb-36">
                    <FivePanelCarousel />
                </div>
            </section>
            <section className='bg-black pt-10 md:pt-52 pb-10 md:pb-52' data-scroll-section>
                <StarField stars={30} />
                <Concierge />
            </section>
            <section className='bg-gray-900 pt-6 md:pt-10 pb-10 md:pb-10' data-scroll-section>
                <div className='inline-block w-full'>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 mx-10 mt-10 md:mt-0 md:mx-48">
                            <div>
                                <h2 className='text-sm md:text-2xl text-center tracking-custom leading-10 text-light-grey'>{t('home.educationalTitle')}</h2>
                                <h2 className='text-xs md:text-xl text-center tracking-custom leading-10 text-light-grey'>
                                    <a href='#/terms-and-conditions' className='hover:text-gold'>{t('home.educationalTitle2')}</a>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-black' data-scroll-section>
                <Footer />
            </section>
        </>
    );
};

export default HomePage;