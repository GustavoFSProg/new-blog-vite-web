import styled from 'styled-components'
import Drawer from '../drawer'
// import Drawer from '@mui/material/Drawer'
// import SwipeableTemporaryDrawer from '../drawer'
// import TemporaryDrawer from '../Drawer'

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: auto;
  font-size: 24px;
  background: black;
  padding-left: 30px;
  padding-top: 15px;
  padding-bottom: 25px;
  color: white;

  @media screen and (max-width: 850px) {
    width: 90vw;
  }
`

const Blogger = styled.div`
  display: flex;
  width: 82%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background: green; */

  @media screen and (max-width: 850px) {
    width: 80%;
  }
`

const Span = styled.div`
  display: flex;
  font-size: 28px;
  letter-spacing: 10px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 850px) {
    font-size: 20px;
    margin-left: -25px;
  }
`

const Botao = styled.span`
  @media screen and (max-width: 850px) {
    margin-left: -25px;
  }
`

export default function Navbar() {
  return (
    <Container>
      <Botao>
        <Drawer />
      </Botao>
      <Blogger>
        <Span>BLOGGER</Span>
        <span
          style={{
            fontSize: '14px',
            letterSpacing: '10px',
            fontStyle: 'italic',
          }}
        >
          Design
        </span>
        {/* <span style={{ fontSize: '20px' }}>BLOGGER</span>
        <span style={{ fontSize: '16spanx', fontStyle: 'italic' }}>Design</span> */}
      </Blogger>
    </Container>
  )
}
