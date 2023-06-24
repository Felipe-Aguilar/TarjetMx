import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import IconTDCont from '../../assets/icono-tarjet-contactotarjetTD.svg';
import IconTDBolsa from '../../assets/icono-tarjet-productoTD.svg';
import IconTDImagen from '../../assets/icono-tarjet-agregarimagenTD.svg';
import IconTDBusca from '../../assets/icono-tarjet-buscadortarjetTD.svg';
import muestraTarjetero from '../../assets/im-tarjet-muestratarjetero-c.webp';
import Promo from '../../assets/Promo.webp';

const TarjeteroDigital = () => {

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
        </>
    );
}

export default TarjeteroDigital;