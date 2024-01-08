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

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: gray;
  flex-direction: column;
  font-size: 24px;
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
    // return <SimpleCard />
    // return alert("Olá")
  }

  //   const navigate = useRouter();

  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
  }

  async function getOnePost() {
    try {
      const id = sessionStorage.getItem('POST-ID')
      const { data } = await api.get(`/get-one-post/${id}`)

      console.log(data)

      setPosts(data)
    } catch (error) {
      return alert(error)
    }
  }

  async function handleLikes(id) {
    try {
      await api.put(`/update-likes/${id}`)

      //  return navigate.push("/Profile");
      location.reload()

      // navigate.push('/Profile')
    } catch (error) {
      return alert(error)
    }
  }

  function SimpleCard(id) {
    const classes = useStyles()
    const bull = <span className={classes.bullet}>•</span>

    const Id = sessionStorage.getItem('POST-ID')
    // console.log(`ID: ${id}`)

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
              // marginTop: '600px'
            }}
          >
            <SimpleCard />
          </div>
        ) : // console.log('Fechado')
        null}

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <p>{posts.title}</p>
          <img src={posts.image} width="310" height="200" alt="imagem" />
          <p
            style={{
              width: '510px',
              textIndent: '30px',
              marginTop: '27px',
              lineHeight: '25px',
              fontSize: '16px',
            }}
          >
            {posts.texto}
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '35rem',
            }}
          >
            <div
              style={{
                width: '310px',
                height: '100px',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {/* <button style={{marginRight: '10px'}} onClick={() => handleLikes(posts.id)}> */}
              <AiTwotoneLike
                style={{ marginLeft: '50px', color: 'blue' }}
                onClick={() => handleLikes(posts.id)}
                fontSize="26px"
              />
              {/* </button> */}
              <div style={{ display: 'flex', marginLeft: '5px', marginTop: '4px' }}>
                {posts.likes}
              </div>
            </div>

            <p style={{ fontSize: '16px', width: '15rem' }}>Views: {posts.views}</p>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '35rem',
            }}
          >
            <p
              style={{
                width: '510px',
                textIndent: '50px',
                marginTop: '27px',
                lineHeight: '25px',
                fontSize: '16px',
              }}
            >
              Autor: {posts.autor}
            </p>

            <p style={{ fontSize: '16px', width: '15rem' }}>
              Data: {getDateWithoutTime(posts.createdAt)}
            </p>
          </div>
        </div>
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
