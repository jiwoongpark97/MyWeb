
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
                <a href='/'>
                <img style={{width: 200, heigh: 200}} src={require('../../images/logo.png')}/>
                </a>
                <text>Menu</text>
                {/* <b>
                ({mousePos.x}, {mousePos.y})
                </b> */}
        </div>
    )
}

export default Header