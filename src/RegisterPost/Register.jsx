'use client'

import { useState } from 'react'
import api from '../api'
import styled from 'styled-components'
import Navbar from '../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

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
  width: 31rem;
  height: auto;
  background: green;
  font-size: 17px;
  padding-top: 9px;
  padding-left: 11px;
  padding-bottom: 9px;
  border-radius: 10px;
  margin-bottom: -10px;
  color: yellow;
  transition: all ease 2.9s;
  cursor: pointer;

  &:hover {
    background: yellow;
    color: green;
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
      <Navbar />
      <Container>
        {/* <h1>CADASTRO DE POST</h1> */}

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
          <textarea
            placeholder="Texto"
            rows="22"
            cols="58"
            id="text"
            value={texto}
            style={{
              borderRadius: '11px',

              paddingTop: '12px',
              paddingLeft: '12px',
              paddingBottom: '9px',
              marginBottom: '-39px',
            }}
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
