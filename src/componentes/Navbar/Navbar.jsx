import CartWidget from '../CartWidget/CartWidget'
import logoKaramello from '../img/cup-cake(1).png'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    return (

        <nav className=" menu navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className='marca'>
                <Link to='/'><img className='logo' src={logoKaramello} alt="" /></Link>
                <Link to='/' className='nombre'><h1>KARAMELLO</h1></Link>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink to='/category/frutales' className={({isActive})=>isActive?"category-active":"category"}>Frutales</NavLink>
                        <NavLink to='/category/chocolate' className={({isActive})=>isActive?"category-active":"category"}>Chocolate</NavLink>
                        <NavLink to='/category/minis' className={({isActive})=>isActive?"category-active":"category"}>Mini Postres</NavLink>
                        <NavLink to='/category/salado' className={({isActive})=>isActive?"category-active":"category"}>Salado</NavLink>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                            <button className="boton-menu btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                    <CartWidget/>
                </div>
                
            </div>
        </nav>

    )
}

export default Navbar