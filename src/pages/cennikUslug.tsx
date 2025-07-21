import React from 'react';
import praxiLogo from '../images/praxiLogo.png'

const CennikUslug: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.headerRow}>
        <img src={praxiLogo} alt="praxident-logo" style={styles.praxiLogo}/>
        <div style={styles.textLabel}>CENNIK USŁUG</div>
      </div>
      <Wybielanie/>
      <StomatologiaDziecieca/>
      <Protetyka/>
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Praxident</p>
      </footer>
    </div>
  );
};

const Wybielanie: React.FC = () => {
  return (
  <div style={styles.tableContainer}>
    <div style={styles.tableLabel}>WYBIELANIE</div>
    <table style={styles.table}>
      <tr>
        <td style={styles.cell}>WYBIELANIE ZĘBA MARTWEGO</td>
        <td style={styles.cell}>500</td>
      </tr>
      <tr>
        <td style={styles.cell}>WYBIELANIE METODĄ NAKŁADKOWĄ</td>
        <td style={styles.cell}>OD 900</td>
      </tr>
      <tr>
        <td style={styles.cell}>WYBIELANIE GABINETOWE</td>
        <td style={styles.cell}>2200</td>
      </tr>
    </table>
  </div>
  )
}

const StomatologiaDziecieca: React.FC = () => {
  return (
  <div style={styles.tableContainer}>
    <div style={styles.tableLabel}>STOMATOLOGIA DZIECIĘCA</div>
    <table style={styles.table}>
      <tr>
        <td style={styles.cell}>WYPEŁNIENIE W ZĘBIE MLECZNYM</td>
        <td style={styles.cell}>150</td>
      </tr>
      <tr>
        <td style={styles.cell}>USUNIĘCIE ZĘBA MLECZNEGO</td>
        <td style={styles.cell}>100 </td>
      </tr>
      <tr>
        <td style={styles.cell}>LAKOWANIE</td>
        <td style={styles.cell}>100</td>
      </tr>
      <tr>
        <td style={styles.cell}>POSZERZONE LAKOWANIE</td>
        <td style={styles.cell}>200</td>
      </tr>
    </table>
  </div>
  )
}

const Protetyka: React.FC = () => {
  return (
  <div style={styles.tableContainer}>
    <div style={styles.tableLabel}>PROTETYKA</div>
    <table style={styles.table}>
      <tr>
        <td style={styles.cell}>PROTEZA SZKIELETOWA</td>
        <td style={styles.cell}>2500-2700</td>
      </tr>
      <tr>
        <td style={styles.cell}>PROTEZA AKRONOWA</td>
        <td style={styles.cell}>2500-2700 </td>
      </tr>
      <tr>
        <td style={styles.cell}>PROTEZA AKRYLOWA CZĘŚCIOWA</td>
        <td style={styles.cell}>1200</td>
      </tr>
      <tr>
        <td style={styles.cell}>PROTEZA CAŁKOWITA</td>
        <td style={styles.cell}>2000</td>
      </tr>
      <tr>
        <td style={styles.cell}>KORONA PEŁNOCERAMICZNA - CERKON</td>
        <td style={styles.cell}>2000</td>
      </tr>
      <tr>
        <td style={styles.cell}>KORONA CERAMICZNA NA PODBUDOWIE METALOWEJ</td>
        <td style={styles.cell}>1200 </td>
      </tr>
      <tr>
        <td style={styles.cell}>MOST KOMPOZYTOWY NA WŁÓKNIE SZKLANYM</td>
        <td style={styles.cell}>900-1300</td>
      </tr>
      <tr>
        <td style={styles.cell}>LICÓWKA</td>
        <td style={styles.cell}>2000</td>
      </tr>
      <tr>
        <td style={styles.cell}>DEMONTAŻ KORONY</td>
        <td style={styles.cell}>100</td>
      </tr>
      <tr>
        <td style={styles.cell}>KORONA TYMCZASOWA</td>
        <td style={styles.cell}>200 </td>
      </tr>
      <tr>
        <td style={styles.cell}>PODŚCIELENIE PROTEZY</td>
        <td style={styles.cell}>500</td>
      </tr>
      <tr>
        <td style={styles.cell}>NAPRAWA PROTEZY</td>
        <td style={styles.cell}>OD 150</td>
      </tr>
      <tr>
        <td style={styles.cell}>DOSTAWIENIE ZĘBA DO PROTEZY</td>
        <td style={styles.cell}>150</td>
      </tr>
      <tr>
        <td style={styles.cell}>MOST PEŁNOCERAMICZNY (1 PUNKT)</td>
        <td style={styles.cell}>2400 </td>
      </tr>
      <tr>
        <td style={styles.cell}>MOST CERAMICZNY NA PODBUDOWIE METALOWEJ (1 PUNKT)</td>
        <td style={styles.cell}>1200</td>
      </tr>
      <tr>
        <td style={styles.cell}>MOST TYMCZASOWY</td>
        <td style={styles.cell}>400</td>
      </tr>
    </table>
  </div>
  )
}

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
    marginBottom: '10rem'
  },
  praxiLogo: {
    width: '100%',
    maxWidth: '40rem',
    height: 'auto',
    marginBottom: '2rem',
    marginLeft: '10vw',
  },
  textLabel: {
    fontSize: '5rem',
    marginRight: '10vw',
  },
  tableContainer: {

  },
  tableLabel: {
    marginBottom: '4vh',
    fontSize: '2.5rem',
    marginLeft: '10vw'
  },
  table: {
    borderWidth: '2px',
    border: '2px solid black',
    borderCollapse: 'collapse',
    width: '80vw',
    marginLeft: '10vw',
    marginRight: '10vw',
    marginBottom: '20rem'
  },
  cell: {
    border: '1px solid black',
    padding: '0.5rem',
    fontSize: '2rem',
    width: '10rem',
    textAlign: 'center'
  }

}

export default CennikUslug;
