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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  flex-direction: column;
  font-size: 24px;
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
  }
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 45px;
  background: #fff0b3;
  flex-direction: column;
  font-size: 14px;
  color: black;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  margin-right: 20px;
  transition: all ease 0.8s;

  &:hover {
    background: green;
    color: yellow;
  }
`

const DateLikesAllContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: auto;
  flex-direction: row;

  background: green;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const LikesContainer = styled.div`
  width: 310px;
  height: 100px;
  font-size: 18px;
  display: flex;
  align-items: center;
`

const ContainerTexto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-indent: 30px;
  margin-top: 27px;
  line-height: 25px;
  font-size: 16px;

  width: 36rem;

  @media screen and (max-width: 800px) {
    width: 22rem;
    padding-left: 32px;
    padding-right: 30px;
  }
`

const ViewsContainer = styled.div`
  width: 15rem;
  height: 100px;
  font-size: 16px;
  display: flex;
  align-items: center;
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

export default function Profile() {
  const [posts, setPosts] = useState({})
  const [buttonopen, setButtonOpen] = useState(false)

  const navigate = useNavigate()

  async function deletePost() {
    const id = sessionStorage.getItem('POST_ID')
    try {
      await api.delete(`/delete/${id}`)

      navigate('/')

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
    <div>
      <Navbar />
      <Container>
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
          <p>{posts.title}</p>
          <img src={posts.image} width="310" height="200" alt="imagem" />
          <ContainerTexto>{posts.texto}</ContainerTexto>
          <DateLikesAllContainer>
            <LikesContainer>
              <AiTwotoneLike
                style={{ marginLeft: '50px', color: 'blue' }}
                onClick={() => handleLikes(posts.id)}
                fontSize="26px"
              />
              <div style={{ display: 'flex', marginLeft: '5px', marginTop: '4px' }}>
                {posts.likes}
              </div>
            </LikesContainer>

            <ViewsContainer>Views: {posts.views}</ViewsContainer>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '35rem',
              }}
            >
              <span
                style={{
                  // width: '15rem',
                  textIndent: '50px',
                  lineHeight: '25px',
                  fontSize: '16px',
                }}
              >
                Autor: {posts.autor}
              </span>

              <span
                style={{
                  fontSize: '16px',
                  marginTop: '4px',
                  marginLeft: '37px',
                }}
              >
                {getDateWithoutTime(posts.createdAt)}
              </span>
            </div>
          </DateLikesAllContainer>
        </TotalContainer>
        <br />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',

            width: '40%',
            height: 'auto',
            marginBottom: '110px',
          }}
        >
          <Button onClick={() => CardButton(posts.id)}>DELETAR POST</Button>

          <Button>EDITAR POST</Button>
        </div>
      </Container>
    </div>
  )
}
