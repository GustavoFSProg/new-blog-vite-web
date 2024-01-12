import { useContext, useEffect, useState } from 'react'
import api from '../api'
import styled from 'styled-components'
import Navbar from '../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../userContext'

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

  //   function CheckUserLogged() {
  //     if (user === true) {
  //       navigate('/dashboard')
  //     } else {
  //       //   navigate('/login')
  //       return alert('Efetue o Login pra entrar!')
  //     }
  //   }

  async function HandleAuth() {
    const { data } = await api.post('/auth', token)

    console.log(`Data: ${data.data}`)

    if (data) {
      console.log(`OK`)

      return setDados('OK')
    }

    return null
  }

  useEffect(() => {
    HandleAuth()
    // CheckUserLogged()
  }, [dados])

  return (
    <div>
      <Navbar />
      <Container>
        <br />

        {dados === 'OK' ? <h1>DASHBOARD</h1> : <h1>ACESSO PROIBIDO!</h1>}

        <br />
      </Container>
    </div>
  )
}
