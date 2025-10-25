import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PraxiLogo from '../components/praxiLogo';
import PageContainer from '../components/pageContainer';
import HeaderRow from '../components/headerRow';
import TransparentBox from '../components/transparentBox';
import MenuButton from '../components/menuButton';
import DropdownMenu from '../components/dropdownMenu';
import {Button, BlackButton, DashedButton} from '../components/buttons';
import SmileSection from '../components/slides/smileSection';
import FieldSection from '../components/slides/fieldSection';
import RentgenSection from '../components/slides/rentgenSection';
import OfficeSlide from '../components/slides/officeSlide';
import RegistrationSlide from '../components/slides/registrationSlide';
import MapSlide from '../components/slides/mapSlide';
import CustomFooter from '../components/customFooter';
import ContactSection from '../components/slides/contactSection';
import Hero from '../components/Testtailwind';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const kontaktRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [showDropdownMenu, setShowDropdownMenu] = useState<boolean>(false)

  const scrollToSection = useCallback(() => {
    setShowDropdownMenu(false)
    kontaktRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowDropdownMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <PageContainer>
      <HeaderRow >
        <PraxiLogo alt='praxident-logo' />
          <TransparentBox>
            <Button>START</Button>
            <DashedButton onClick={() => navigate('/praxident/cennik')}>ZABIEGI</DashedButton>
            <BlackButton onClick={scrollToSection}>KONTAKT</BlackButton>
          </TransparentBox>
          <MenuButton onClick={() => setShowDropdownMenu(!showDropdownMenu)}/>
      </HeaderRow>
      <div className={'w-full overflow-hidden'}>
        <div>
          <SmileSection/>
          <FieldSection/>
          <RentgenSection/>
          <OfficeSlide ref={kontaktRef}/>
          <RegistrationSlide/>
          <MapSlide/>
          <ContactSection/>
        </div>
      </div>
      <CustomFooter/>
      {
        showDropdownMenu && <DropdownMenu ref={menuRef} relativeY={50}>
            <Button>START</Button>
            <DashedButton onClick={() => navigate('/praxident/cennik')}>ZABIEGI</DashedButton>
            <BlackButton onClick={scrollToSection}>KONTAKT</BlackButton>
          </DropdownMenu>
      }
      <Hero/>
    </PageContainer>
  );
};



export default LandingPage;
