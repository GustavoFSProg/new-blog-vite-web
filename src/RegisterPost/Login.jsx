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

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { user, setUser } = useContext(userContext)

  const navigate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault()

    try {
      const dados = { email, password }

      const { data } = await api.post('/login', dados)

      sessionStorage.setItem('token', data.token)

      setUser(true)

      navigate('/dashboard')

      alert('Login whit Sucesso!')
    } catch (error) {
      return alert(error)
    }
  }

  function CheckUserLogged() {
    console.log(`User: ${user}`)

    if (user === true) {
      navigate('/dashboard')
    } else {
      navigate('/login')
    }
  }

  useEffect(() => {
    CheckUserLogged()
  }, [])

  return (
    <div>
      <Navbar />
      <Container>
        <br />
        <h1>LOGIN</h1>

        <br />

        <Form onSubmit={handleLogin}>
          <Input
            name="email"
            placeholder="EMAIL:"
            value={email}
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="SENHA:"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Botao type="submit">LOGIN</Botao>
        </Form>

        <br />
        <br />
        <br />
        <br />
      </Container>
    </div>
  )
}
