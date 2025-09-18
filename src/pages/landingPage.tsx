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



export default LandingPage;
