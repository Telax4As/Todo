import { use, useState } from 'react'
import './Header.css'


function Header() {

    const [name, setName] = useState('Dimash')
    const [age, setAge] = useState(17)
    const [avatar, setAvatar] = useState('src/avatar.png')

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