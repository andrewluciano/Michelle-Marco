import {} from 'react';

  
import { Container}  from './Styles';
import { TituloBloco } from '/src/css/Styles';
import { SubTituloBloco } from '/src/css/Styles';

export const BlocoMainTips = () => {
  


  return (
    <Container>
        <TituloBloco>Main Tips</TituloBloco>
        <SubTituloBloco>Find bellow further details about weather, dress code, how to get there and additional 
        activities available at the hotel</SubTituloBloco>
    </Container>
  );
};