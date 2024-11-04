import {useState} from 'react';
import { Modal } from '/src/Componentes/Modal';
import { Day1 } from './Day1'; 
import { Day2 } from './Day2'; 
import { Day3 } from './Day3'; 
import { Container, ImagemDays}  from './Styles';
import { AreaTituloBloco,TituloBloco,SubTituloBloco,ButtonDefault,ContainerItens,Blocos, Titulo,Paragrafo } from '/src/css/Styles';


export const BlocoDays = () => {
  
  const [
    OpenDay1,
    setOpenDay1,
  ] = useState(false);
  const [
    OpenDay2,
    setOpenDay2,
  ] = useState(false);
  const [
    OpenDay3,
    setOpenDay3,
  ] = useState(false);
  
  const FecharModal = () => {
    setOpenDay1(false);
    setOpenDay2(false);
    setOpenDay3(false);
  };

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
            <Paragrafo className="alturaFixa">Check-in available, cocktail and light dinner servedto welcome everybodyto the celebration</Paragrafo>
            <ButtonDefault onClick={() => {setOpenDay1(!OpenDay1);}}>More Information</ButtonDefault>
          </Blocos>
          <Blocos size="destaque">
          <ImagemDays><img src="/src/assets/images/3days/day-16.png" /></ImagemDays>
            <Titulo>BIG DAY <span>16 September</span></Titulo>
            <Paragrafo className="alturaFixa">Ceremony, dinner and party will fulfill this daycelebration</Paragrafo>
            <ButtonDefault onClick={() => {setOpenDay2(!OpenDay2);}}>More Information</ButtonDefault>
          </Blocos>
          <Blocos>
          <ImagemDays><img src="/src/assets/images/3days/day-17.png" /></ImagemDays>
            <Titulo>Departures <span>17 September</span></Titulo>
            <Paragrafo className="alturaFixa">Breakfast and check-out</Paragrafo>
            <ButtonDefault onClick={() => {setOpenDay3(!OpenDay3);}}>More Information</ButtonDefault>
          </Blocos>
        </ContainerItens>
        {OpenDay1 && (
          <>
            <Modal
              TituloModal={'Day 1 - 15 September 2025'}
              Conteudo={<Day1 Close={FecharModal} />}
              OpenModal={OpenDay1}
              Close={FecharModal}
            />
          </>
        )}
        {OpenDay2 && (
          <>
            <Modal
              TituloModal={'Day 2 - 15 September 2025'}
              Conteudo={<Day2 Close={FecharModal} />}
              OpenModal={OpenDay2}
              Close={FecharModal}
            />
          </>
        )}
        {OpenDay3 && (
          <>
            <Modal
              TituloModal={'Day 3 - 15 September 2025'}
              Conteudo={<Day3 Close={FecharModal} />}
              OpenModal={OpenDay3}
              Close={FecharModal}
            />
          </>
        )}
    </Container>





  );
};