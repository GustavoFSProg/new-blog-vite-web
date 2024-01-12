import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 97vw;
  height: auto;
  font-size: 24px;
  background: gray;
  padding-left: 30px;
  padding-top: 10px;
  padding-bottom: 15px;
  color: white;
  /* position: fixed top; */

  @media screen and (max-width: 850px) {
    width: 92vw;
  }
`

const Blogger = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  height: auto;
  font-size: 20px;
  /* background: #959c96; */
  padding-left: 30px;
  padding-right: 30px;
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
  width: 50rem;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  /* background: green; */
  /* margin-left: -40px; */

  @media screen and (max-width: 850px) {
    width: 80%;
    /* margin-left: -10px; */
  }
`

export default function DashboardMenu() {
  const navigate = useNavigate()

  function LogOut() {
    sessionStorage.clear()

    alert('Usuário deslogado!!')

    navigate('/')
  }
  return (
    <Container>
      <Blogger>
        <TitleContainer>
          {' '}
          <Link
            to="/dashboard"
            style={{
              color: '#dee0de',
              //   marginTop: '-3px',
              textDecoration: 'none',
            }}
          >
            PAINEL
          </Link>
        </TitleContainer>
        <TitleContainer>
          <Link
            to="/register"
            style={{
              color: 'white',
              //   marginTop: '-3px',
              textDecoration: 'none',
            }}
          >
            CADASTRO DE POST
          </Link>
        </TitleContainer>

        <TitleContainer>POSTS</TitleContainer>
        <TitleContainer>CADASTRO DE USUÁRIO</TitleContainer>
        <TitleContainer>
          <div style={{ cursor: 'pointer' }} onClick={() => LogOut()}>
            LOGOUT
          </div>
        </TitleContainer>
      </Blogger>
    </Container>
  )
}
