import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import VideoCel1 from '../../assets/tarjet-tarjetadigital-muestra.mp4';
import IconComClic from '../../assets/icono-tarjet-contactoclic.svg';
import IconAtractive from '../../assets/icono-tarjet-atractivo.svg';
import IconMultimedia from '../../assets/icono-tarjet-multimedia.svg';
import IconIncentiva from '../../assets/icono-tarjet-incentiva.svg';
import IconPersonalizado from '../../assets/icono-tarjet-personalizado.svg';
import FlechaIzquierda from '../../assets/flecha-izquierda.svg';
import FlechaDerecha from '../../assets/flecha-derecha.svg';

const TarjetaDigital = () => {

    // Animación Icons Tarjeta Digital
    const iconsTDigi = {
        initial: {opacity: 0, x:-50},
        whileInView:{x:0, opacity: 1},
        viewport: {once:true}
    }

    // Settings Slide Tarjeta Digital Mobile
    const settingsTDMobile = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplaySpeed: 6000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: (
            <div className='custom-arrow custom-prev-arrow'>
                <img src={FlechaIzquierda} className='img-fluid'/>
            </div>
        ),
        nextArrow: (
            <div className='custom-arrow custom-prev-arrow'>
                <img src={FlechaDerecha} className='img-fluid'/>
            </div>
        ),
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

    return ( 
        <>
            <div className='container-fluid TarjetaDigital tarjeta' id="section1">
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
        </>
    );
}

export default TarjetaDigital;