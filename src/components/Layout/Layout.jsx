import './Layout.css'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <div className="container">
                <div className="main">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default Layout;