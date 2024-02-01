import * as React from 'react'

import { useEffect, useState } from 'react'
import api from '../api'
import styled from 'styled-components'
import Navbar from '../components/Navbar/Navbar'
import moment from 'moment'
import { AiTwotoneLike } from 'react-icons/ai'

import { makeStyles } from '@material-ui/core/styles'
import Carder from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import BButton from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useNavigate } from 'react-router-dom'
import DashboardMenu from '../Dashboard/DashboardMenu'
import FormPropsTextFields from '../components/Input'
import StateTextFields from '../components/InputDois'
import TextField from '@mui/material/TextField'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  background: #d9d9d9;
  flex-direction: column;
  font-size: 24px;
`

const TextContainer = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 820px) {
    width: 150%;
  }
`

const TotalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  flex-direction: column;
  cursor: pointer;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 50vw;
    margin-left: -100px;
  }
`

const AutorDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35rem;
  width: 100vw;

  @media screen and (max-width: 820px) {
    margin-left: -50px;
    margin-top: 20px;
    padding-bottom: 10px;
  }
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  background: #394d3e;
  /* flex-direction: column; */
  font-size: 14px;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  transition: all ease 0.8s;
  cursor: pointer;

  &:hover {
    background: #31633e;
    color: yellow;
  }

  @media screen and (max-width: 820px) {
    display: flex;
    width: 145%;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 14px;

    height: 45px;
  }
`

const H1 = styled.h1`
  display: flex;
  color: #4d4d4d;

  @media screen and (max-width: 820px) {
    font-size: 23px;
  }
`

const Form = styled.form`
  display: flex;
  color: #595959;
  flex-direction: column;

  @media screen and (max-width: 820px) {
    width: 50vw;
  }
`

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export default function UpdatePost() {
  const [posts, setPosts] = useState({})
  const [dados, setDados] = useState('AAAAA')
  const [buttonopen, setButtonOpen] = useState(false)
  const [title, setTitle] = React.useState('')
  const [texto, setTexto] = React.useState('')
  const [autor, setAutor] = React.useState('')
  const [image, setImage] = useState([])

  const [description, setDescription] = React.useState('')

  const navigate = useNavigate()

  async function deletePost() {
    const id = sessionStorage.getItem('POST_ID')
    try {
      await api.delete(`/delete/${id}`)

      navigate('/posts')

      return alert(' Post Deletado!!')
    } catch (error) {
      return alert(error)
    }
  }

  function CardButton(id) {
    sessionStorage.setItem('POST_ID', id)
    return setButtonOpen(true)
  }

  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
  }

  async function getOnePost() {
    try {
      const id = sessionStorage.getItem('POST-ID')
      const { data } = await api.get(`/get-one-post/${id}`)

      setPosts(data)
      setTitle(data.title)
      setTexto(data.texto)
      setAutor(data.autor)
      setDescription(data.description)
    } catch (error) {
      return alert(error)
    }
  }

  async function handleLikes(id) {
    try {
      await api.put(`/update-likes/${id}`)

      location.reload()
    } catch (error) {
      return alert(error)
    }
  }

  async function updatePosts(e) {
    e.preventDefault()

    const id = sessionStorage.getItem('POST-ID')
    try {
      const data = new FormData()

      data.append('title', title)
      data.append('image', image)
      data.append('description', description)
      data.append('texto', texto)
      data.append('autor', autor)
      // data.append('likes', likes)
      // data.append('views', views)

      await api.put(`/update-post/${id}`, data)

      alert('Sucesso!')

      navigate('/')
      return
    } catch (error) {
      return alert(error)
    }
  }

  function SimpleCard(id) {
    const classes = useStyles()
    const bull = <span className={classes.bullet}>•</span>

    const Id = sessionStorage.getItem('POST-ID')

    return (
      <Carder
        style={{
          display: 'flex',
          position: 'fixed',
          background: '#ffffcc',
          width: '350px',
          zIndex: '9999',
        }}
        className={classes.root}
      >
        <CardContent>
          <Typography
            style={{ fontSize: '21px', color: '#595959' }}
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Deseja realmente apagar esse Post?
          </Typography>
          <Typography variant="h5" component="h2">
            <BButton
              style={{ fontSize: '20px', marginRight: '20px' }}
              size="small"
              onClick={() => deletePost()}
            >
              SIM
            </BButton>
            <BButton style={{ fontSize: '20px' }} size="small" onClick={() => setButtonOpen(false)}>
              NÃO
            </BButton>
          </Typography>
        </CardContent>
        <CardActions>
          <BButton style={{ color: '#e60000' }} size="small" onClick={() => setButtonOpen(false)}>
            FECHAR
          </BButton>
        </CardActions>
      </Carder>
    )
  }

  useEffect(() => {
    getOnePost()
  }, [])
  return (
    // <div>
    <Container>
      <Navbar />
      <DashboardMenu />
      <H1>EDITAR O POST</H1>

      <br />
      {buttonopen === true ? (
        <div
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <SimpleCard />
        </div>
      ) : null}

      <TotalContainer>
        <Form
          style={{
            display: 'flex',
            color: '#595959',
            flexDirection: 'column',
            // alignItems: 'center',
            height: '80%',
          }}
          onSubmit={updatePosts}
        >
          <p>Imagem</p>
          <input type="file" id="image" onChange={(event) => setImage(event.target.files[0])} />
          <br />

          <img src={posts.image} width="170" height="140" alt="imagem" />
          <br />

          <span>Título</span>
          <TextContainer>
            <TextField
              id="outlined-controlled"
              // label="Controlled"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value)
              }}
              style={{ width: '100%' }}
            />
          </TextContainer>
          <br />
          <span>Texto</span>
          <TextContainer>
            <TextField
              id="outlined-controlled"
              // label="Controlled"
              value={texto}
              multiline
              maxRows={18}
              style={{ width: '48rem' }}
              onChange={(event) => {
                setTexto(event.target.value)
              }}
            />
          </TextContainer>
          <br />
          <span>Autor</span>
          <TextContainer>
            <TextField
              id="outlined-controlled"
              // label="Controlled"
              value={autor}
              onChange={(event) => {
                setAutor(event.target.value)
              }}
              style={{ width: '100%' }}
            />
          </TextContainer>
          <br />
          <span>Descrição</span>
          <TextContainer>
            <TextField
              id="outlined-controlled"
              // label="Controlled"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value)
              }}
              style={{ width: '100%' }}
            />
          </TextContainer>
          <br />
          <br />

          <Button style={{ height: '50px' }} type="submit">
            EDITAR
          </Button>
        </Form>
        <br />
        <br />
        <br />
      </TotalContainer>
    </Container>
    // </div>
  )
}
