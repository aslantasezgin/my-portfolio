import React from "react";
import Logo from "./logo.png"
import { useEffect, useState } from 'react';

import "./Header.styles.css"


const Header = () =>{

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

           
    /* Method that will fix header after a specific scrollable */
           const isSticky = (e) => {
                const header = document.querySelector('.header');
                const scrollTop = window.scrollY;
                scrollTop >= 50 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
            };


       const Menu = [
        {
           id:0,
           text:"Home",
           link:"#Home"
        },
        {
           id:1,
           text:"About",
           link:"#About"
        },
         {
           id:2,
           text:"Skills",
           link:"#Skills"
        },
         {
           id:3,
           text:"Portfolio",
           link:"#Portfolio"

        },
         {
           id:4,
           text:"Contact",
           link:"#Contact"

        }
       ]     

    return(
    <>
    <header className="header">
        <div className="container-flex">
    <div className="logo-box"> <img src={Logo}></img> </div>
    <div className="nav-list">
        <ul>
            {Menu.map((items) => {
                return ( <li key={items.id}> <a href={items.link}>{items.text} </a> </li>)
            })}
         

        </ul>
    </div>
    </div>
    </header>
    
    
    </>
)

}


export default Header