import premiumBasico from '../../assets/premium-basico.png';
import premium1 from '../../assets/premium1.png';
import TarjetaDigital from '../pages/TarjetaDigital';

const Premium = () => {
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
                <button>
                    Institucional 1
                </button>
                <button>
                    Institucional 2
                </button>
                <button>
                    Institucional 3
                </button>
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

                    <div className='footer'>
                        <h3>Gratuito</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Premium;