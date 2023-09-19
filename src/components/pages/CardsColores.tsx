import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import QrIcono from '../../assets/icono-tarjet-qr.svg';
import InteractivaIcono from '../../assets/icono-tarjet-interaccion.svg';
import ActualizadaIcono from '../../assets/icono-tarjet-perfilproducto.svg';
import ProfesionalismoIcono from '../../assets/icono-tarjet-profesionalismo.svg';
import CompatibleIcono from '../../assets/icono-tarjet-compatibilidad.svg';
import MemorableIcono from '../../assets/icono-tarjet-memorable.svg';
import CompartirIcono from '../../assets/icono-tarjet-compartiragil.svg';
import GuardarIcono from '../../assets/icono-tarjet-guardarusuario.svg';
import EcoIcono from '../../assets/icono-tarjet-ecologico.svg';
import IlimiIcono from '../../assets/icono-tarjet-ilimitado.svg';
import NetworkIcono from '../../assets/icono-tarjet-networking.svg';
import EscapaIcono from '../../assets/icono-tarjet-tienda.svg';
import OrdenadoIcono from '../../assets/icono-tarjet-ordencontacto.svg';
import BuscadorIcono from '../../assets/icono-tarjet-buscador.svg';
import FlechaIzquierda from '../../assets/flecha-izquierda.svg';
import FlechaDerecha from '../../assets/flecha-derecha.svg';

const CardsColores = () => {

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
        slidesToScroll: 1,
        prevArrow: (
            <div className='custom-arrow custom-prev-arrow'
                style={{left: '25px!important'}}
            >
                <img src={FlechaIzquierda} className='img-fluid'/>
            </div>
        ),
        nextArrow: (
            <div className='custom-arrow custom-prev-arrow'
                style={{right: '-25px'}}
            >
                <img src={FlechaDerecha} className='img-fluid'/>
            </div>
        )
    }
    const settingsCardsTablet = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplaySpeed: 6000,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: (
            <div className='custom-arrow custom-prev-arrow'>
                <img src={FlechaIzquierda} className='img-fluid'/>
            </div>
        ),
        nextArrow: (
            <div className='custom-arrow custom-prev-arrow'>
                <img src={FlechaDerecha} className='img-fluid'/>
            </div>
        )
    }

    return ( 
        <>
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
                            <a href="https://tarjet.site/#/login" className='btnAzul'>
                                Conoce más
                            </a>
                            <a href="https://tarjet.site/#/login" className='btnVerde'>
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
                            <a href="https://tarjet.site/#/login" className='btnAzul'>
                                Conoce más
                            </a>
                            <a href="https://shop.tarjet.mx/" className='btnVerde'>
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
                            <a href="https://tarjet.site/#/login" className='btnAzul'>
                                Conoce más
                            </a>
                            <a href="https://tarjet.mx/#/empresas" className='btnVerde'>
                                Registra tu empresa gratuitamente
                            </a>
                            <a href="https://tarjet.site/#/login" className='btnVioleta'>
                                <span>Crea tu cuenta gratuitamente</span> <br/>
                                (podrás consultar el directorio, no es necesario crear una tarjeta digital tarjet)
                            </a>
                            <a href="https://tarjet.site/#/directorio-tarjet" className='btnNaranja'>
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
                                    <a href="https://tarjet.site/#/login" className='btnAzul'>
                                        Conoce más
                                    </a>
                                    <a href="https://tarjet.site/#/login" className='btnVerde'>
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
                                    <a href="https://tarjet.site/#/login" className='btnAzul'>
                                        Conoce más
                                    </a>
                                    <a href="https://shop.tarjet.mx/" className='btnVerde'>
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
                                    <a href="https://tarjet.site/#/login" className='btnAzul'>
                                        Conoce más
                                    </a>
                                    <a href="https://tarjet.mx/#/empresas" className='btnVerde'>
                                        Registra tu empresa gratuitamente
                                    </a>
                                    <a href="https://tarjet.site/#/login" className='btnVioleta'>
                                        <span>Crea tu cuenta gratuitamente</span> <br/>
                                        (podrás consultar el directorio, no es necesario crear una tarjeta digital tarjet)
                                    </a>
                                    <a href="https://tarjet.site/#/directorio-tarjet" className='btnNaranja'>
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
                                    <a href="https://tarjet.site/#/login" className='btnAzul'>
                                        Conoce más
                                    </a>
                                    <a href="https://tarjet.site/#/login" className='btnVerde'>
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
                                    <a href="https://tarjet.site/#/login" className='btnAzul'>
                                        Conoce más
                                    </a>
                                    <a href="https://shop.tarjet.mx/" className='btnVerde'>
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
                                    <a href="https://tarjet.site/#/login" className='btnAzul'>
                                        Conoce más
                                    </a>
                                    <a href="https://tarjet.mx/#/empresas" className='btnVerde'>
                                        Registra tu empresa gratuitamente
                                    </a>
                                    <a href="https://tarjet.site/#/login" className='btnVioleta'>
                                        <span>Crea tu cuenta gratuitamente</span> <br/>
                                        (podrás consultar el directorio, no es necesario crear una tarjeta digital tarjet)
                                    </a>
                                    <a href="https://tarjet.site/#/directorio-tarjet" className='btnNaranja'>
                                        Consulta el directorio Tarjet
                                    </a>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

            </div>
        </>
    );
}

export default CardsColores;