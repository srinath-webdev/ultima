import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useTranslation } from 'react-i18next';
import TermsList from '../../components/TermsList';
import headerImage from "../../assets/images/terms_header.png";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import './styles.css';

const TermsAndConditionsPage = () => {

    const { scroll } = useLocomotiveScroll();
    const location = useLocation();

    useEffect(() => {
        if (scroll) {
            scroll.scrollTo(0, { disableLerp: true })
        }
    }, [location, scroll]);

    const { t } = useTranslation();

    const navigation2 = [
        { name: t('navigation.citiUltima'), target: '_blank', href: 'https://www.citibank.com.hk/english/credit-cards/pdf/credit-card-agreement.pdf', current: false },
        { name: t('navigation.personalData'), target: '_blank', href: 'https://www.citibank.com.hk/english/info/privacy.htm?lid=HKZHCBGGNFOTLPRIVACY?scrVar=frmInside', current: false },
        { name: t('navigation.keyFacts'), target: '_blank', href: 'https://www.citibank.com.hk/english/credit-cards/pdf/fee-schedule.pdf', current: false },
    ]

    return (
        <>
            <NavBar />
            <section className='flex bg-black' data-scroll-section>
                <Header imageUrl={headerImage} type="footerimage" title={t('termsandconditions.header')} />
            </section>
            <section className='bg-black pt-10 pb-10' data-scroll-section>
                <div className="container mx-auto relative">
                    {t('termsandconditions.ultimaAgreementTitle') !== 'termsandconditions.ultimaAgreementTitle' && (
                        <div className="border-white border-b pb-9 mb-9">
                            <h2 className='text-2xl text-left tracking-custom leading-10 uppercase text-white mb-4'>{t('termsandconditions.ultimaAgreementTitle')}</h2>
                            <a className='text-left reward-text text-white text-sm leading-5 tracking-widest font-extralight link-text' href={t('termsandconditions.ultimaAgreementLink')} target='_blank' rel='noreferrer'>Click here for more details. </a>
                        </div>
                    )}
                    <div className="border-white border-b pb-9 mb-9">
                        <h2 className='text-2xl text-left tracking-custom leading-10 uppercase text-white mb-4'>{t('termsandconditions.consolidatedTermTitle')}</h2>
                        <div>
                            <TermsList />
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-black pb-10' data-scroll-section>
                <div className="container mx-auto relative">
                    {navigation2.map((item) => (
                        <h2 key={item.name} className='text-2xl text-left tracking-custom leading-10 uppercase text-white mb-4 hover:text-gold'>
                            <a href={item.href} target={item.target}>{item.name}</a>
                        </h2>
                    ))}
                </div>
            </section>
            <section className='bg-black' data-scroll-section>
                <Footer />
            </section>
        </>
    );
};

export default TermsAndConditionsPage;