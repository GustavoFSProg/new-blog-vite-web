import { useState } from 'react'
import api from '../api'
import styled from 'styled-components'
import Navbar from '../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import DashboardMenu from '../Dashboard/DashboardMenu'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  /* background: #d9d9d9; */
  flex-direction: column;
  font-size: 24px;
  margin-top: -12px;
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

const TextArea = styled.textarea`
  border-radius: 11px;

  padding-top: 12px;
  padding-left: 12px;
  padding-bottom: 9px;
  margin-bottom: -39px;

  @media screen and (max-width: 820px) {
    width: 80%;
  }
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

  @media screen and (max-width: 820px) {
    width: 80%;
  }
`

const Botao = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 495px;
  height: 45px;
  background: #394d3e;
  font-size: 14px;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  /* margin-right: 20px; */
  transition: all ease 0.8s;

  &:hover {
    background: #31633e;
    color: yellow;
  }

  @media screen and (max-width: 820px) {
    width: 85%;
  }
`

export default function RegisterPost() {
  const [image, setImage] = useState([])
  const [title, setTitle] = useState('')
  const [texto, setTexto] = useState('')
  const [description, setDescription] = useState('')
  const [autor, setAutor] = useState('')
  const [likes, setLikes] = useState(0)
  const [views, setViews] = useState(0)

  const navigate = useNavigate()

  async function registerPost(e) {
    e.preventDefault()

    // const Token = sessionStorage.getItem('token')
    try {
      const data = new FormData()

      data.append('title', title)
      data.append('image', image)
      data.append('description', description)
      data.append('texto', texto)
      data.append('autor', autor)
      data.append('likes', likes)
      data.append('views', views)

      await api.post('/register', data)

      alert('Sucesso!')

      navigate('/')
      return
    } catch (error) {
      return alert(error)
    }
  }

  return (
    <div>
      <Container>
        <DashboardMenu />

        <br />

        <Form onSubmit={registerPost}>
          IMAGEM:
          <Input type="file" id="image" onChange={(e) => setImage(e.target.files[0])} />
          <br />
          <br />
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <TextArea
            placeholder="Texto"
            rows="22"
            cols="58"
            id="text"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
          <br />
          <br />
          <Input
            type="text"
            placeholder="Descrição"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <Input
            type="text"
            name="autor"
            placeholder="Autor"
            id="autor"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
          <br />
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
