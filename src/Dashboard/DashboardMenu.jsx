import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: auto;
  font-size: 24px;
  /* background: gray; */
  padding-left: 30px;
  padding-top: 15px;
  padding-bottom: 25px;
  color: white;
  /* position: fixed top; */

  @media screen and (max-width: 850px) {
    width: 92vw;
  }
`

const Blogger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100vw;
  height: auto;
  font-size: 20px;
  background: gray;
  padding-left: 30px;
  padding-top: 15px;
  padding-bottom: 25px;
  color: white;
  /* position: fixed top; */

  @media screen and (max-width: 850px) {
    width: 92vw;
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
    margin-right: 40px;
  }
`

export default function DashboardMenu() {
  return (
    <Container>
      <h1>DASHBOARD</h1>
      <Blogger>
        <TitleContainer>
          <Link
            to="/register"
            style={{
              color: 'white',
              marginTop: '-3px',
              textDecoration: 'none',
            }}
          >
            CADASTRO DE POST
          </Link>
        </TitleContainer>
        <TitleContainer>EDIÇÃO DE POST</TitleContainer>
        <TitleContainer>CADASTRO DE USUÁRIO</TitleContainer>
        <TitleContainer>POSTS</TitleContainer>
      </Blogger>
    </Container>
  )
}
