import Slider from 'react-slick';

import premiumBasico from '../../assets/premium-basico.png';
import premium1 from '../../assets/premium1.png';
import premium2 from '../../assets/premium2.png';
import FlechaIzquierda from '../../assets/flecha-izquierda.svg';
import FlechaDerecha from '../../assets/flecha-derecha.svg';

const Premium = () => {

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
            >
                <img src={FlechaIzquierda} className='img-fluid'/>
            </div>
        ),
        nextArrow: (
            <div className='custom-arrow custom-prev-arrow'
            >
                <img src={FlechaDerecha} className='img-fluid'/>
            </div>
        )
    }

    return ( 
        <div className="container-fluid Premium">
            <h1>Planes Premium</h1>

            <p>
                ¡Bienvenido al siguiente nivel de conectividad y organización!
            </p>
            <p>
                Con nuestros planes de suscripción premium de servicios Tarjet, tienes el poder de llevar tus conexiones y tu negocio a nuevas alturas.
            </p>
            <p>
                Desde el acceso completo a funciones, hasta la capacidad de ampliar tu red de contactos, encontrarás el plan perfecto que se adapte a tus necesidades y objetivos.
            </p>
            <p>
                ¡Prepárate para transformar la manera en que te conectas y creces profesionalmente!
            </p>

            <h2>Conoce nuestros planes</h2>

            <div className="btns">
                <button className='primer'>
                    Básica y gratuita
                </button>
                <button>
                    Premium 1
                </button>
                <button>
                    Premium 2
                </button>
            </div>

            <div className="btnsMobile">
                <div>
                    <button className='primer'>
                        Básica y gratuita
                    </button>
                    <button>
                        Premium 1
                    </button>
                    <button>
                        Premium 2
                    </button>
                </div>
            </div>

            <div className='planes'>
                <div className='plan'>
                    <div className='encabezado'>
                        <h3>Básica y gratuita</h3>
                    </div>

                    <div className='cuerpo'>
                        <div className='img'>
                            <img src={premiumBasico}/>
                        </div>
                        <ul>
                            <li>Diseño de nuestra galería básica</li>
                            <li>Espacio para 3 servicios</li>
                            <li>Espacio para 3 imágenes</li>
                            <li>Todas las opciones de contacto</li>
                            <li>Rango de poder ser encontrado en directorio de hasta 3 kms a la redonda</li>
                        </ul>
                    </div>

                    <div className='footer'>
                        <h3>Gratuito</h3>
                    </div>
                </div>

                <div className='plan'>
                    <div className='encabezado'>
                        <h3>Premium 1</h3>
                    </div>

                    <div className='cuerpo'>
                        <div className='img'>
                            <img src={premium1}/>
                        </div>
                        <ul>
                            <li>Diseño premium de TarjetaDigital</li>
                            <li>Diseño premium de encabezado</li>
                            <li>Más espacio para imágenes (7)</li>
                            <li>Más espacio para servicios (7)</li>
                            <li>Espacio para 1 video</li>
                            <li>Amplio rango de búsqueda en directorio hasta nivel nacional</li>
                            <li>Métricas y estadísticas de uso</li>
                            <li>10% descuento en la compra de productos tarjet durante todo el año</li>
                        </ul>
                    </div>

                    <div className='footer-b'>
                        <div className='buttons'>
                            <h6>Costo por mes</h6>
                            <span className=' d-block font-weight-bold text-center'>
                                $25.00 mxn. 
                            </span>
                            {/* <a href="https://shop.tarjet.mx/">
                                <span>
                                    $25.00 mxn. 
                                </span>
                                <span>
                                    Comprar
                                </span>
                            </a> */}
                        </div>
                        <div className='buttons buttons-b'>
                            <h6>Costo por año</h6>
                            <a href="https://shop.tarjet.mx/">
                                <span>
                                    $300.00 mxn. 
                                </span>
                                <span>
                                    Comprar
                                </span>
                            </a>
                        </div>

                    </div>
                </div>

                <div className='plan'>
                    <div className='encabezado'>
                        <h3>Premium 2</h3>
                    </div>

                    <div className='cuerpo'>
                        <div className='img'>
                            <img src={premium2}/>
                        </div>
                        <ul>
                            <li>Diseño premium de TarjetaDigital</li>
                            <li>Diseño premium de encabezado</li>
                            <li>Más espacio para imágenes (12)</li>
                            <li>Más espacio para servicios (12)</li>
                            <li>Espacio para 1 video</li>
                            <li>Amplio rango de búsqueda en directorio hasta nivel nacional</li>
                            <li>Métricas y estadísticas de uso</li>
                            <li>Ecommerce (espacio para vender servicios, apartar citas, etc) 6 servicios</li>
                        </ul>
                    </div>

                    <div className='footer-b'>
                        <div className='buttons'>
                            <h6>Costo por mes</h6>
                            <span className=' d-block font-weight-bold text-center'>
                                $60.00 mxn. 
                            </span>
                            {/* <a href="https://shop.tarjet.mx/">
                                <span>
                                    $60.00 mxn. 
                                </span>
                                <span>
                                    Comprar
                                </span>
                            </a> */}
                        </div>
                        <div className='buttons buttons-b'>
                            <h6>Costo por año</h6>
                            <a href="https://shop.tarjet.mx/">
                                <span>
                                    $720.00 mxn. 
                                </span>
                                <span>
                                    Comprar
                                </span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            <div className='planesMobile'>
                <Slider {...settingsCards}>
                    <div className='plan'>
                        <div className='encabezado'>
                            <h3>Básica y gratuita</h3>
                        </div>

                        <div className='cuerpo'>
                            <div className='img'>
                                <img src={premiumBasico}/>
                            </div>
                            <ul>
                                <li>Diseño de nuestra galería básica</li>
                                <li>Espacio para 3 servicios</li>
                                <li>Espacio para 3 imágenes</li>
                                <li>Todas las opciones de contacto</li>
                                <li>Rango de poder ser encontrado en directorio de hasta 3 kms a la redonda</li>
                            </ul>
                        </div>

                        <div className='footer'>
                            <h3>Gratuito</h3>
                        </div>
                    </div>

                    <div className='plan'>
                        <div className='encabezado'>
                            <h3>Premium 1</h3>
                        </div>

                        <div className='cuerpo'>
                            <div className='img'>
                                <img src={premium1}/>
                            </div>
                            <ul>
                                <li>Diseño premium de TarjetaDigital</li>
                                <li>Diseño premium de encabezado</li>
                                <li>Más espacio para imágenes (7)</li>
                                <li>Más espacio para servicios (7)</li>
                                <li>Espacio para 1 video</li>
                                <li>Amplio rango de búsqueda en directorio hasta nivel nacional</li>
                                <li>Métricas y estadísticas de uso</li>
                                <li>10% descuento en la compra de productos tarjet durante todo el año</li>
                            </ul>
                        </div>

                        <div className='footer-b'>
                            <div className='buttons'>
                                <h6>Costo por mes</h6>
                                <span className=' d-block font-weight-bold text-center'>
                                    $25.00 mxn. 
                                </span>
                                {/* <a href="https://shop.tarjet.mx/">
                                    <span>
                                        $25.00 mxn. 
                                    </span>
                                    <span>
                                        Comprar
                                    </span>
                                </a> */}
                            </div>
                            <div className='buttons buttons-b'>
                                <h6>Costo por año</h6>
                                <a href="https://shop.tarjet.mx/">
                                    <span>
                                        $300.00 mxn. 
                                    </span>
                                    <span>
                                        Comprar
                                    </span>
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className='plan'>
                        <div className='encabezado'>
                            <h3>Premium 2</h3>
                        </div>

                        <div className='cuerpo'>
                            <div className='img'>
                                <img src={premium2}/>
                            </div>
                            <ul>
                                <li>Diseño premium de TarjetaDigital</li>
                                <li>Diseño premium de encabezado</li>
                                <li>Más espacio para imágenes (12)</li>
                                <li>Más espacio para servicios (12)</li>
                                <li>Espacio para 1 video</li>
                                <li>Amplio rango de búsqueda en directorio hasta nivel nacional</li>
                                <li>Métricas y estadísticas de uso</li>
                                <li>Ecommerce (espacio para vender servicios, apartar citas, etc) 6 servicios</li>
                            </ul>
                        </div>

                        <div className='footer-b'>
                            <div className='buttons'>
                                <h6>Costo por mes</h6>
                                <span className=' d-block font-weight-bold text-center'>
                                    $60.00 mxn. 
                                </span>
                                {/* <a href="https://shop.tarjet.mx/">
                                    <span>
                                        $60.00 mxn. 
                                    </span>
                                    <span>
                                        Comprar
                                    </span>
                                </a> */}
                            </div>
                            <div className='buttons buttons-b'>
                                <h6>Costo por año</h6>
                                <a href="https://shop.tarjet.mx/">
                                    <span>
                                        $720.00 mxn. 
                                    </span>
                                    <span>
                                        Comprar
                                    </span>
                                </a>
                            </div>

                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Premium;