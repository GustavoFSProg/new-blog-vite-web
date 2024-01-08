import styled from 'styled-components'
import Drawer from '../drawer'
// import Drawer from '@mui/material/Drawer'
// import SwipeableTemporaryDrawer from '../drawer'
// import TemporaryDrawer from '../Drawer'

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: auto;
  font-size: 24px;
  background: black;
  padding-left: 30px;
  padding-top: 15px;
  padding-bottom: 25px;
  color: white;
`

export default function Navbar() {
  return (
    <Container>
      <Drawer />
      <div
        style={{
          display: 'flex',
          width: '80vw',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <span style={{ fontSize: '28px', letterSpacing: '10px' }}>BLOGGER</span>
        <span
          style={{
            fontSize: '14px',
            letterSpacing: '10px',
            fontStyle: 'italic',
          }}
        >
          Design
        </span>
        {/* <span style={{ fontSize: '20px' }}>BLOGGER</span>
        <span style={{ fontSize: '16spanx', fontStyle: 'italic' }}>Design</span> */}
      </div>
    </Container>
  )
}
