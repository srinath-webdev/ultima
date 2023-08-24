import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useTranslation} from 'react-i18next';
import headerImage from "../../assets/images/delights_header.jpg";
import Footer from "../../components/Footer";
import StarField from '../../components/StarField';
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Concierge from '../../components/Concierge';
import images from '../../assets/images/privileges';

const DelightsPage = () => { 
    const { scroll } = useLocomotiveScroll();
    const location = useLocation();  

    useEffect(() => {
        if(scroll){
            scroll.scrollTo(0, { disableLerp: true })
        }
    }, [location, scroll]);

    const { t } = useTranslation();

    return (
        <>
            <NavBar />            
            <section className='flex bg-black' data-scroll-section>
                <Header imageUrl={headerImage} type="image" title={t('delights.header')} subTitle={t('delights.subCopy')} preTitle={t('delights.preTitle') !== 'delights.preTitle' ? t('delights.preTitle') : ''} />
            </section>  
            <section id="contact" className='bg-black pt-10 md:pt-52 pb-10 md:pb-52' data-scroll-section>
                <div className="container mx-auto relative">
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-2">
                        <div className="flex justify-center items-center">
                            <img
                                src={images['offers']['delights_offer']}
                                alt="Privilege 1"
                                className="h-full w-full md:w-full lg:w-auto object-cover"
                            />
                        </div>
                        <div className="flex justify-center items-center mx-10 mt-10 md:mt-0 md:mx-0">
                            <div className='text-center md:text-left'>
                                <p className='text-left text-white text-sm leading-5 tracking-widest font-extralight' dangerouslySetInnerHTML={{ __html: t('delights.offer5Copy') }}></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-black pt-10 md:pt-52 pb-10 md:pb-52' data-scroll-section>
                <StarField  />
                <Concierge />
            </section> 
            <section className='bg-black'  data-scroll-section>
                <Footer/>
            </section>   
        </>            
    );
};

export default DelightsPage;