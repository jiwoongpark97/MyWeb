import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div style={{
                height: "15vh",
                justifyContent: 'space-around',
                width: "100vw",
                alignItems: 'center',
                flexDirection: 'row',
                display: 'flex',
            }}>
                <NavLink to="/">
                    <a href='/'>
                        <img style={{width: 200, heigh: 200}} src={require('../../images/logo.png')}/>
                    </a>
                </NavLink>
                <text>Menu</text>
        </div>
    )
}

export default Header