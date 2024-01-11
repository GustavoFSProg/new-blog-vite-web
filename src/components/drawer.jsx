import * as React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { LuMenuSquare } from 'react-icons/lu'
import { FaRegistered } from 'react-icons/fa6'
import { IoHome } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'

export default function Drawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Link
                to="/"
                style={{
                  color: 'gray',
                  textDecoration: 'none',
                  marginTop: '10px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IoHome fontSize="20px" />
                  <span
                    style={{
                      fontSize: '16px',

                      marginLeft: '9px',
                    }}
                  >
                    HOME
                  </span>
                </div>
              </Link>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Link
                to="/register"
                style={{
                  color: 'gray',
                  marginTop: '-3px',
                  textDecoration: 'none',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <FaRegistered fontSize="20px" />
                  <span style={{ fontSize: '16px', marginLeft: '7px' }}>CADASTRO</span>
                </div>
              </Link>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Link
                to="/profile"
                style={{
                  color: 'gray',
                  marginTop: '-3px',
                  textDecoration: 'none',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CgProfile fontSize="20px" />
                  <span style={{ fontSize: '16px', marginLeft: '7px' }}>PROFILE</span>
                </div>
              </Link>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Link
                to="/login"
                style={{
                  color: 'gray',
                  marginTop: '-3px',
                  textDecoration: 'none',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CgProfile fontSize="20px" />
                  <span style={{ fontSize: '16px', marginLeft: '7px' }}>LOGIN</span>
                </div>
              </Link>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  )

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button style={{ color: 'white' }} onClick={toggleDrawer(anchor, true)}>
            <LuMenuSquare style={{ color: 'white' }} fontSize="2rem" />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  )
}
