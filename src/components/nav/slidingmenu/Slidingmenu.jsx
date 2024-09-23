import './Slidingmenu.css'
import { Link } from 'react-router-dom';



const SlidingMenu = ({ isNavOpen }) => {
    return (
        <div className={`slide ${isNavOpen ? 'open' : ''}`}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/">User</Link></li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Discord</li>

            </ul>
        </div>

    );
};

export default SlidingMenu;