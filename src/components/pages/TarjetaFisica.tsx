import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import VideoTarjetaFisica from '../../assets/tarjet-tarjetafisica.mp4';
import IconAcerca from '../../assets/icono-tarjet-acercartarjeta.svg';
import IconClicNoti from '../../assets/icono-tarjet-daclic.svg';
import IconSalva from '../../assets/icono-tarjet-salvarcontacto.svg';
import IconAhorra from '../../assets/icono-tarjet-ahorrodinero.svg';
import IconContactLess from '../../assets/icono-tarjet-contactless.svg';
import IconEcologicoAzul from '../../assets/icono-tarjet-ecologicoazul.svg';
import IconPersoAzul from '../../assets/icono-tarjet-tarjetapersonalizableazul.svg';
// import GraficoA from '../../assets/grafico-continua-azul-a.svg';
// import GraficoB from '../../assets/grafico-continua-azul-b.svg';
// import GraficoC from '../../assets/grafico-continua-azul-c.svg';
// import IconPaso1 from '../../assets/icono-tarjet-paso1.svg';

const TarjetaFisica = () => {

    // Animación Icons Tarjeta Física
    const iconsTFis = {
        initial: {rotate: -180, scale: 0, opacity:0},
        whileInView:{rotate: 0, scale:1, opacity:1},
        viewport: {once:true}
    }

    // Graficos Tarjeta Física
    // const graficos = {
    //     a: GraficoA,
    //     b: GraficoB,
    //     c: GraficoC
    // }

    // Slider mobile 
    const settingsTFMobile = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplaySpeed: 6000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return ( 
        <>
            <div className='container-fluid TarjetaFisica tarjeta'>
                <div className='cuerpo d-none d-lg-block'>

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
                            <div className='bubble'>
                                <p>
                                    Content 1
                                </p>
                            </div>
                            <div className='bubble bb2'>
                                <p>
                                    Content 1
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='cuerpo d-block d-lg-none'>
                    <h2>
                        La tarjeta física tarjet <br/>
                        <span>
                            Reemplaza la necesidad de tarjetas de papel tradicionales y reduce tu huella ambiental.
                        </span>
                    </h2>
                    <video autoPlay muted loop>
                        <source src={VideoTarjetaFisica} />
                    </video>
                    <h6>
                        Como funciona
                    </h6>

                    <div className='icons'>
                        <div className='icon'>
                            <img src={IconAcerca} alt="tarjet icon" />
                            <p>
                                Acerca tu tarjeta tarjet al celular <br/>
                                <span>
                                    (Si tu movil no tiene sistema NFC, primero debes abrir la cámara)
                                </span>
                            </p>
                        </div>

                        <div className='icon noti'>
                            <img src={IconClicNoti} alt="tarjet icon" />
                            <p>
                                Haz clic sobre la notificación.
                            </p>
                        </div>

                        <div className='icon info'>
                            <img src={IconSalva} alt="tarjet icon" />
                            <div>
                                <p className='mb-3'>
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

                    <div className='diferencia'>
                        <h6>
                            Diferencia ante una tarjeta tradicional
                        </h6>
                        <Slider {...settingsTFMobile} className='d-block'>
                            <div className='icon'>
                                <img 
                                    src={IconAhorra} 
                                    alt="Tarjet icono" 
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
                                <img 
                                    src={IconContactLess} 
                                    alt="Tarjet icono" 
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
                                <img 
                                    src={IconEcologicoAzul} 
                                    alt="Tarjet icono" 
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
                                <img 
                                    src={IconPersoAzul} 
                                    alt="Tarjet icono" 
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
                        </Slider>
                    </div>

                    <div className='graficos'>
                        <h6>
                            Proceso de compra de la tarjeta física Tarjet con NFC
                        </h6>
                        <p>
                            Antes de comprar la tarjeta física, tienes que <a href=""> crear tu perfil Tarjet aquí </a>
                        </p>
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
        </>
    );
}

export default TarjetaFisica;