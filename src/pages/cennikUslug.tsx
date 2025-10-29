import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import PageContainer from '../components/pageContainer';
import HeaderContainer from '../components/headerContainer';
//import PraxiLogo from '../components/praxiLogo';
import praxiLogo from '../images/praxiLogo.webp'
import TextLabel from '../components/textLabel';
import CustomFooter from '../components/customFooter';


interface containerProps{
  children: React.ReactNode,
  className?: string
}

const Table: React.FC<containerProps> = ({children}) => {
  return (
  <table className='w-11/12'>
    {children}
  </table>
  )
}

const TableLabel: React.FC<containerProps> = ({children}) => {
  return (
  <div className='
  text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl
  mb-6 xs:mb-8 sm:mb-12 md:mb-14 lg:mb-18  2xl:mb-18 
  ml-4 xs:ml-6 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-16 2xl:ml-20
  font-light'>
    {children}
  </div>
  )
}

const Cell: React.FC<containerProps> = ({children, className}) => {
  return (
  <td className={`border border-black font-light
  text-md xs:text-lg sm:text-xl md:text-2xl lg:text-3xl
  text-center 
  p-2 xs:p-2 sm:p-3 md:p-6
  w-1/2
  ${className}
  `}>
    {children}
  </td>
  )
}

const TableContainer: React.FC<containerProps> = ({children, className}) => {
  return (
  <div className='mb-12 xs:mb-16 sm:mb-32 md:mb-52 xl:mb-64'>
    {children}
  </div>
  )
}

const SubTableContainer: React.FC<containerProps> = ({children, className}) => {
  return (
    <div className='flex justify-center'>
      {children}
    </div>
  )
}


const CennikUslug: React.FC = () => {
  const navigate = useNavigate()
  return (
    <PageContainer>
        <div className='
        grid grid-flow-col  
        h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px] 2xl:h-[1000px]
        items-center content-center p-8'>
          <img onClick={() => navigate('/praxident')} src={praxiLogo} alt=""
          className='h-[100px] xs:h-[120px] sm:h-[150px] lg:h-[240px] xl:h-[320px]' />
          <TextLabel className={`
            text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
            xl:pb-8
            `} >CENNIK USŁUG</TextLabel>
        </div>
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
      <SubTableContainer>
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
      </SubTableContainer>
  </TableContainer>
  )
}

const StomatologiaDziecieca: React.FC = () => {
  return (
  <TableContainer>
    <TableLabel>STOMATOLOGIA DZIECIĘCA</TableLabel>
      <SubTableContainer>
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
      </SubTableContainer>
  </TableContainer>
  )
}

const Protetyka: React.FC = () => {
  return (
  <TableContainer>
    <TableLabel>PROTETYKA</TableLabel>
      <SubTableContainer>
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
    </SubTableContainer>
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
