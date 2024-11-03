import {} from 'react';

  
import { Container, ImagemDays}  from './Styles';
import { AreaTituloBloco,TituloBloco,SubTituloBloco,ButtonDefault,ContainerItens,Blocos, Titulo,Paragrafo } from '/src/css/Styles';


export const BlocoDays = () => {
  


  return (
    <Container>
        <AreaTituloBloco>
          <TituloBloco>3 days to celebrate</TituloBloco>
          <SubTituloBloco>the celebration agenda is defined and we we hope to
          have you as part of all of them</SubTituloBloco>
        </AreaTituloBloco>
        <ContainerItens>
          <Blocos>
            <ImagemDays><img src="/src/assets/images/3days/day-15.png" /></ImagemDays>
            <Titulo>Welcome <span>15 September</span></Titulo>
            <Paragrafo>Check-in available, cocktail and light dinner servedto welcome everybodyto the celebration</Paragrafo>
            <ButtonDefault>More Information</ButtonDefault>
          </Blocos>
          <Blocos size="destaque">
          <ImagemDays><img src="/src/assets/images/3days/day-16.png" /></ImagemDays>
            <Titulo>BIG DAY <span>16 September</span></Titulo>
            <Paragrafo>Ceremony, dinner and party will fulfill this daycelebration</Paragrafo>
            <ButtonDefault>More Information</ButtonDefault>
          </Blocos>
          <Blocos>
          <ImagemDays><img src="/src/assets/images/3days/day-17.png" /></ImagemDays>
            <Titulo>Departures <span>17 September</span></Titulo>
            <Paragrafo>Breakfast and check-out</Paragrafo>
            <ButtonDefault>More Information</ButtonDefault>
          </Blocos>
        </ContainerItens>
    </Container>
  );
};