import React from 'react';
import {makeStyles,Typography} from '@material-ui/core'

const Search = () => {

    const useStyles = makeStyles((theme) =>({
        search: {
            marginTop:'500px',
            width: '100%',
            textAlign: 'center',
        },
      })
    );
    const { search } = useStyles();

    return(
        <Typography className = {search}>
            Search
        </Typography>
    )
};

export default Search;