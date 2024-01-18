import { useContext, useEffect, useState } from 'react'
import api from '../api'
import styled from 'styled-components'
import Navbar from '../components/Navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from '../userContext'
import DashboardMenu from './DashboardMenu'
import Posts from '../Posts/Posts'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  /* background: #d9d9d9; */
  flex-direction: column;
  font-size: 24px;
`

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  /* background: green; */
  flex-direction: column;
  font-size: 24px;
`

const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: auto;
  /* background: #d9d9d9; */
  font-size: 17px;
  padding-top: 9px;
  padding-left: 11px;
  padding-bottom: 9px;
  border-radius: 10px;
  margin-bottom: -10px;
`

const Botao = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 495px;
  height: 45px;
  background: #394d3e;
  font-size: 16px;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  transition: all ease 0.8s;

  &:hover {
    background: #31633e;
    color: yellow;
  }
`

export default function Dashboard() {
  const { user, setUser } = useContext(userContext)
  const [dados, setDados] = useState('')

  const [isButtonClicked, setIsButtonClicked] = useState('none')

  const token = sessionStorage.getItem('token')

  const navigate = useNavigate()

  function CheckUserLogged() {
    if (user === true) {
      navigate('/dashboard')
    } else {
      //   navigate('/login')
      return user
    }
  }

  async function HandleAuth() {
    const { data } = await api.post('/auth', token)

    if (data) {
      return setDados('OK')
    }

    return null
  }

  useEffect(() => {
    HandleAuth()
    CheckUserLogged()
  }, [dados])

  return (
    <div>
      <Navbar />
      <Container>
        <br />

        {dados === 'OK' ? (
          <>
            {/* <DashboardMenu /> */}
            <h1>DASHBOARD</h1>
            <Posts />
          </>
        ) : (
          <>
            <h1>
              ACESSO PROIBIDO!
              <br />
            </h1>
            <h3>Efetue o login para Entrar</h3>

            <br />
            <Link to="/login" style={{ color: 'white', fontSize: '30px' }}>
              LOGIN
            </Link>
          </>
        )}

        <br />
      </Container>
    </div>
  )
}
