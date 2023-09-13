import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <img src="../media/logo-inksumos.png" alt="logo Inksumos" width={240} height={100}/>
            <div>
                <button>Productos</button>
                <button>¿Quiénes somos?</button>
                <button>Contacto</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;