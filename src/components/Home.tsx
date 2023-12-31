import BannerCafe from '../assets/mi-tarjet-entregacafe.webp';
import BannerCafeMobile from '../assets/mi-tarjet-cafeteria-mobile.webp';
import Celulares from '../assets/mi-tarjet-celulares.webp';
import BannerPrincipal from './pages/BannerPrincipal';
import CardsColores from './pages/CardsColores';
import TarjetaDigital from './pages/TarjetaDigital';
import TarjetaFisica from './pages/TarjetaFisica';
import TarjeteroDigital from './pages/TarjeteroDigital';
import PreguntasFrec from './pages/PreguntasFrec';

const Home = () => {

    return ( 
        <>

            <BannerPrincipal />

            <CardsColores />

            {/* Banner Imagen */}
            <div className='d-none d-lg-block container-fluid p-0'>
                <img src={BannerCafe} alt="Banner TarjetMx" className='img-fluid' style={{display: 'block', margin: 'auto'}}/>
            </div>
            <div className='d-block d-md-none container-fluid p-0'>
                <img src={BannerCafeMobile} alt="Banner TarjetMx" className='img-fluid' />
            </div>

            <TarjetaDigital />

            {/* btnSolicita */}
            <div className='container-fluid btnSolicita'>
                <a href="https://tarjet.site/#/login">
                    Crea Gratis tu Tarjeta 
                </a>
            </div>

            <TarjetaFisica />

            {/* Banner 3 celulares */}
            <div className='container-fluid bannerCelulares'>
                <div className='cuerpo'>
                    <img src={Celulares} alt="Tarjet muestras de perfil" className='img-fluid'/>
                </div>
            </div>

            <TarjeteroDigital />

            {/* Btn Contacto */}
            <div className='container-fluid Contacto'>
                <div className='d-block d-lg-none'>
                    <h5>
                        Hagamos networking y suma más clientes.
                    </h5>
                </div>
                <div className='btnContactanos'>
                    <a href="https://wa.me/5586763895">
                        Contáctanos
                    </a>
                </div>
            </div>

            <PreguntasFrec />
        </>
    );
}

export default Home;