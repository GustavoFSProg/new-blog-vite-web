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

const FormContainerName = styled.div`
  display: flex;

  width: 100%;
  align-items: center;
  margin-bottom: -41px;

  @media screen and (max-width: 820px) {
    margin-left: 75px;
  }
`

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: auto;
  /* background: green; */
  flex-direction: column;
  font-size: 24px;

  @media screen and (max-width: 820px) {
    width: 100vw;
  }
`

// const Form = styled.form`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 40%;
//   /* height: 200px; */
//   /* background: green; */
//   flex-direction: column;
//   font-size: 24px;

//   @media screen and (max-width: 820px) {
//     width: 100vw;
//   }
// `

const Botao = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 101%;
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
  margin-top: 37px;

  &:hover {
    background: #31633e;
    color: yellow;
  }

  @media screen and (max-width: 820px) {
    width: 84%;
    /* width: 100%; */
  }
`

const H2 = styled.h2`
  display: flex;

  @media screen and (max-width: 820px) {
    font-size: 19px;
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
      {/* <Navbar /> */}
      <Container>
        <DashboardMenu />
        <H2>CADASTRO DE USUARIO ADMIN</H2>

        <br />

        <Form onSubmit={registerPost}>
          {/* <FormContainerName> */}
          <InputDinamic
            placeholder="Nome"
            type="text"
            invalid={true}
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* </FormContainerName> */}
          {/* <FormContainerName
            style={{
              marginBottom: '-41px',
            }}
          > */}
          <InputDinamic
            placeholder="Email"
            type="email"
            invalid={true}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* </FormContainerName> */}

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
