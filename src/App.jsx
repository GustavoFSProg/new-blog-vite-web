import { useEffect, useState } from 'react'
import api from './api'
import styled from 'styled-components'
// import { Drawer } from '@mui/material'
import Navbar from './components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

// const mainFontFamily = Fira_Code({
//   weight: ["400"],
//   subsets: ["latin"],
// });

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  /* background: #d9d9d9; */
  flex-direction: column;
  font-size: 24px;
  margin-bottom: 200px;
`

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  color: white;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 200px;
  width: 62rem;
  height: auto;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  padding-bottom: 9rem;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 1rem;
  border-radius: 20px;
  color: white;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    justify-content: center;
    align-items: center;
  }
`

const ContainerPosts = styled.div`
  height: auto;
  padding-bottom: 20px;
  margin-bottom: -130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`

export default function App() {
  const [posts, setPosts] = useState([])

  const navigate = useNavigate()

  async function getAllPosts() {
    try {
      const { data } = await api.get('/get-all-posts')

      console.log(data)

      setPosts(data)
    } catch (error) {
      return alert(error)
    }
  }

  async function setPostId(id) {
    try {
      sessionStorage.setItem('POST-ID', id)

      await api.put(`/update-views/${id}`)

      navigate('/profile')
    } catch (error) {
      return alert(error)
    }
  }

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <div>
      {/* className={`${mainFontFamily.className}`} */}
      <Navbar />
      <Container>
        <br />

        <Grid>
          {posts.map((items) => {
            return (
              <ContainerPosts key="" onClick={() => setPostId(items.id)}>
                {/* <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                > */}
                <p>
                  <span style={{ fontSize: '25px' }}>{items.title}</span>
                </p>
                <img src={items.image} width="300" height="200" alt="imagem" />
                <p> {items.description}</p>
                {/* </div> */}
              </ContainerPosts>
            )
          })}
        </Grid>
      </Container>
    </div>
  )
}
