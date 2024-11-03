import {} from 'react';

  
import { Container,ContainerItens,Blocos,Titulo,Paragrafo}  from './Styles';
import { TituloBloco,SubTituloBloco,ButtonDefault } from '/src/css/Styles';


export const BlocoDays = () => {
  


  return (
    <Container>
        <TituloBloco>3 days to celebrate</TituloBloco>
        <SubTituloBloco>the celebration agenda is defined and we we hope to
        have you as part of all of them</SubTituloBloco>
        <ContainerItens>
          <Blocos>
            <img />
            <Titulo>Welcome <span>15 September</span></Titulo>
            <Paragrafo>Check-in available, cocktail and light dinner servedto welcome everybodyto the celebration</Paragrafo>
            <ButtonDefault>More Information</ButtonDefault>
          </Blocos>
          <Blocos>
            <img />
            <Titulo>BIG DAY <span>16 September</span></Titulo>
            <Paragrafo>Ceremony, dinner and party will fulfill this daycelebration</Paragrafo>
            <ButtonDefault>More Information</ButtonDefault>
          </Blocos>
          <Blocos>
            <img />
            <Titulo>Departures <span>17 September</span></Titulo>
            <Paragrafo>Breakfast and check-out</Paragrafo>
            <ButtonDefault>More Information</ButtonDefault>
          </Blocos>
        </ContainerItens>
    </Container>
  );
};