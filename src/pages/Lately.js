import React from 'react';
import {makeStyles,
        Typography,
        Toolbar
    } from '@material-ui/core'
import Menubar from './Menubar'

const Lately = () => {
    const drawerWidth = 240;
    const useStyles = makeStyles((theme) =>({
        lately: {
            marginTop:'100px',
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
      })
    );
    const classes = useStyles();

    return(

        <div className = {classes.container}>
        <Menubar/>
      <main>
       <Toolbar/>
        <Typography className = {classes.lately}>
                Lately - Home
        </Typography>
      </main>
      </div>
    )
};

export default Lately;