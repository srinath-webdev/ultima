import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useTranslation } from 'react-i18next';
import ContactNumbers from '../../components/ContactNumbers';
import Phone from "../../assets/images/phone.png";
import headerImage from "../../assets/images/dedication_header.jpg";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import StarField from '../../components/StarField';
import images from '../../assets/images/privileges';

const DedicationPage = () => {

    const { scroll } = useLocomotiveScroll();
    const location = useLocation();

    useEffect(() => {
        if (scroll) {
            scroll.scrollTo(0, { disableLerp: true })

            // Check if a hash exists in the URL
            if (window.location.hash === '#/dedication#contact') {
                // Wait for the 'scroll' event to complete before scrolling to the element
                setTimeout(() => {
                    scroll.scrollTo('#contact');
                }, 1000); // delay might need to be adjusted depending on your page load time
            }
        }
    }, [location, scroll]);

    const { t } = useTranslation();

    let number = t('dedication.247Phone');
    let call = `tel:${number}`;


    return (
        <>
            <NavBar />
            <section className='flex bg-black' data-scroll-section>
                <Header imageUrl={headerImage} type="image" title={t('dedication.header')} imagePos='bg-center' subTitle={t('dedication.subCopy')} preTitle={t('dedication.preTitle') !== 'dedication.preTitle' ? t('dedication.preTitle') : ''} />
            </section>
            <section className='bg-black pt-10 md:pt-52 pb-10 md:pb-52' data-scroll-section>
                <div className="container mx-auto relative">
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-2">
                        <div className="flex justify-center items-center">
                            <img
                                src={images['dedication']['rm']}
                                alt="Privilege 1"
                                className="h-full w-full md:w-full lg:w-auto object-cover"
                            />
                        </div>
                        <div className="flex justify-center items-center mx-10 mt-10 md:mt-0 md:mx-0">
                            <div className='text-center md:text-left'>
                                <h2 className='text-2xl text-left tracking-custom leading-10 text-white mb-8 uppercase' dangerouslySetInnerHTML={{ __html: t('dedication.conciergeTitle') }}></h2>
                                <p className='text-left text-white text-sm leading-5 tracking-widest font-extralight' dangerouslySetInnerHTML={{ __html: t('dedication.conciergeBody') }}></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-black pb-10 md:pb-52' data-scroll-section>
                <StarField />
                <div className="container mx-auto relative">
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-2">
                        <div className="flex justify-center items-center">
                            <img
                                src={images['rewards']['offer2']}
                                alt="Privilege 1"
                                className="md:w-full lg:w-auto object-cover"
                            />
                        </div>
                        <div className="flex justify-center items-center mx-10 mt-10 md:mt-0 md:mx-0">
                            <div className='text-center md:text-left'>
                                <h2 className='text-2xl text-left tracking-custom leading-10 text-white mb-8 uppercase' dangerouslySetInnerHTML={{ __html: t('rewards.highestTitle') }}></h2>
                                <p className='reward-text text-left text-white text-sm leading-5 tracking-widest font-extralight' dangerouslySetInnerHTML={{ __html: t('rewards.highestCopy') }}></p>
                                <img
                                    src={images['rewards']['highest']}
                                    alt="Privilege 1"
                                    className="md:w-full lg:w-auto object-cover my-4"
                                />
                                <p className='reward-text text-left text-white text-sm leading-5 tracking-widest font-extralight' dangerouslySetInnerHTML={{ __html: t('rewards.highestCopy2') }}></p>
                                <p className='reward-text text-left text-white text-sm leading-5 tracking-widest font-extralight' dangerouslySetInnerHTML={{ __html: t('rewards.highestCopy3') }}></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-black pb-10 md:pb-52 section-line' data-scroll-section>
                <StarField />
                <div className="container mx-auto relative">
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-2">
                        <div className="flex justify-center items-center">
                            <img
                                src={images['rewards']['offer1']}
                                alt="Privilege 1"
                                className="md:w-full lg:w-auto object-cover"
                            />
                        </div>
                        <div className="flex justify-center items-center mx-10 mt-10 md:mt-0 md:mx-0">
                            <div className='text-center md:text-left'>
                                <h2 className='text-2xl text-left tracking-custom leading-10 text-white mb-8 uppercase' dangerouslySetInnerHTML={{ __html: t('dedication.rewardTitle') }}></h2>
                                <p className='text-left text-white text-sm leading-5 tracking-widest font-semibold mb-4' dangerouslySetInnerHTML={{ __html: t('rewards.thankyouCopy') }}></p>
                                <p className='text-left reward-text text-white text-sm leading-5 tracking-widest font-extralight' dangerouslySetInnerHTML={{ __html: t('rewards.thankyouCopy2') }}></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-black pt-10 md:pt-52 pb-10 md:pb-52' data-scroll-section>
                <div className="container mx-auto relative">
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-2">
                        <div className="flex justify-center mb-14 md:mb-0">
                            <div className='flex-col text-left mx-10 md:mx-28'>
                                <h2 className='text-2xl text-left tracking-custom leading-10 uppercase text-white mb-8' dangerouslySetInnerHTML={{ __html: t('dedication.247Title') }}></h2>
                                <p className='text-left text-white text-sm leading-5 tracking-widest font-extralight privilege-text' dangerouslySetInnerHTML={{ __html: t('dedication.247Copy') }}></p>
                                <div className='mt-10 flex-row uppercase flex'>
                                    <img src={Phone} alt='Phone' />
                                    <h4 className='text-lg text-left tracking-custom leading-10 text-white ml-6'>{t('dedication.247CallUs')}<br /><a href={call}>{t('dedication.247Phone')}</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mb-14 md:mb-0" id="contact">
                            <div className='flex-col text-left mx-10 md:mx-28'>
                                <h2 className='text-2xl text-left tracking-custom leading-10 uppercase text-white mb-8' dangerouslySetInnerHTML={{ __html: t('dedication.overseasTitle') }}></h2>
                                <p className='text-left text-white text-sm leading-5 tracking-widest font-extralight privilege-text' dangerouslySetInnerHTML={{ __html: t('dedication.overseasCopy') }}></p>
                                <ContactNumbers />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-black' data-scroll-section>
                <div className="mx-auto w-full px-12 py-12">
                    <p class='text-xs text-white font-extralight'>{t('rewards.thankyouRemarks')}</p>
                </div>
            </section>
            <section className='bg-black' data-scroll-section>
                <Footer />
            </section>
        </>
    );
};

export default DedicationPage;