import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/container';
import PraxiLogo from '../components/praxiLogo';
import PageContainer from '../components/pageContainer';
import HeaderRow from '../components/headerRow';
import TransparentBox from '../components/transparentBox';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <HeaderRow>
        <PraxiLogo />
          <TransparentBox>
            <div style={styles.button} >START</div>
            <div style={styles.dashedButton} onClick={() => navigate('/praxident/cennik')}>ZABIEGI</div>
            <div style={styles.button}>O NAS</div>
            <div style={styles.button}>CENNIK</div>
            <div style={styles.blackButton}>KONTAKT</div>
          </TransparentBox>
      </HeaderRow>
    </PageContainer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {




  button: {
    width: '100%',
    maxWidth: '20rem',
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
    maxWidth: '20rem',
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
      maxWidth: '20rem',
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
