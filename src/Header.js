import React , { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    makeStyles
  } from "@material-ui/core";
  import { Link as RouterLink } from "react-router-dom";
  import logo from './img/logo.svg'

const Header = () => {
    const menuList = [
        {
          label: "최신",
          href: "/",
        },
        {
          label: "인기",
          href: "/popular",
        },
        {
          label: "검색",
          href: "/search",
        },
        {
            label: "의견/제보",
            href: "/report",
        }
      ];

      const useStyles = makeStyles((theme) =>({
        appBar: {
          position: 'fixed',
          zIndex: theme.zIndex.drawer + 1,
          background:'white',
          height: '75px'
        },
        logo:{
          height:'50px',
          marginLeft:'40px',
        },
        logo_div:{
          flexGrow: 1
        },
        button_div:{
          marginRight:'40px'
        }
      })
    )
    const classes = useStyles();
    

    const mainLogo = (
      /*
        <Typography variant="h6" component="h1">
            세모인
        </Typography>
        */
       <div className={classes.logo_div}>
         <img src={logo} className = {classes.logo}/>
       </div>
      );

    const getMenuButtons = () => {
      return menuList.map(({ label, href }) => {
          return (
          <Button
              {...{
              key: label,
              color: "solid black",
              to: href,
              component: RouterLink
              }}
          >
              {label}
          </Button>
          );
      });
    };

    return(
        <>
            <AppBar  position="fixed" className = {classes.appBar}>
                <Toolbar>
                    {mainLogo}
                    <div className={classes.button_div}>{getMenuButtons()}</div>
                </Toolbar>
            </AppBar>
      </>
    )
};

export default Header;