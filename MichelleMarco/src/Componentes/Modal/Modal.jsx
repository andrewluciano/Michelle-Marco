/* eslint-disable react/prop-types */
import { } from 'react';
import {
  AreaModal,
  Container,
  Head,
  Body,
  Titulo,
  BotaoFechar,
} from './Styles';


export const Modal = (props) => {
  return (
    <>
      {props.OpenModal && (
        <Container>
          <AreaModal>
            <Head>
              <Titulo>
                {props.TituloModal}
              </Titulo>
              <BotaoFechar onClick={props.Close} />
            </Head>
            <Body>{props.Conteudo}</Body>
          </AreaModal>
        </Container>
      )}
    </>
  );
};