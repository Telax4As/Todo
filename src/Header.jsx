import { useState } from 'react'
import './Header.css'


function Header() {

    const name = 'Dimash'
    const age = 17
    const avatar = 'src/avatar.png'

    const renderName = (name) => {
        return <div className="name"><h1>My name is {name}</h1></div>
    }

    const renderAge = (age) => {
        return <div className="age"><h1>My age is {age}</h1></div>
    }

    const renderAvatar = (avatar) => {
        return (
        <a href="https://github.com/Telax4As" className="avatar">
            <img src={avatar} alt="Avatar" />
        </a>
        )
    }

    return (

        <div className="personal-inf">
            <div className="a">
                {renderName(name)}
                {renderAge(age)}
            </div>
            {renderAvatar(avatar)}
        </div>

    )

}

export default Header;