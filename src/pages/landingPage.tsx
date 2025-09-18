import React, { useState } from 'react';
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

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const [showDropdownMenu, setShowDropdownMenu] = useState<boolean>(false)

  return (
    <PageContainer>
      <HeaderRow >
        <PraxiLogo alt='praxident-logo' />
          <TransparentBox>
            <Button>START</Button>
            <DashedButton onClick={() => navigate('/praxident/cennik')}>ZABIEGI</DashedButton>
            <Button>O NAS</Button>
            <Button>CENNIK</Button>
            <BlackButton>KONTAKT</BlackButton>
          </TransparentBox>
          <MenuButton onClick={() => setShowDropdownMenu(!showDropdownMenu)}/>
      </HeaderRow>
      <div className={'w-full overflow-hidden'}>
        <div>
          <SmileSection/>
          <FieldSection/>
          <RentgenSection/>
          <OfficeSlide/>
          <RegistrationSlide/>
          <MapSlide/>
          <ContactSection/>
        </div>
      </div>
      <CustomFooter/>





      {
        showDropdownMenu && <DropdownMenu relativeY={50}>
            <Button>START</Button>
            <DashedButton onClick={() => navigate('/praxident/cennik')}>ZABIEGI</DashedButton>
            <Button>O NAS</Button>
            <Button>CENNIK</Button>
            <BlackButton>KONTAKT</BlackButton>
          </DropdownMenu>
      }
    </PageContainer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {




  button: {
    width: '100%',
    //maxWidth: '20rem',
    padding: 'clamp(0.75rem, 2vw, 1.25rem)',
    backgroundColor: 'rgba(255,255,255,0)',
    color: 'black',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
    transition: 'background-color 0.3s ease',
    boxSizing: 'border-box',
  },
  dashedButton: {
    width: '100%',
    //maxWidth: '20rem',
    padding: 'clamp(0.75rem, 2vw, 1.25rem)',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'black',
    border: '2px dashed white',
    borderRadius: '0rem',
    cursor: 'pointer',
    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
    transition: 'background-color 0.3s ease',
    boxSizing: 'border-box',
  },
    blackButton: {
      width: '100%',
      //maxWidth: '20rem',
      padding: 'clamp(0.75rem, 2vw, 1.25rem)',
      backgroundColor: 'rgba(0, 0, 0, 1)',
      color: 'white',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
      transition: 'background-color 0.3s ease',
      boxSizing: 'border-box',
    }
};


export default LandingPage;
