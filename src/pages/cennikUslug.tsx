import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import PageContainer from '../components/pageContainer';
import HeaderContainer from '../components/headerContainer';
import PraxiLogo from '../components/praxiLogo';
import TextLabel from '../components/textLabel';
import CustomFooter from '../components/customFooter';

interface containerProps{
  children: React.ReactNode
}

const Table: React.FC<containerProps> = ({children}) => {
  return (
  <table className='ml-5 w-[90vw] m-5'>
    {children}
  </table>
  )
}

const TableLabel: React.FC<containerProps> = ({children}) => {
  return (
  <div className='text-4xl ml-5 mb-2 font-light'>
    {children}
  </div>
  )
}

const Cell: React.FC<containerProps> = ({children}) => {
  return (
  <td className='border border-black text-sm text-center px-2 py-3'>
    {children}
  </td>
  )
}

const TableContainer: React.FC<containerProps> = ({children}) => {
  return (
  <div className='mb-10'>
    {children}
  </div>
  )
}


const CennikUslug: React.FC = () => {
  const navigate = useNavigate()
  return (
    <PageContainer>
        <HeaderContainer>
          <PraxiLogo className='mr-10' onClick={() => navigate('/praxident/')} alt="praxident-logo"/>
          <TextLabel className={'w-200 h-100 text-[40px]'}>CENNIK USŁUG</TextLabel>
        </HeaderContainer>
        <Wybielanie/>
        <StomatologiaDziecieca/>
        <Protetyka/>
        <CustomFooter/>

    </PageContainer>
  );
};

const Wybielanie: React.FC = () => {
  return (
  <TableContainer>
    <TableLabel>WYBIELANIE</TableLabel>
    <Table>
      <tr>
        <Cell>WYBIELANIE ZĘBA MARTWEGO</Cell>
        <Cell>500</Cell>
      </tr>
      <tr>
        <Cell>WYBIELANIE METODĄ NAKŁADKOWĄ</Cell>
        <Cell>OD 900</Cell>
      </tr>
      <tr>
        <Cell>WYBIELANIE GABINETOWE</Cell>
        <Cell>2200</Cell>
      </tr>
    </Table>
  </TableContainer>
  )
}

const StomatologiaDziecieca: React.FC = () => {
  return (
  <TableContainer>
    <TableLabel>STOMATOLOGIA DZIECIĘCA</TableLabel>
    <Table>
      <tr>
        <Cell>WYPEŁNIENIE W ZĘBIE MLECZNYM</Cell>
        <Cell>150</Cell>
      </tr>
      <tr>
        <Cell>USUNIĘCIE ZĘBA MLECZNEGO</Cell>
        <Cell>100 </Cell>
      </tr>
      <tr>
        <Cell>LAKOWANIE</Cell>
        <Cell>100</Cell>
      </tr>
      <tr>
        <Cell>POSZERZONE LAKOWANIE</Cell>
        <Cell>200</Cell>
      </tr>
    </Table>
  </TableContainer>
  )
}

const Protetyka: React.FC = () => {
  return (
  <TableContainer>
    <TableLabel>PROTETYKA</TableLabel>
    <Table>
      <tr>
        <Cell>PROTEZA SZKIELETOWA</Cell>
        <Cell>2500-2700</Cell>
      </tr>
      <tr>
        <Cell>PROTEZA AKRONOWA</Cell>
        <Cell>2500-2700 </Cell>
      </tr>
      <tr>
        <Cell>PROTEZA AKRYLOWA CZĘŚCIOWA</Cell>
        <Cell>1200</Cell>
      </tr>
      <tr>
        <Cell>PROTEZA CAŁKOWITA</Cell>
        <Cell>2000</Cell>
      </tr>
      <tr>
        <Cell>KORONA PEŁNOCERAMICZNA - CERKON</Cell>
        <Cell>2000</Cell>
      </tr>
      <tr>
        <Cell>KORONA CERAMICZNA NA PODBUDOWIE METALOWEJ</Cell>
        <Cell>1200 </Cell>
      </tr>
      <tr>
        <Cell>MOST KOMPOZYTOWY NA WŁÓKNIE SZKLANYM</Cell>
        <Cell>900-1300</Cell>
      </tr>
      <tr>
        <Cell>LICÓWKA</Cell>
        <Cell>2000</Cell>
      </tr>
      <tr>
        <Cell>DEMONTAŻ KORONY</Cell>
        <Cell>100</Cell>
      </tr>
      <tr>
        <Cell>KORONA TYMCZASOWA</Cell>
        <Cell>200 </Cell>
      </tr>
      <tr>
        <Cell>PODŚCIELENIE PROTEZY</Cell>
        <Cell>500</Cell>
      </tr>
      <tr>
        <Cell>NAPRAWA PROTEZY</Cell>
        <Cell>OD 150</Cell>
      </tr>
      <tr>
        <Cell>DOSTAWIENIE ZĘBA DO PROTEZY</Cell>
        <Cell>150</Cell>
      </tr>
      <tr>
        <Cell>MOST PEŁNOCERAMICZNY (1 PUNKT)</Cell>
        <Cell>2400 </Cell>
      </tr>
      <tr>
        <Cell>MOST CERAMICZNY NA PODBUDOWIE METALOWEJ (1 PUNKT)</Cell>
        <Cell>1200</Cell>
      </tr>
      <tr>
        <Cell>MOST TYMCZASOWY</Cell>
        <Cell>400</Cell>
      </tr>
    </Table>
  </TableContainer>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
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
    cursor: 'pointer'
    
  },
  textLabel: {
    fontSize: '5rem',
    marginRight: '10vw',
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
    marginBottom: '14rem'
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
