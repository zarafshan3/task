import './Nav.css'

const Nav = ({toggleNav}) => {
    return(
        <div className='nav'>
            <div className="logo"><i class="fa-solid fa-bars" onClick={toggleNav}></i></div>
            <div className="icons">
            <li><i class="fa-solid fa-house"></i></li>
            <li><i class="fa-solid fa-phone"></i></li>
            <li><i class="fa-solid fa-user"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-discord"></i></li>

            </div>
        </div>
    )
}

export default Nav;