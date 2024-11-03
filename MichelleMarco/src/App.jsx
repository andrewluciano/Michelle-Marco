import {  } from 'react'

import './App.css'
import { Container } from './css/Styles'
import { BlocoPrincipal } from '/src/Blocos/BlocoPrincipal'
import { BlocoDays } from '/src/Blocos/BlocoDays'
import { BlocoLocation } from '/src/Blocos/BlocoLocation'
import { BlocoMainTips } from '/src/Blocos/BlocoMainTips'

function App() {


  return (
    <>
      <Container>
        <BlocoPrincipal />
        <BlocoDays />
        <BlocoLocation />
        <BlocoMainTips />
      </Container>
    </>
  )
}

export default App
