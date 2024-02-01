import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import './Dashboard.css'

const Blogger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  font-size: 17px;
  /* background: #959c96; */
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 15px;
  padding-bottom: 25px;
  color: white;
  /* overflow-x: visible; */

  @media screen and (max-width: 850px) {
    width: 50rem;
  }
`

const TitleContainer = styled.div`
  display: flex;
  width: 200px;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  @media screen and (max-width: 850px) {
    width: 100%;
    text-align: center;
    font-size: 14px;
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
    <div className="container-scroll">
      <Blogger>
        <TitleContainer>
          {' '}
          <Link
            to="/dashboard"
            style={{
              color: '#dee0de',
              // marginLeft: '23px',
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
            CADASTRO POST
          </Link>
        </TitleContainer>

        <TitleContainer>
          <Link
            to="/register-user"
            style={{
              color: 'white',
              //   marginTop: '-3px',
              textDecoration: 'none',
            }}
          >
            CADASTRO USUÁRIO
          </Link>
        </TitleContainer>

        <TitleContainer>
          {' '}
          <Link
            to="/posts"
            style={{
              color: 'white',
              //   marginTop: '-3px',
              textDecoration: 'none',
            }}
          >
            POSTS
          </Link>
        </TitleContainer>
        <TitleContainer>
          <Link
            to="/change-password"
            style={{
              color: 'white',
              //   marginTop: '-3px',
              textDecoration: 'none',
            }}
          >
            MUDAR A SENHA
          </Link>
        </TitleContainer>
        <TitleContainer>
          <div style={{ cursor: 'pointer' }} onClick={() => LogOut()}>
            LOGOUT
          </div>
        </TitleContainer>
      </Blogger>
    </div>
  )
}
