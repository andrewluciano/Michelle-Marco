import {} from 'react';

  
import { Container,ImagemDays}  from './Styles';
import { SubTituloBloco, TituloBloco,AreaTituloBloco, ContainerItens, Blocos, Paragrafo } from '/src/css/Styles';


export const BlocoLocation = () => {
  
  return (
    <Container>
      <AreaTituloBloco>
        <TituloBloco>Location</TituloBloco>
        <SubTituloBloco>more information for location</SubTituloBloco>
      </AreaTituloBloco>
      <ContainerItens>
        <Blocos>
          <ImagemDays><img src="/src/assets/images/Location/table.png" /></ImagemDays>
        </Blocos>
        <Blocos largura="2" className="alignLeft">
          <img src="/src/assets/images/location/borgo-divino-logo.svg" />
          <Paragrafo className="destaqueLocation">
            We`ve selected an ancient village to build a remarkable moment with our family and closest friends
          </Paragrafo>
          <Paragrafo className="LocationAddress">
            <img src="/src/assets/images/icons/location.svg" width="40px"/>
            Via Le mura, 5 50025 Montespertoli (Firenze) - Italy
            30 minutes drive from Florence airport
          </Paragrafo>
        </Blocos>

      </ContainerItens>
    </Container>
  );
};