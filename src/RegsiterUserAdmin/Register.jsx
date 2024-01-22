import { useState } from 'react'
import api from '../api'
import styled from 'styled-components'
import Navbar from '../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import DashboardMenu from '../Dashboard/DashboardMenu'
import InputDinamic from '../components/InputDinamyc/InputDinamic'
// import Input from '../components/Input'

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
  width: 40%;
  /* height: 200px; */
  /* background: green; */
  flex-direction: column;
  font-size: 24px;
`

const Botao = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  background: #394d3e;
  font-size: 14px;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  /* padding-left: 10px; */
  /* padding-right: 10px; */
  border-radius: 10px;
  /* margin-right: 20px; */
  transition: all ease 0.8s;

  &:hover {
    background: #31633e;
    color: yellow;
  }
`

export default function RegisterUser() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function registerPost(e) {
    e.preventDefault()

    // const Token = sessionStorage.getItem('token')
    try {
      const data = { name, email, password }

      await api.post('/register-admin', data)

      alert('Sucesso!')

      navigate('/')
      return
    } catch (error) {
      return alert(error)
    }
  }

  return (
    <div>
      <Navbar />
      <Container>
        <DashboardMenu />
        <h2>CADASTRO DE USUARIO ADMIN</h2>

        <br />

        <Form onSubmit={registerPost}>
          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              marginBottom: '-41px',
            }}
          >
            <InputDinamic
              placeholder="Nome"
              type="text"
              invalid={true}
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              marginBottom: '-41px',
            }}
          >
            <InputDinamic
              placeholder="Email"
              type="email"
              invalid={true}
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <InputDinamic
            placeholder="Senha"
            type="password"
            invalid={true}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Botao type="submit">CADASTRAR</Botao>
        </Form>

        <br />
        <br />
        <br />
        <br />
      </Container>
    </div>
  )
}
