import { useContext, useEffect, useState } from 'react'
import api from '../api'
import styled from 'styled-components'
import Navbar from '../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../userContext'
import DashboardMenu from '../Dashboard/DashboardMenu'
import Footer from '../components/Footer/Footer'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  /* background: #d9d9d9; */
  flex-direction: column;
  font-size: 24px;
  margin-top: 20px;
`

const H1 = styled.h1`
  display: flex;

  @media screen and (max-width: 820px) {
    font-size: 23px;
  }
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

  @media screen and (max-width: 820px) {
    width: 100vw;
  }
`

const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27.2rem;
  height: auto;
  /* background: #d9d9d9; */
  font-size: 15px;
  padding-top: 12px;
  padding-left: 11px;
  padding-bottom: 12px;
  border-radius: 10px;
  margin-bottom: -10px;

  @media screen and (max-width: 820px) {
    width: 80%;
    margin-top: -9px;
  }
`

const Botao = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28rem;
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
  margin-top: -30px;

  &:hover {
    background: #31633e;
    color: yellow;
  }

  @media screen and (max-width: 820px) {
    width: 84%;
  }
`

export default function ChangePassword() {
  const [password, setPassword] = useState('')

  const { user, setUser } = useContext(userContext)

  const navigate = useNavigate()

  async function changePassword(e) {
    e.preventDefault()

    const id = sessionStorage.getItem('id_user')
    console.log(id)

    try {
      const data = await api.put(`/change-password/${id}`, { password: password })

      setUser(true)
      console.log(data)

      // navigate('/dashboard')

      alert('Senha atualizada com sucesso!')
    } catch (error) {
      return alert(error)
    }
  }

  // function CheckUserLogged() {
  //   if (user === true) {
  //     navigate('/change-password')
  //   } else {
  //     navigate('/login')
  //   }
  // }

  // useEffect(() => {
  //   CheckUserLogged()
  // }, [])

  return (
    <div>
      <Navbar />
      <Container>
        <DashboardMenu />

        <br />
        <H1>CADASTRAR NOVA SENHA</H1>

        <br />

        <Form onSubmit={changePassword}>
          <br />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Degite a nova senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Botao type="submit">NOVA SENHA</Botao>
        </Form>

        <br />
        <br />
        <br />
        <br />
      </Container>
      <Footer />
    </div>
  )
}
