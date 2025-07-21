import React from 'react';
import praxiLogo from '../images/praxiLogo.png'
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <div style={styles.headerRow}>
        <img src={praxiLogo} alt="praxident-logo" style={styles.praxiLogo}/>
        <div style={styles.transparentBox}>
          <div style={styles.button} >START</div>
          <div style={styles.dashedButton} onClick={() => navigate('/praxident/cennik')}>ZABIEGI</div>
          <div style={styles.button}>O NAS</div>
          <div style={styles.button}>CENNIK</div>
          <div style={styles.blackButton}>KONTAKT</div>
        </div>
      </div>



      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Praxident</p>
      </footer>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 'clamp(1rem, 5vw, 3rem)',
    fontFamily: 'Arial, sans-serif',
    color: 'black',
    lineHeight: 1.6,
    width: '100%',
    boxSizing: 'border-box',
    background: 'rgb(221, 214, 214)',
  },
  headerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    boxSizing: 'border-box',
    padding: '1rem clamp(1rem, 5vw, 3rem)',
  },
  praxiLogo: {
    width: '100%',
    maxWidth: '30rem',
    height: 'auto',
    marginBottom: '2rem',
  },

  transparentBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '50rem',
    padding: 'clamp(1.5rem, 5vw, 3rem)',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    border: '2px solid black',
    borderRadius: '0',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0)',
    gap: '1rem',
    marginBottom: '5rem',
    boxSizing: 'border-box',
  },

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
