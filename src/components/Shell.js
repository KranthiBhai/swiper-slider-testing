import React, { Children } from 'react'
import { NavLink } from 'react-router-dom'

export default function Shell(props) {
    const navigationData = [
        {
            name: "Fade",
            link: "/fade",
        },
        {
            name: "Cube",
            link: "/cube",
        },
        {
            name: "CoverFlow",
            link: "/coverflow",
        },
        {
            name: "Flip",
            link: "/flip",
        },
        {
            name: "Cards",
            link: "/cards",
        },
        {
            name: "Creative",
            link: "/creative",
        },
    ]

    const navLinkStyles = ({isActive}) => {
        return{
            fontWeight: isActive ? "700" : "nomal",
            fontSize: isActive ? "30px" : "18px",
            color: "white",
            textDecoration: "none",
            marginRight: "10px"
        }
    }
  return (
    <div>
         <nav style={{background:"blue", display:"flex"}}>
            {navigationData.map((item, index) => {
                return(
                    <div key={index} >
                    <NavLink to={item.link} style={navLinkStyles}>{item.name}</NavLink>
                    </div>
                )
            })}
        </nav>

        <div>{props.children}</div>
    </div>
  )
}
