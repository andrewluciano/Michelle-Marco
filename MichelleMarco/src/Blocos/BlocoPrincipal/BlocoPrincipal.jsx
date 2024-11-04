import {} from 'react';

  
import { Container,BlocoSaveTheDate,TituloBlocoSaveTheDate}  from './Styles';
import { Paragrafo } from '/src/css/Styles';

import useCountDown from '/src/hooks/userCountDown'

export const BlocoPrincipal = () => {
  
  const [day, hour, minute] = useCountDown('09/12/2025 16:30:00')


  

  return (
    <Container>
    <>
Location
Confirmation
Q&A
RSVP

    </>
    <img src="/src/assets/images/principal/MichelleEMarco.svg" width="315px" title="Michelle And Marco"/>
    <Paragrafo className="decorativo">
      12.09.2025 4h30pm - 17.09.2025 12h00 pm<br />
      città metropolitana di firenze, via delle mura, 5<br />
      50025 Montespertoli Fl, Italy
    </Paragrafo>
    <Paragrafo className="useHashTag">
      use the hashtag #michellemarco
    </Paragrafo>
        <BlocoSaveTheDate>
          <TituloBlocoSaveTheDate>Save The Date</TituloBlocoSaveTheDate>
          {day} days, {hour} hours, {minute} minutes
        </BlocoSaveTheDate>
    </Container>
  );
};