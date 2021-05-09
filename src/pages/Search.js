import React from 'react';
import {makeStyles,
    Typography,
    Toolbar,
    InputBase,
    Paper,
    IconButton 
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Search = () => {

    const useStyles = makeStyles((theme) =>({
        search: {
            width: '100%',
            textAlign: 'center',
        },
        root: {
            marginTop:'10px',
            padding: '6px 4px',
            alignItems: 'center',
            width: '100%',
            height: '120px',
            background:'#F3F4F6'
          },
        input: {
            marginLeft: theme.spacing(1),
            height:'100%',
            flex: 1,
          },
          iconButton: {
            padding: 10,
          },
          divider: {
            height: 28,
            margin: 4,
          },
      })
    );
    const classes = useStyles();

    return(
        <>
            <Toolbar/>
            <Paper elevation={0} component="form" className={classes.root}>
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="어떤걸 찾고 계세요?"
                inputProps={{}}
            />
            </Paper>
        </>
    )
};

export default Search;