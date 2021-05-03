import React from 'react';
import {makeStyles, Typography} from '@material-ui/core'

const Menubar = () => {

    const useStyles = makeStyles((theme) =>({
        menubar: {
            marginTop:'500px',
            width: '100%',
            textAlign: 'center',
        },
      })
    );
    const { menubar } = useStyles();

    return(
        <Typography className = {menubar}>
            Left_MENU
        </Typography>
    )
};

export default Menubar;