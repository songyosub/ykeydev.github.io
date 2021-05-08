import React from 'react';
import {makeStyles,
        Drawer ,
        Typography,
        List,
        Divider,
        ListItem,
        ListItemIcon,
        ListItemText,
        Toolbar
    } from '@material-ui/core'
import Menubar from './Menubar'

const Lately = () => {
    const drawerWidth = 240;
    const useStyles = makeStyles((theme) =>({
        lately: {
            marginTop:'500px',
            width: '100%',
            textAlign: 'center',
        },
        container:{
            display:'flex'
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
          },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerContainer: {
            overflow: 'auto',   
        },
        appBar: {
          height: '75px'
        },
      })
    );
    const classes = useStyles();

    return(
        <div className = {classes.container}>
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
            paper: classes.drawerPaper,
            }}
        >
        <Toolbar className={classes.appBar}/>
        <div className={classes.drawerContainer}>
             <Typography>
              앱
            </Typography>
          <List>
            {['Lifecyle', 'Entertainment', 'Finance'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
          <Typography>
              화면
            </Typography>
            {['Splash', 'Micro Interaction', 'On boarding', 'Sign in / Log in'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main>
       <Toolbar className={classes.appBar}/>
        <Typography paragraph>
                Lately - Home
        </Typography>
      </main>
      </div>
    )
};

export default Lately;