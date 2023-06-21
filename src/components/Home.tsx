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
    // const settingsTDTablet = {
    //     dots: true,
    //     arrows: false,
    //     infinite: true,
    //     autoplaySpeed: 6000,
    //     autoplay: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 3
    // }

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
                    <h2>La tarjeta física Tarjet, con NFC</h2>

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

        </>
    );
}

export default Home;