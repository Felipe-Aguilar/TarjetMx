import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import VideoBanner from '../assets/vdcabezaltarjet1080p.mp4';
import VideoBannerMobile from '../assets/vdcabezaltarjetmovil1080p.mp4';
import QrIcono from '../assets/icono-tarjet-qr.svg';
import InteractivaIcono from '../assets/icono-tarjet-interaccion.svg';
import ActualizadaIcono from '../assets/icono-tarjet-perfilproducto.svg';
import ProfesionalismoIcono from '../assets/icono-tarjet-profesionalismo.svg';
import CompatibleIcono from '../assets/icono-tarjet-compatibilidad.svg';
import MemorableIcono from '../assets/icono-tarjet-memorable.svg';
import CompartirIcono from '../assets/icono-tarjet-compartiragil.svg';
import GuardarIcono from '../assets/icono-tarjet-guardarusuario.svg';
import EcoIcono from '../assets/icono-tarjet-ecologico.svg';
import IlimiIcono from '../assets/icono-tarjet-ilimitado.svg';
import NetworkIcono from '../assets/icono-tarjet-networking.svg';
import EscapaIcono from '../assets/icono-tarjet-tienda.svg';
import OrdenadoIcono from '../assets/icono-tarjet-ordencontacto.svg';
import BuscadorIcono from '../assets/icono-tarjet-buscador.svg';
import BannerCafe from '../assets/mi-tarjet-entregacafe.webp';
import BannerCafeMobile from '../assets/mi-tarjet-cafeteria-mobile.webp';
import Celulares from '../assets/mi-tarjet-celulares.webp';
import VideoCel1 from '../assets/tarjet-tarjetadigital-muestra.mp4';
import IconComClic from '../assets/icono-tarjet-contactoclic.svg'
import IconAtractive from '../assets/icono-tarjet-atractivo.svg'
import IconMultimedia from '../assets/icono-tarjet-multimedia.svg'
import IconIncentiva from '../assets/icono-tarjet-incentiva.svg'
import IconPersonalizado from '../assets/icono-tarjet-personalizado.svg'
import VideoTarjetaFisica from '../assets/tarjet-tarjetafisica.mp4';
import IconAcerca from '../assets/icono-tarjet-acercartarjeta.svg';
import IconClicNoti from '../assets/icono-tarjet-daclic.svg';
import IconSalva from '../assets/icono-tarjet-salvarcontacto.svg';
import IconAhorra from '../assets/icono-tarjet-ahorrodinero.svg';
import IconContactLess from '../assets/icono-tarjet-contactless.svg';
import IconEcologicoAzul from '../assets/icono-tarjet-ecologicoazul.svg';
import IconPersoAzul from '../assets/icono-tarjet-tarjetapersonalizableazul.svg';
import GraficoA from '../assets/grafico-continua-azul-a.svg';
import GraficoB from '../assets/grafico-continua-azul-b.svg';
import GraficoC from '../assets/grafico-continua-azul-c.svg';
import IconPaso1 from '../assets/icono-tarjet-paso1.svg';
// import IconPaso2 from '../assets/icono-tarjet-paso2.svg';
// import IconPaso3 from '../assets/icono-tarjet-paso3.svg';
// import IconPaso4 from '../assets/icono-tarjet-paso4.svg';
import IconTDCont from '../assets/icono-tarjet-contactotarjetTD.svg';
import IconTDBolsa from '../assets/icono-tarjet-productoTD.svg';
import IconTDImagen from '../assets/icono-tarjet-agregarimagenTD.svg';
import IconTDBusca from '../assets/icono-tarjet-buscadortarjetTD.svg';
import muestraTarjetero from '../assets/im-tarjet-muestratarjetero-c.webp';
import Promo from '../assets/Promo.webp';

const Home = () => {

    // Animación Cards Framer Motion
    const cardsAnimation = {
        initial: {opacity: 0, y:50},
        whileInView:{opacity:1, y:0},
        transition:{duration: 0.6},
        viewport: {once:true}
    }

    // Settings Sliders Cards
    const settingsCards = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplaySpeed: 6000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    const settingsCardsTablet = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplaySpeed: 6000,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 2
    }

    // Animación Icons Tarjeta Digital
    const iconsTDigi = {
        initial: {opacity: 0, x:-50},
        whileInView:{x:0, opacity: 1},
        viewport: {once:true}
    }

    // Settings Slide Tarjeta Digital Mobile
    const settingsTDMobile = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplaySpeed: 6000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            }
        },
        {
            breakpoint: 575,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    }
    
    // Animación Icons Tarjeta Física
    const iconsTFis = {
        initial: {rotate: -180, scale: 0, opacity:0},
        whileInView:{rotate: 0, scale:1, opacity:1},
        viewport: {once:true}
    }

    // Graficos Tarjeta Física
    const graficos = {
        a: GraficoA,
        b: GraficoB,
        c: GraficoC
    }

    // Animación Icons Tarjetero Digital
    const iconsTDig = {
        initial: {scale: 1},
        whileInView: {scale: [1,1.2,1]},
        transition: {duration: 1},
        viewport: {once:true}
    }

    // Settings Slide Tarjeta Digital Mobile
    const settingsTFMobile = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplaySpeed: 6000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            }
        },
        {
            breakpoint: 575,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    }

    return ( 
        <>

            {/* Banner (video) */}
            <div className="container-fluid bannerVideo">
                <div className='video'>
                    <video autoPlay muted loop>
                        <source src={VideoBanner}/>
                    </video>

                    <div className='contenido'>
                        <h1>Tu tarjetero virtual en tu celular, conecta a personas con tus servicios y hagamos networking entre negocios.</h1>

                        <div className='green'>
                            <h5>Por qué es un tarjetero.</h5>
                            <p>
                                Digitalizamos el concepto de ordenar, en una sola herramienta, todas las tarjetas de tus principales proveedores, y puedas consultar sus datos, de forma fácil y accesible en tu celular. Convertirse en digital significa mejorar la forma en que administras tus contactos de negocios. 
                            </p>
                            <h6 className='mb-0'>
                                <span>Te invitamos a conocer:</span> <br/>
                                la tarjeta digital, <br/>
                                la tarjeta física con NFC <br/>
                                y el tarjetero digital Tarjet.<br/>
                            </h6>
                        </div>
                    </div>
                </div>

                <div className='videoMobile d-flex d-lg-none'>
                    <video autoPlay muted loop>
                        <source src={VideoBannerMobile}/>
                    </video>

                    <div className='contenido'>
                        <h5>
                            Tu tarjetero virtual en tu celular, conecta a personas con tus servicios y hagamos networking entre negocios.
                        </h5>
                    </div>
                </div>
            </div>
            <div className='container-fluid bannerMobile d-block d-lg-none'>
                <div>
                    <h4>Por qué es un tarjetero.</h4>
                    <p>
                        Digitalizamos el concepto de ordenar, en una sola herramienta, todas las tarjetas de tus principales proveedores, y puedas consultar sus datos, de forma fácil y accesible en tu celular. Convertirse en digital signi ica mejorar la forma en que administras tus contactos de negocios. 
                    </p>
                    <h5 className='mt-5'>
                        <span>Te invitamos a conocer:</span> <br/>
                        la tarjeta digital, <br/>
                        la tarjeta física con NFC <br/>
                        y el tarjetero digital Tarjet. <br/>
                    </h5>
                </div>
            </div>

            {/* Cards de colores */}
            <div className='container-fluid cards'>
                <div className='d-none d-lg-flex justify-content-between'>

                    <motion.div 
                        className='card'
                        {...cardsAnimation}
                        transition={{delay: 0.5}}
                    >
                        <div className='title'>
                            <h4>Tarjeta digital Tarjet</h4>
                        </div>
                        <div className='body'>
                            <div className='w-25'>
                                <img src={QrIcono} alt="Icono Qr" />
                            </div>
                            <div className='w-75'>
                                <p><span>Código Qr</span></p>
                                <p>
                                    Te creamos tu código para compartir tu tarjeta física y digital fácilmente
                                </p>
                            </div>
                        </div>
                        <div className='body'>
                            <div className='w-25'>
                                <img src={InteractivaIcono} alt="Icono Qr" />
                            </div>
                            <div className='w-75'>
                                <p><span>Interactiva</span></p>
                                <p>
                                    La gente puede contactarte, ver y saber más de tu negocio.
                                </p>
                            </div>
                        </div>
                        <div className='body'>
                            <div className='w-25'>
                                <img src={ActualizadaIcono} alt="Icono Qr" />
                            </div>
                            <div className='w-75'>
                                <p><span>Siempre actualizada</span></p>
                                <p>
                                    Puedes actualizar el perfil de tus servicios ó productos.
                                </p>
                            </div>
                        </div>
                        <div className='body'>
                            <div className='w-25'>
                                <img src={ProfesionalismoIcono} alt="Icono Qr" />
                            </div>
                            <div className='w-75'>
                                <p><span>Profesionalismo</span></p>
                                <p>
                                    Comunicas de forma atractiva tu imagen corporativa.
                                </p>
                            </div>
                        </div>
                        <div className='body mb-0'>
                            <div className='w-25'>
                                <img src={CompatibleIcono} alt="Icono Qr" />
                            </div>
                            <div className='w-75'>
                                <p><span>100% Compatible</span></p>
                                <p>
                                    Se puede visualizar en cualquier dispositivo móvil, sin apps.   
                                </p>
                            </div>
                        </div>

                        <div className='buttons'>
                            <a href="" className='btnAzul'>
                                Conoce más
                            </a>
                            <a href="" className='btnVerde'>
                                Solicítala gratuitamente
                            </a>
                        </div>

                    </motion.div>

                    <motion.div 
                        className='card cardAmarilla'
                        {...cardsAnimation}
                        transition={{delay: 0.9}}
                    >
                        <div className='title'>
                            <h4>Tarjeta física Tarjet con NFC</h4>
                        </div>
                        <div className='body'>
                            <div className='w-25'>
                                <img src={MemorableIcono} alt="Icono Qr" />
                            </div>
                            <div className='w-75'>
                                <p><span>Memorable</span></p>
                                <p>
                                    Genera impacto a tus clientes al presentar tu información.
                                </p>
                            </div>
                        </div>
                        <div className='body'>
                            <div className='w-25'>
                                <img src={CompartirIcono} alt="Icono Qr" />
                            </div>
                            <div className='w-75'>
                                <p><span>Fácil de compartir</span></p>
                                <p>
                                    Difunde tu información de manera ágil.
                                </p>
                            </div>
                        </div>
                        <div className='body'>
                            <div className='w-25'>
                                <img src={GuardarIcono} alt="Icono Qr" />
                            </div>
                            <div className='w-75'>
                                <p><span>Guardar contacto</span></p>
                                <p>
                                    Con un solo toque se guarda en la agenda de contactos.
                                </p>
                            </div>
                        </div>
                        <div className='body'>
                            <div className='w-25'>
                                <img src={EcoIcono} alt="Icono Qr" />
                            </div>
                            <div className='w-75'>
                                <p><span>Ecológica</span></p>
                                <p>
                                    Reduces el consumo de papel.
                                </p>
                            </div>
                        </div>
                        <div className='body mb-0'>
                            <div className='w-25'>
                                <img src={IlimiIcono} alt="Icono Qr" />
                            </div>
                            <div className='w-75'>
                                <p><span>Ilimitada</span></p>
                                <p>
                                    Nunca más te quedarás sin tarjetas.
                                </p>
                            </div>
                        </div>

                        <div className='buttons'>
                            <a href="" className='btnAzul'>
                                Conoce más
                            </a>
                            <a href="" className='btnVerde'>
                                Compra tu tarjeta física
                            </a>
                        </div>

                    </motion.div>

                    <motion.div 
                        className='card cardVioleta'
                        {...cardsAnimation}
                        transition={{delay: 1.3}}
                    >
                        <div className='title'>
                            <h4>Tarjetero digital Tarjet</h4>
                        </div>
                        <div className='body'>
                            <div className='w-25'>
                                <img src={NetworkIcono} alt="Icono Qr" />
                            </div>
                            <div className='w-75'>
                                <p><span>Networking</span></p>
                                <p>
                                    Establece relaciones comerciales con otros usuarios tarjet.
                                </p>
                            </div>
                        </div>
                        <div className='body'>
                            <div className='w-25'>
                                <img src={EscapaIcono} alt="Icono Qr" />
                            </div>
                            <div className='w-75'>
                                <p><span>Escaparate 24/7</span></p>
                                <p>
                                    Tus servicios en línea los 365 días del año.
                                </p>
                            </div>
                        </div>
                        <div className='body'>
                            <div className='w-25'>
                                <img src={OrdenadoIcono} alt="Icono Qr" />
                            </div>
                            <div className='w-75'>
                                <p><span>Ordenado</span></p>
                                <p>
                                    Consulta tus contactos tarjet.
                                </p>
                            </div>
                        </div>
                        <div className='body'>
                            <div className='w-25'>
                                <img src={BuscadorIcono} alt="Icono Qr" />
                            </div>
                            <div className='w-75'>
                                <p><span>Buscador</span></p>
                                <p>
                                    Llega a más clientes que buscan lo que haces.
                                </p>
                            </div>
                        </div>

                        <div className='buttons buttonsB'>
                            <a href="" className='btnAzul'>
                                Conoce más
                            </a>
                            <a href="" className='btnVerde'>
                                Registra tu empresa gratuitamente
                            </a>
                            <a href="" className='btnVioleta'>
                                <span>Crea tu cuenta gratuitamente</span> <br/>
                                (podrás consultar el directorio, no es necesario crear una tarjeta digital tarjet)
                            </a>
                            <a href="" className='btnNaranja'>
                                Consulta el directorio Tarjet
                            </a>
                        </div>

                    </motion.div>
                </div>

                {/* Mobile */}
                <div className='d-block d-lg-none cardsMobile'>
                    <div>
                        <Slider {...settingsCards}>
                            <div className='card'>
                                <div className='title'>
                                    <h4>Tarjeta digital Tarjet</h4>
                                </div>
                                <div className='body'>
                                    <div className='w-25'>
                                        <img src={QrIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Código Qr</span></p>
                                        <p>
                                            Te creamos tu código para compartir tu tarjeta física y digital fácilmente
                                        </p>
                                    </div>
                                </div>
                                <div className='body'>
                                    <div className='w-25'>
                                        <img src={InteractivaIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Interactiva</span></p>
                                        <p>
                                            La gente puede contactarte, ver y saber más de tu negocio.
                                        </p>
                                    </div>
                                </div>
                                <div className='body'>
                                    <div className='w-25'>
                                        <img src={ActualizadaIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Siempre actualizada</span></p>
                                        <p>
                                            Puedes actualizar el perfil de tus servicios ó productos.
                                        </p>
                                    </div>
                                </div>
                                <div className='body'>
                                    <div className='w-25'>
                                        <img src={ProfesionalismoIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Profesionalismo</span></p>
                                        <p>
                                            Comunicas de forma atractiva tu imagen corporativa.
                                        </p>
                                    </div>
                                </div>
                                <div className='body mb-0'>
                                    <div className='w-25'>
                                        <img src={CompatibleIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>100% Compatible</span></p>
                                        <p>
                                            Se puede visualizar en cualquier dispositivo móvil, sin apps.   
                                        </p>
                                    </div>
                                </div>

                                <div className='buttons'>
                                    <a href="" className='btnAzul'>
                                        Conoce más
                                    </a>
                                    <a href="" className='btnVerde'>
                                        Solicítala gratuitamente
                                    </a>
                                </div>
                            </div>

                            <div className='card cardAmarilla'>
                                <div className='title'>
                                    <h4>Tarjeta física Tarjet con NFC</h4>
                                </div>
                                <div className='body'>
                                    <div className='w-25'>
                                        <img src={MemorableIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Memorable</span></p>
                                        <p>
                                            Genera impacto a tus clientes al presentar tu información.
                                        </p>
                                    </div>
                                </div>
                                <div className='body'>
                                    <div className='w-25'>
                                        <img src={CompartirIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Fácil de compartir</span></p>
                                        <p>
                                            Difunde tu información de manera ágil.
                                        </p>
                                    </div>
                                </div>
                                <div className='body'>
                                    <div className='w-25'>
                                        <img src={GuardarIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Guardar contacto</span></p>
                                        <p>
                                            Con un solo toque se guarda en la agenda de contactos.
                                        </p>
                                    </div>
                                </div>
                                <div className='body'>
                                    <div className='w-25'>
                                        <img src={EcoIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Ecológica</span></p>
                                        <p>
                                            Reduces el consumo de papel.
                                        </p>
                                    </div>
                                </div>
                                <div className='body mb-0'>
                                    <div className='w-25'>
                                        <img src={IlimiIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Ilimitada</span></p>
                                        <p>
                                            Nunca más te quedarás sin tarjetas.
                                        </p>
                                    </div>
                                </div>

                                <div className='buttons'>
                                    <a href="" className='btnAzul'>
                                        Conoce más
                                    </a>
                                    <a href="" className='btnVerde'>
                                        Compra tu tarjeta física
                                    </a>
                                </div>

                            </div>

                            <div className='card cardVioleta'>
                                <div className='title'>
                                    <h4>Tarjetero digital Tarjet</h4>
                                </div>
                                <div className='body'>
                                    <div className='w-25'>
                                        <img src={NetworkIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Networking</span></p>
                                        <p>
                                            Establece relaciones comerciales con otros usuarios tarjet.
                                        </p>
                                    </div>
                                </div>
                                <div className='body'>
                                    <div className='w-25'>
                                        <img src={EscapaIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Escaparate 24/7</span></p>
                                        <p>
                                            Tus servicios en línea los 365 días del año.
                                        </p>
                                    </div>
                                </div>
                                <div className='body'>
                                    <div className='w-25'>
                                        <img src={OrdenadoIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Ordenado</span></p>
                                        <p>
                                            Consulta tus contactos tarjet.
                                        </p>
                                    </div>
                                </div>
                                <div className='body'>
                                    <div className='w-25'>
                                        <img src={BuscadorIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Buscador</span></p>
                                        <p>
                                            Llega a más clientes que buscan lo que haces.
                                        </p>
                                    </div>
                                </div>

                                <div className='buttons buttonsB'>
                                    <a href="" className='btnAzul'>
                                        Conoce más
                                    </a>
                                    <a href="" className='btnVerde'>
                                        Registra tu empresa gratuitamente
                                    </a>
                                    <a href="" className='btnVioleta'>
                                        <span>Crea tu cuenta gratuitamente</span> <br/>
                                        (podrás consultar el directorio, no es necesario crear una tarjeta digital tarjet)
                                    </a>
                                    <a href="" className='btnNaranja'>
                                        Consulta el directorio Tarjet
                                    </a>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

                {/* Tablet */}
                <div className='d-block d-lg-none cardsTablet'>
                    <div>
                        <Slider {...settingsCardsTablet}>
                            <div className='card'>
                                <div className='title'>
                                    <h4>Tarjeta digital Tarjet</h4>
                                </div>
                                <div className='body'>
                                    <div className='w-25'>
                                        <img src={QrIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Código Qr</span></p>
                                        <p>
                                            Te creamos tu código para compartir tu tarjeta física y digital fácilmente
                                        </p>
                                    </div>
                                </div>
                                <div className='body'>
                                    <div className='w-25'>
                                        <img src={InteractivaIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Interactiva</span></p>
                                        <p>
                                            La gente puede contactarte, ver y saber más de tu negocio.
                                        </p>
                                    </div>
                                </div>
                                <div className='body'>
                                    <div className='w-25'>
                                        <img src={ActualizadaIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Siempre actualizada</span></p>
                                        <p>
                                            Puedes actualizar el perfil de tus servicios ó productos.
                                        </p>
                                    </div>
                                </div>
                                <div className='body'>
                                    <div className='w-25'>
                                        <img src={ProfesionalismoIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Profesionalismo</span></p>
                                        <p>
                                            Comunicas de forma atractiva tu imagen corporativa.
                                        </p>
                                    </div>
                                </div>
                                <div className='body mb-0'>
                                    <div className='w-25'>
                                        <img src={CompatibleIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>100% Compatible</span></p>
                                        <p>
                                            Se puede visualizar en cualquier dispositivo móvil, sin apps.   
                                        </p>
                                    </div>
                                </div>

                                <div className='buttons'>
                                    <a href="" className='btnAzul'>
                                        Conoce más
                                    </a>
                                    <a href="" className='btnVerde'>
                                        Solicítala gratuitamente
                                    </a>
                                </div>
                            </div>

                            <div className='card cardAmarilla'>
                                <div className='title'>
                                    <h4>Tarjeta física Tarjet con NFC</h4>
                                </div>
                                <div className='body'>
                                    <div className='w-25'>
                                        <img src={MemorableIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Memorable</span></p>
                                        <p>
                                            Genera impacto a tus clientes al presentar tu información.
                                        </p>
                                    </div>
                                </div>
                                <div className='body'>
                                    <div className='w-25'>
                                        <img src={CompartirIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Fácil de compartir</span></p>
                                        <p>
                                            Difunde tu información de manera ágil.
                                        </p>
                                    </div>
                                </div>
                                <div className='body'>
                                    <div className='w-25'>
                                        <img src={GuardarIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Guardar contacto</span></p>
                                        <p>
                                            Con un solo toque se guarda en la agenda de contactos.
                                        </p>
                                    </div>
                                </div>
                                <div className='body'>
                                    <div className='w-25'>
                                        <img src={EcoIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Ecológica</span></p>
                                        <p>
                                            Reduces el consumo de papel.
                                        </p>
                                    </div>
                                </div>
                                <div className='body mb-0'>
                                    <div className='w-25'>
                                        <img src={IlimiIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Ilimitada</span></p>
                                        <p>
                                            Nunca más te quedarás sin tarjetas.
                                        </p>
                                    </div>
                                </div>

                                <div className='buttons'>
                                    <a href="" className='btnAzul'>
                                        Conoce más
                                    </a>
                                    <a href="" className='btnVerde'>
                                        Compra tu tarjeta física
                                    </a>
                                </div>

                            </div>

                            <div className='card cardVioleta'>
                                <div className='title'>
                                    <h4>Tarjetero digital Tarjet</h4>
                                </div>
                                <div className='body'>
                                    <div className='w-25'>
                                        <img src={NetworkIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Networking</span></p>
                                        <p>
                                            Establece relaciones comerciales con otros usuarios tarjet.
                                        </p>
                                    </div>
                                </div>
                                <div className='body'>
                                    <div className='w-25'>
                                        <img src={EscapaIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Escaparate 24/7</span></p>
                                        <p>
                                            Tus servicios en línea los 365 días del año.
                                        </p>
                                    </div>
                                </div>
                                <div className='body'>
                                    <div className='w-25'>
                                        <img src={OrdenadoIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Ordenado</span></p>
                                        <p>
                                            Consulta tus contactos tarjet.
                                        </p>
                                    </div>
                                </div>
                                <div className='body'>
                                    <div className='w-25'>
                                        <img src={BuscadorIcono} alt="Icono Qr" />
                                    </div>
                                    <div className='w-75'>
                                        <p><span>Buscador</span></p>
                                        <p>
                                            Llega a más clientes que buscan lo que haces.
                                        </p>
                                    </div>
                                </div>

                                <div className='buttons buttonsB'>
                                    <a href="" className='btnAzul'>
                                        Conoce más
                                    </a>
                                    <a href="" className='btnVerde'>
                                        Registra tu empresa gratuitamente
                                    </a>
                                    <a href="" className='btnVioleta'>
                                        <span>Crea tu cuenta gratuitamente</span> <br/>
                                        (podrás consultar el directorio, no es necesario crear una tarjeta digital tarjet)
                                    </a>
                                    <a href="" className='btnNaranja'>
                                        Consulta el directorio Tarjet
                                    </a>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

            </div>

            {/* Banner Imagen */}
            <div className='d-none d-lg-block container-fluid p-0'>
                <img src={BannerCafe} alt="Banner TarjetMx" className='img-fluid'/>
            </div>
            <div className='d-block d-md-none container-fluid p-0'>
                <img src={BannerCafeMobile} alt="Banner TarjetMx" className='img-fluid'/>
            </div>

            {/* Tarjeta Digital */}
            <div className='container-fluid TarjetaDigital tarjeta'>
                <div className='cuerpo d-none d-lg-block'>
                    <div className='block1'>
                        <div className='w-50'>
                            <h2>
                                La tarjeta digital Tarjet, <br/>
                                <span>la más versátil y con diseños personalizados.</span>
                            </h2>
                            <div className='text'>
                                <p>
                                    Esta tarjeta digital es una página electrónica simplificada con toda tu información de contacto, siempre accesible, actualizada e ideal para promover tus servicios sin necesidad de invertir en un sitio web.
                                </p>
                                <p>
                                    La puedes compartir de forma ilimitada con tus contactos ya sea con el código QR que te proporcionamos, enlace directo o directamente por medio de SMS, WhatsApp ó Redes sociales.
                                </p>
                            </div>
                            <p>
                                Ventajas de tu nueva tarjeta digital:
                            </p>
                        </div>
                        <div className='w-50'>
                            <video autoPlay muted loop>
                                <source src={VideoCel1}/>
                            </video>
                        </div>
                    </div>

                    <div className='block2'>
                        <div className='iconBlock'>
                            <motion.img 
                                src={IconComClic} 
                                alt="icon tarjet clic"
                                {...iconsTDigi}
                                transition={{delay: 0.5}}
                            />
                            <p className='title'>
                                Comparte con un clic
                            </p>
                            <p className='description'>
                                Muestra de manera sencilla tus datos de contacto con un solo clic: incluye llamadas, WhatsApp, email, dirección, redes sociales.
                            </p>
                        </div>

                        <div className='iconBlock'>
                            <motion.img 
                                src={IconAtractive} 
                                alt="icon tarjet clic"
                                {...iconsTDigi}
                                transition={{delay: 1}}
                            />
                            <p className='title'>
                                Atractivo
                            </p>
                            <p className='description'>
                                Presenta tus servicios de manera atractiva con una galería informativa de tus productos ó negocio.
                            </p>
                        </div>

                        <div className='iconBlock'>
                            <motion.img 
                                src={IconMultimedia} 
                                alt="icon tarjet clic"
                                {...iconsTDigi}
                                transition={{delay: 1.5}}
                            />
                            <p className='title'>
                                Multimedia
                            </p>
                            <p className='description'>
                                Incrusta enlaces de videos de YouTube para una experiencia visual completa. (1 video)
                            </p>
                        </div>

                        <div className='iconBlock'>
                            <motion.img 
                                src={IconIncentiva} 
                                alt="icon tarjet clic"
                                {...iconsTDigi}
                                transition={{delay: 2}}
                            />
                            <p className='title'>
                                Incentiva a la compra
                            </p>
                            <p className='description'>
                                Ideal para promocionar cupones o descuentos.
                            </p>
                        </div>

                        <div className='iconBlock'>
                            <motion.img 
                                src={IconPersonalizado} 
                                alt="icon tarjet clic"
                                {...iconsTDigi}
                                transition={{delay: 2.5}}
                            />
                            <p className='title'>
                                Personalizado
                            </p>
                            <p className='description'>
                                Elige de nuestra galería el diseño que más te guste para tu Per il.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='cuerpo d-block d-lg-none'>
                    <h2>
                        La tarjeta digital Tarjet,<br/>
                        <span>la más versatil y con diseños personalizados.</span>
                    </h2>
                    <video autoPlay muted loop>
                        <source src={VideoCel1} />
                    </video>
                    <p>
                        Esta tarjeta digital es una página electrónica simplificada con toda tu información de contacto, siempre accesible, actualizada e ideal para promover tus servicios sin necesidad de invertir en un sitio web.
                    </p>
                    <p>
                        La puedes compartir de forma ilimitada con tus contactos ya sea con el código QR que te proporcionamos, enlace directo o directamente por medio de SMS, WhatsApp ó Redes sociales.
                    </p>
                    <p>
                        Ventas de tu nueva tarjeta digital:
                    </p>
                    <div className='slideMobile'>
                        <Slider {...settingsTDMobile}>
                            <div className='iconBlock'>
                                <img 
                                    src={IconComClic} 
                                    alt="icon tarjet clic"
                                />
                                <p className='title'>
                                    Comparte con un clic
                                </p>
                                <p className='description'>
                                    Muestra de manera sencilla tus datos de contacto con un solo clic: incluye llamadas, WhatsApp, email, dirección, redes sociales.
                                </p>
                            </div>

                            <div className='iconBlock'>
                                <img 
                                    src={IconAtractive} 
                                    alt="icon tarjet clic"
                                />
                                <p className='title'>
                                    Atractivo
                                </p>
                                <p className='description'>
                                    Presenta tus servicios de manera atractiva con una galería informativa de tus productos ó negocio.
                                </p>
                            </div>

                            <div className='iconBlock'>
                                <img 
                                    src={IconMultimedia} 
                                    alt="icon tarjet clic"
                                />
                                <p className='title'>
                                    Multimedia
                                </p>
                                <p className='description'>
                                    Incrusta enlaces de videos de YouTube para una experiencia visual completa. (1 video)
                                </p>
                            </div>

                            <div className='iconBlock'>
                                <img 
                                    src={IconIncentiva} 
                                    alt="icon tarjet clic"
                                />
                                <p className='title'>
                                    Incentiva a la compra
                                </p>
                                <p className='description'>
                                    Ideal para promocionar cupones o descuentos.
                                </p>
                            </div>

                            <div className='iconBlock'>
                                <img 
                                    src={IconPersonalizado} 
                                    alt="icon tarjet clic"
                                />
                                <p className='title'>
                                    Personalizado
                                </p>
                                <p className='description'>
                                    Elige de nuestra galería el diseño que más te guste para tu Per il.
                                </p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

            {/* btnSolicita */}
            <div className='container-fluid btnSolicita'>
                <a href="">
                    Solicita gratuitamente tu tarjeta digital Tarjet
                </a>
            </div>

            {/* Tarjeta física */}
            <div className='container-fluid TarjetaFisica tarjeta'>
                <div className='cuerpo'>

                    <div className='block1'>
                        <div className='w-50'>
                            <h2>
                                La tarjeta física Tarjet, con NFC <br/>
                                <span>Reemplaza la necesidad de tarjetas de papel tradicionales y reduce tu huella ambiental.</span>
                            </h2>

                            <div className='funciona'>
                                <div className='w-25'>
                                    <h6>Como funciona</h6>
                                </div>

                                <div className='icons w-75'>
                                    <div className='icon'>
                                        <div>
                                            <img src={IconAcerca} alt="tarjet icon" />
                                        </div>
                                        <div>
                                            <p>
                                                Acerca tu tarjeta tarjet al celular <br/>
                                                <span>
                                                    (Si tu movil no tiene sistema NFC, primero debes abrir la cámara)
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='icon'>
                                        <div>
                                            <img src={IconClicNoti} alt="tarjet icon" />
                                        </div>
                                        <div>
                                            <p>
                                                Haz clic sobre la notificación.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='icon'>
                                        <div>
                                            <img src={IconSalva} alt="tarjet icon" />
                                        </div>
                                        <div>
                                            <p>
                                                Y en un instante, se comparte tu información, ya lista para guardarse en los contactos del celular.<br/>
                                            </p>
                                            <p>
                                                <span>
                                                    Pueden llamarte, enviarte whatsapp, correo, consultar tu ubicación, tus redes y saber sobre tus servicios y productos.
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='diferencia'>
                                <div className='title'>
                                    <h6>
                                        Diferencia ante una tarjeta tradicional
                                    </h6>
                                </div>
                                <div className='icons'>
                                    <div className='icon'>
                                        <motion.img 
                                            src={IconAhorra} 
                                            alt="Tarjet icono" 
                                            {...iconsTFis}
                                            transition={{delay:0.5}}
                                        />
                                        <p>
                                            Ahorra Tiempo y Dinero
                                        </p>
                                        <p>
                                            <span>
                                                Intercambia y guarda información al instante, actualiza tu perfil las veces que quieras sin imprimir cientos de tarjetas.
                                            </span>
                                        </p>
                                    </div>

                                    <div className='icon'>
                                        <motion.img 
                                            src={IconContactLess} 
                                            alt="Tarjet icono" 
                                            {...iconsTFis}
                                            transition={{delay:1}}
                                        />
                                        <p>
                                            Contactless
                                        </p>
                                        <p>
                                            <span>
                                                Con solo acercar la tarjeta al celular se transfiere toda la información
                                            </span>
                                        </p>
                                    </div>

                                    <div className='icon'>
                                        <motion.img 
                                            src={IconEcologicoAzul} 
                                            alt="Tarjet icono" 
                                            {...iconsTFis}
                                            transition={{delay:1.5}}
                                        />
                                        <p>
                                            Ecológico
                                        </p>
                                        <p>
                                            <span>
                                                Ayuda al medio ambiente al reducir tu consumo de papel.
                                            </span>
                                        </p>
                                    </div>

                                    <div className='icon'>
                                        <motion.img 
                                            src={IconPersoAzul} 
                                            alt="Tarjet icono" 
                                            {...iconsTFis}
                                            transition={{delay:2}}
                                        />
                                        <p>
                                            Personalizable
                                        </p>
                                        <p>
                                            <span>
                                                Mándanos tu logo, personalizamos tu tarjeta física Tarjet con tu estilo y marca la diferencia.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-50'>
                            <video autoPlay muted loop>
                                <source src={VideoTarjetaFisica} />
                            </video>
                        </div>
                    </div>

                    <div className='block2'>
                        <div className='title'>
                            <h5>
                                Proceso de compra de la tarjeta física Tarjet con NFC
                            </h5>
                            <p>
                                Antes de comprar la tarjeta física, tienes que <a href="">crear tu perfil Tarjet aquí</a>
                            </p>
                        </div>
                        <div className='graficos'>
                            <div 
                                className='grafico'
                                style={{background: `url(${graficos.a})`}}
                            >
                                <div className='body'>
                                    <img src={IconPaso1} alt="Icon Tarjet"/>
                                    <p>
                                        Paso 1
                                    </p>
                                    <p className='description'>
                                        Selecciona la cantidad de tarjetas físicas Tarjet que necesitas.
                                    </p>
                                </div>
                            </div>

                            <div 
                                className='grafico graficoB'
                                style={{background: `url(${graficos.b})`}}
                            >
                                <div className='body bodyB'>
                                    <img src={IconPaso1} alt="Icon Tarjet"/>
                                    <p>
                                        Paso 1
                                    </p>
                                    <p className='description'>
                                        Selecciona la cantidad de tarjetas físicas Tarjet que necesitas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='buttons'>
                    <a href="" className='btnNaranja'>
                        Compra tu Tarjeta física con nfc Tarjet
                    </a>
                    <a href="" className='btnAzul'>
                        <span>También contamos con planes corporativos.</span><br/>
                        Solicita información para empresas
                    </a>

                </div>
            </div>

            {/* Banner 3 celulares */}
            <div className='container-fluid bannerCelulares'>
                <div className='cuerpo'>
                    <img src={Celulares} alt="Tarjet muestras de perfil" className='img-fluid'/>
                </div>
            </div>

            {/* Tarjetero Digital */}
            <div className='container-fluid TarjeteroDigital tarjeta'>
                <div className='cuerpo d-none d-lg-block'>
                    
                    <div className='block1'>
                        <div className='w-50'>
                            <h2>
                                Tarjetero Digital Tarjet <br/>
                                <span>
                                    Lo nuevo de la Red networking de tarjet, ¡utilízalo!
                                </span>
                            </h2>
                            <p className='mt-4'>
                                Nuestro tarjetero Tarjet es la nueva generación de directorio de tarjetas digitales que facilitan la comunicación entre empresa, la consulta de información y las recomendaciones de mano en mano. 
                            </p>
                            <div className='icons'>
                                <div className='icon'>
                                    <motion.img 
                                        src={IconTDCont} alt="Icon Tarjet" 
                                        {...iconsTDig}
                                        transition={{delay:0.5}}
                                    />
                                    <p>
                                        Facilidad para consultar tus contactos tarjet guardados.
                                    </p>
                                </div>
                                <div className='icon'>
                                    <motion.img 
                                        src={IconTDBolsa} alt="Icon Tarjet" 
                                        {...iconsTDig}
                                        transition={{delay:1}}
                                    />
                                    <p>
                                        Encuentra la Información de un servicio, producto o establecimiento de un socio tarjet.
                                    </p>
                                </div>
                            </div>
                            <div className='icons'>
                                <div className='icon'>
                                    <motion.img 
                                        src={IconTDImagen} alt="Icon Tarjet"
                                        {...iconsTDig}
                                        transition={{delay:1.5}} 
                                    />
                                    <p>
                                        Genera confianza agregando imágenes a tu galería y llega a más personas.
                                    </p>
                                </div>
                                <div className='icon'>
                                    <motion.img 
                                        src={IconTDBusca} alt="Icon Tarjet" 
                                        {...iconsTDig}
                                        transition={{delay:2}}
                                    />
                                    <p>
                                        En nuestro buscador puedes ser encontrado fácilmente por personas que buscan lo que haces.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-50 image'>
                            <img src={muestraTarjetero} alt="Muestra tarjetero tarjet" />
                        </div>
                    </div>

                    <div className='block2'>
                        <div>
                            <a href="" className='btnMorado'>
                                Regístrate gratuitamente <br/> y accede a tu tarjetero digital tarjet.
                            </a>
                            <p>
                                No es necesario crear una tarjeta virtual para guardar, recomendar y recibir recomendaciones de socios Tarjet
                            </p>
                        </div>

                        <div>
                            <a href="" className='btnNaranja'>
                                Ya tienes tu cuenta Tarjet. <br />
                                Consulta aquí el directorio de socios tarjet.
                            </a>
                        </div>
                    </div>

                    <div className='block3'>
                        <div className='w-50'>
                            <img src={Promo} alt="Promocional tarjet" />
                        </div>
                        <div className='w-50'>
                            <h6>
                                Para todos aquellos que ofrecen un servicio o producto. <br/>
                            </h6>
                            <h6 className='mt-4'>
                                ¡avancemos juntos, registra tu empresa al directorio tarjet!, invíta a la gente a conocer más sobre ti.
                            </h6>
                            <p className='mt-5'>
                                En nuestro directorio de socios tarjet podrás compartir tus datos, imágenes, enlace a tus redes y medios de contacto, de manera fácil, sostenible y de forma gratuita.
                            </p>
                            <p>
                                Quien consulta gratuitamente el directorio de servicios y negocios tarjet, puede acceder a tu información general y guardar los datos en su agenda de contactos tarjet dentro de nuestra plataforma. También pueden recomendarte o compartir tu información en un clic.
                            </p>

                            <a href="">
                                Registra gratuitamente tu negocio en el directorio 
                            </a>
                        </div>
                    </div>

                    <div className='block4 text-center mt-3'>
                        <h5>Hagamos networking y suma más clientes.</h5>
                    </div>

                </div>

                {/* Mobile */}
                <div className='cuerpo d-block d-lg-none'>
                    <h2>
                        Tarjetero digital Tarjet <br/>
                        <span>
                            Lo nuevo de la Red networking, de tarjet, ¡utilízalo!
                        </span>
                    </h2>
                    <p>
                        Nuestro tarjetero Tarjet es la nueva generación de directorio de tarjetas digitales que facilitan la comunicación entre empresa, la consulta de información y las recomendaciones de mano en mano. 
                    </p>
                    <div className='sliderMobile'>
                        <Slider {...settingsTFMobile}> 
                            <div className='icon'>
                                <img 
                                    src={IconTDCont} alt="Icon Tarjet" 
                                />
                                <p>
                                    Facilidad para consultar tus contactos tarjet guardados.
                                </p>
                            </div>
                            <div className='icon'>
                                <img 
                                    src={IconTDBolsa} alt="Icon Tarjet" 
                                />
                                <p>
                                    Encuentra la Información de un servicio, producto o establecimiento de un socio tarjet.
                                </p>
                            </div>
                            <div className='icon'>
                                <img
                                    src={IconTDImagen} alt="Icon Tarjet"
                                />
                                <p>
                                    Genera confianza agregando imágenes a tu galería y llega a más personas.
                                </p>
                            </div>
                            <div className='icon'>
                                <img
                                    src={IconTDBusca} alt="Icon Tarjet" 
                                />
                                <p>
                                    En nuestro buscador puedes ser encontrado fácilmente por personas que buscan lo que haces.
                                </p>
                            </div>
                        </Slider>
                    </div>
                    <div className='banner'>
                        <img src={muestraTarjetero} alt="Muestra tarjetero tarjet" />
                    </div>
                    <div className='block2'>
                        <a href="" className='btnMorado'>
                            Regístrate gratuitamente <br/> y accede a tu tarjetero digital tarjet.
                        </a>
                        <p className='mt-4 mb-4'>
                            No es necesario crear una tarjeta virtual para guardar, recomendar y recibir recomendaciones de socios Tarjet
                        </p>
                        <a href="" className='btnNaranja'>
                            Ya tienes tu cuenta Tarjet. <br />
                            Consulta aquí el directorio de socios tarjet.
                        </a>
                    </div>
                    <div className='banner mt-0'>
                        <img src={Promo} alt="Muestra tarjetero tarjet" />
                    </div>
                    <div className='text'>
                        <h6>
                            Para todos aquellos que ofrecen un servicio o producto. <br/>
                        </h6>
                        <h6 className='mt-4'>
                            ¡avancemos juntos, registra tu empresa al directorio tarjet!, invíta a la gente a conocer más sobre ti.
                        </h6>
                        <p>
                            En nuestro directorio de socios tarjet podrás compartir tus datos, imágenes, enlace a tus redes y medios de contacto, de manera fácil, sostenible y de forma gratuita.
                        </p>
                        <p>
                            Quien consulta gratuitamente el directorio de servicios y negocios tarjet, puede acceder a tu información general y guardar los datos en su agenda de contactos tarjet dentro de nuestra plataforma. También pueden recomendarte o compartir tu información en un clic.
                        </p>

                        <a href="">
                            Registra gratuitamente tu negocio en el directorio 
                        </a>
                    </div>
                </div>
            </div>

            {/* Btn Contacto */}
            <div className='container-fluid Contacto'>
                <div className='d-block d-lg-none'>
                    <h5>
                        Hagamos networking y suma más clientes.
                    </h5>
                </div>
                <div className='btnContactanos'>
                    <a href="">
                        Contáctanos
                    </a>
                </div>
            </div>

            {/* Preguntas Frecuentes */}
            <div className='container-fluid PreguntasFrecuentes tarjeta'>
                <div className='cuerpo'>
                    <h6>Preguntas frecuentes</h6>
                    <ul>
                        <li>¿Qué información puedo poner en mi tarjeta Tarjet?</li>
                        <li>¿Cómo compro mi tarjeta Tarjet?</li>
                        <li>¿Qué formas de pago aceptan?</li>
                        <li>¿El pago es por única vez?</li>
                        <li>¿Realizan facturas?</li>
                        <li>¿Tiene vigencia mi tarjeta?</li>
                        <li>¿Puedo actualizar la información de mi tarjeta Tarjet?</li>
                        <li>¿Es autoadministrable?</li>
                        <li>¿Modificar alguna información tiene algún costo extra?</li>
                        <li>¿Qué tan seguros están mis datos?</li>
                        <li>¿Cómo guardo mi tarjeta en mi dispositivo?</li>
                        <li>¿Cómo envío mi tarjeta a mis clientes?</li>
                        <li>¿Se requiere alguna aplicación de Tarjet.mx?</li>
                        <li>¿En qué dispositivo se podrá visualizar mi tarjet?</li>
                        <li>¿Cómo funcionan las tarjetas físicas NFC?</li>
                        <li>¿Cómo funcionan las tarjetas físicas NFC?</li>
                        <li>¿En cuánto tiempo recibiré mi tarjeta física NFC?</li>
                    </ul>
                    <p>
                        Nos encantará poder ayudarte a resolver tus dudas. <br/>
                        <span>
                            Escríbenos a contacto@tarjet.mx ó llámanos si prefieres hablar con nosotros.
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Home;