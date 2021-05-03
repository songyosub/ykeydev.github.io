import React from 'react';
import {makeStyles,Typography} from '@material-ui/core'
import Menubar from './Menubar'

const Popular = () => {

    const useStyles = makeStyles((theme) =>({
        popular: {
            marginTop:'500px',
            width: '100%',
            textAlign: 'center',
        },
      })
    );
    const { popular } = useStyles();

    return(
        <Typography className = {popular}>
            Popular
        </Typography>
    )
};

export default Popular;