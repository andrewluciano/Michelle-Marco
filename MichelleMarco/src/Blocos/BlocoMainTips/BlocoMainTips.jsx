import {} from 'react';

  
import { Container }  from './Styles';
import { AreaTituloBloco, TituloBloco , SubTituloBloco, ContainerItens,Blocos, Titulo,Paragrafo} from '/src/css/Styles';

export const BlocoMainTips = () => {
  


  return (
    <Container>
        <AreaTituloBloco>
          <TituloBloco>Main Tips</TituloBloco>
          <SubTituloBloco>Find bellow further details about weather, dress code, how to get there and additional 
          activities available at the hotel</SubTituloBloco>
        </AreaTituloBloco>
        <ContainerItens>
          <Blocos>
          <Titulo>Hotel <span>Logistics</span></Titulo>
          <Paragrafo>
            Check-in: 3pm <br/>
            Check-out: 10am <br/>
            Additional activities are offered by the hotel and should be booked directly <br/>
            Room rate: 100 USD per night
          </Paragrafo>
          </Blocos>
          <Blocos>
          <Titulo>Weather <span>forecast</span></Titulo>
          <Paragrafo>
            Expect a typical day time high of 27oC and low 17oC overnight. We suggest packing a soft jacket for the evening and some swing suit to enjoy restful time by the pool. <br/>
            Sunrise: 7h15am <br/>
            Sunset: 7h30pm
          </Paragrafo>
          </Blocos>
        </ContainerItens>
    </Container>
  );
};