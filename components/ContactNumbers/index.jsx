import {React, useState} from 'react';
import { useTranslation} from 'react-i18next';
import {
  Accordion,
  AccordionHeader,
  AccordionBody, } from "@material-tailwind/react";
import ContactTable from '../ContactTable';
import { Icon } from '../../helpers/common.helpers';

const ContactNumbers = () => { 
    const { t } = useTranslation();
    const [open, setOpen] = useState(1);
 
    const handleOpen = (value) => {
        setOpen(open === value ? 1 : value);
    };
    
    const customAnimation = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
    };

    return (
      <>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />} animate={customAnimation} className='mt-10'>
          <AccordionHeader className='border-b-0 text-white hover:text-gold text-sm uppercase' onClick={() => handleOpen(1)}>
            {t('dedication.asia')}
            </AccordionHeader>
            <AccordionBody className='text-white text-xs'>
              <ContactTable region='asia'/>
            </AccordionBody>
        </Accordion>                               
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}  animate={customAnimation}>
            <AccordionHeader className='border-b-0 text-white hover:text-gold text-sm uppercase' onClick={() => handleOpen(2)}>
            {t('dedication.europe')}
            </AccordionHeader>
            <AccordionBody className='text-white text-xs'>
              <ContactTable region='europe'/>
            </AccordionBody>
        </Accordion>   
        <Accordion open={open ===3} icon={<Icon id={3} open={open} />} animate={customAnimation}>
            <AccordionHeader className='border-b-0 text-white hover:text-gold text-sm uppercase' onClick={() => handleOpen(3)}>
            {t('dedication.northAmerica')}
            </AccordionHeader>
            <AccordionBody className='text-white text-xs'>
                <ContactTable region='northAmerica'/>
            </AccordionBody>
        </Accordion>
      </>
       );
 
}

export default ContactNumbers;
