import styled from 'styled-components'
import Drawer from '../drawer'

const Container = styled.div`
  display: flex;
  justify-content: center;
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
    width: 92vw;
  }
`

const Blogger = styled.div`
  display: flex;
  width: 100vw;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  /* background: green; */
  /* margin-left: -40px; */

  @media screen and (max-width: 850px) {
    width: 80%;
    /* margin-left: -10px; */
  }
`

const TitleContainer = styled.div`
  display: flex;
  width: 82%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background: green; */
  /* margin-left: -40px; */

  @media screen and (max-width: 850px) {
    width: 80%;
    /* margin-left: -10px; */
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
  }
`

const Botao = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* width: 100vw; */
  /* height: auto; */
  @media screen and (max-width: 850px) {
    margin-right: 50px;
  }
`

export default function Navbar() {
  return (
    <Container>
      <Blogger>
        <Botao>
          <Drawer />
        </Botao>
        <TitleContainer>
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
        </TitleContainer>
      </Blogger>
    </Container>
  )
}
