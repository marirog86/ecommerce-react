import CartWidget from './CartWidget'
import logoKaramello from './img/cup-cake(1).png'
import './Navbar.css'

const Navbar = () => {
    return (

        <nav class=" menu navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div className='marca'>
                <a class="navbar-brand" href="#">KARAMELLO</a>
                <img className='logo' src={logoKaramello} alt="" />
                </div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Productos</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Dulce</a></li>
                                <li><a class="dropdown-item" href="#">Salado</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#">Combos</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                            <button class="boton-menu btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                    <CartWidget/>
                </div>
                
            </div>
        </nav>

    )
}

export default Navbar