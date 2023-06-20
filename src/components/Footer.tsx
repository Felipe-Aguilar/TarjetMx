import LogoGris from '../assets/logotarjet-gris.svg';

const Footer = () => {
    return ( 
        <footer>
            <div className='logo'>
                <img src={LogoGris} alt="TarjetMx Logo" />
            </div>

            <div className='redes'>
                <a href="" target='_blank'>
                    <i className="bi bi-facebook"></i>
                </a>
                <a href="" target='_blank'>
                    <i className="bi bi-instagram"></i>
                </a>
            </div>

            <div className='nav'>
                <a href="">Política de Envío</a>
                <a href="">Términos y Condiciones</a>
                <a href="">Política de Devoluciones</a>
                <a href="">Aviso de Privacidad</a>
                <a href="">Facturación</a>
            </div>
        </footer>
    );
}

export default Footer;