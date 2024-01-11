import { useEffect } from 'react';
import ReactGA from 'react-ga';
import generatePixel from "../../pixel";

import CelularImage from '../../assets/im-directorio-01.png';
import IconoPersonalizado from '../../assets/icono-personalizado.svg';
import IconoBuscador from '../../assets/icono-buscador.svg';
import IconoTarjetaDigital from '../../assets/icono-tarjetadigital.svg';
import Personajes from '../../assets/personajes-01.webp';
import IconoNegocios from '../../assets/icono-negocios.jpg';
import Inscribete from '../../assets/personajes-02.webp';
import CelularNegro from '../../assets/im-tarjetadigital.webp';
import IconoWhats from '../../assets/icono-whatsapp.svg';
import IconoGuardar from '../../assets/icono-guardar.svg';
import IconoUbicacion from '../../assets/icono-ubicacion.svg';
import IconoCompartir from '../../assets/icono-compartir.svg';
import IconoCorreo from '../../assets/icono-correo.svg';
import IconoSitioWeb from '../../assets/icono-sitioweb.svg';
import RedesSociales from '../../assets/icono-redes.svg';
import IlustracionNegro from '../../assets/im-imagenes-servicios.webp';
import Interactiva from '../../assets/icono-interactiva.svg';
import Escaparate from '../../assets/icono-tienda.svg';
import Profesionalismo from '../../assets/icono-profesionalismo.svg';
import TarjetaNFC from '../../assets/im-tarjetanfc.webp';
import Tarjet from '../../assets/icono-tarjet.svg';

const Landing = () => {

    ReactGA.initialize('G-MMCF7P3JG8');

    const pixelCode = generatePixel('1219665732284488', 'https://tarjet.mx/');

    useEffect(()=>{

        // Establece el título de la página
        ReactGA.set({ page: window.location.pathname });
        // Envia una página vista al cargar el componente
        ReactGA.pageview(window.location.pathname);
    }, []);

    return ( 
        <div className="Landing">

            <noscript>
                {pixelCode}
            </noscript>

            <div className="FirstBlock">
                <div className="Flex">

                    <div className='container1'>
                        <h1>Aumenta tus clientes</h1>
                        <h3>Que conozcan tus servicios con el</h3>
                        <h2>Directorio tarjet</h2>
                    </div>

                    <div className='container2'>
                        <img src={CelularImage} alt="Gráfico de celular" />
                    </div>
                </div>

                <div className='infoIcons'>
                    <div className='info'>
                        <img src={IconoPersonalizado} alt="Icono personalizado" />

                        <div>
                            <h5>Personalizado</h5>
                            <p>Sube tu tarjeta o elige el diseño que más te guste para tu perfil.</p>
                        </div>
                    </div>
                    <div className='info'>
                        <img src={IconoBuscador} alt="Icono personalizado" />

                        <div>
                            <h5>Buscador</h5>
                            <p>Puedes ser encontrado fácilmente a nivel nacional</p>
                        </div>
                    </div>
                    <div className='info'>
                        <img src={IconoTarjetaDigital} alt="Icono personalizado" />

                        <div>
                            <h5>Tarjeta Digital</h5>
                            <p>Tienes gratis un micrositio web para colocar tu información</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='buttonIllustration'>
                <img src={Personajes} alt="Ilustración de personajes" />
                <a href="https://tarjet.site/#/login">
                    Inscríbete a Tarjet, es GRATIS
                </a>
            </div>

            <div className='secondBlock'>
                <div className='infoIcon'>
                    <img src={IconoNegocios} alt="Icono negocios" />

                    <div>
                        <h5>Hagamos negocios </h5>
                        <p>
                            Al seleccionar una tarjeta, puedes ver, guardar ó contactarte con la empresa ó persona.
                        </p>
                    </div>
                </div>

                <div className='ilustration'>
                    <img src={Inscribete} alt="Ilustración" />
                </div>

                <div className='infoText'>
                    <h4>Inscríbete</h4>
                    <h5>Hagamos la mejor red empresarial de México</h5>
                </div>
            </div>

            <div className='blockBlack'>
                <div className='title'>
                    <h3>Conoce tu tarjeta digital gratuita</h3>
                    <h5>(La mejor forma de presentarte)</h5>
                </div>

                <div className='info'>
                    <div className='Block1'>
                        <h5>
                            Encabezado de tus servicios 
                        </h5>
                        <h5>
                            Imagen de perfil ó logotipo
                        </h5>
                        <div>
                            <h5>Zona de datos:</h5>
                            <div className='infoIcons'>
                                <div>
                                    <img src={IconoGuardar} alt="icono guardar" />
                                    <h5>Guardar <br/>contacto</h5>
                                </div>
                                <div>
                                    <img src={IconoWhats} alt="icono whatsApp" />
                                    <h5>Enviar <br/>whatsapp</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='Block2'>
                        <img src={CelularNegro} alt="Ilustración de celular" />
                    </div>
                </div>

                <div className='actions'>
                    <div>
                        <img src={IconoUbicacion} alt="Icono" style={{width: '35%'}}/>
                        <h6>Ubicación con mapa</h6>
                    </div>
                    <div>
                        <img src={IconoCompartir} alt="Icono" style={{width: '35%'}}/>
                        <h6>Compartir</h6>
                    </div>
                    <div>
                        <img src={IconoCorreo} alt="Icono" />
                        <h6>Correo</h6>
                    </div>
                    <div>
                        <img src={IconoSitioWeb} alt="Icono" />
                        <h6>Sitio web</h6>
                    </div>
                </div>

                <div className='redesSociales'>
                    <img src={RedesSociales} alt="Redes sociales" />
                    <h5>Enlace a redes sociales</h5>
                </div>

                <div className='Ilustration'>
                    <h4>
                        Tienes una zona para mencionar tus principales servicios y agregar fotos de tus productos, promociones ó imagenes de tu local
                    </h4>
                    <img src={IlustracionNegro} alt="Ilustración" />
                </div>

                <div className='infoFooter'>
                    <h4>Ventajas de tu tarjeta digital</h4>

                    <div className='container'>
                        <div className='info'>
                            <img src={Interactiva} alt="icono" style={{width: '50px'}}/>
                            <div className='w-75'>
                                <h6>Interactiva</h6>
                                <p>La gente puede contactarte, ver y saber más de tu negocio</p>
                            </div>
                        </div>
                        <div className='info'>
                            <img src={Escaparate} alt="icono" />
                            <div className='w-75'>
                                <h6>Escaparate 24/7</h6>
                                <p>Tus servicios en línea los 365 días del año.</p>
                            </div>
                        </div>
                        <div className='info'>
                            <img src={Profesionalismo} alt="icono" />
                            <div className='w-75'>
                                <h6>Profesionalismo</h6>
                                <p>Comunicas de forma atractiva tu marca</p>
                            </div>
                        </div>
                    </div>

                    <div className='inscribete'>
                        <h2>Inscríbete</h2>
                        <h5>Y crea gratis tu tarjeta digital,</h5>
                        <h6>recuerda que puedes compartir tu tarjeta con el Qr que te obsequiemos</h6>
                    </div>
                </div>
            </div>

            <div className='imageNFC'>
                <img src={TarjetaNFC} alt="ilustración de nfc" />
            </div>

            <div className='visita'>
                <h5>
                    Visita nuestro sitio <br/>
                    <span>y conoce los productos</span>
                </h5>
                <img src={Tarjet} alt="logo tarjet" />

                <h5 className='siguenos'>Síguenos en nuestras redes sociales</h5>
                <div className='social'>
                    <a href="https://www.facebook.com/profile.php?id=100095193982785">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/tarjetmx/">
                        <i className="bi bi-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Landing;