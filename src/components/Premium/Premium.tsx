
import BannerPremium from '../../assets/banner-premium.webp';
import BannerPremiumMobile from '../../assets/banner-premium-mobile.png';
import BannerEmpresarial from '../../assets/banner-empresarial.webp';
import BannerEmpresarialMobile from '../../assets/banner-empresarial-mobile.webp';
import PlanBasico from '../../assets/plan-basico.webp';
import PlanPremium from '../../assets/plan-premium.webp';
import PlanEmpresarial1 from '../../assets/plan-empresarial1.webp';
import PlanEmpresarial2 from '../../assets/plan-empresarial2.webp';

const Premium = () => {

    return ( 
        <div className="container-fluid Premium">

            <div className='text'>
                <h1>Planes Premium</h1>
                {/* <p>
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
                </p> */}
            </div>

            <div className='banner'>
                <img src={BannerPremium} alt="Banner sé premium" className='bannerPDesk'/>
                <img src={BannerPremiumMobile} alt="Banner sé premium" className='bannerPMobile'/>
            </div>

            <div className='planes'>
                <div className='plan'>
                    <div className='first'>
                        <img src={PlanBasico} alt="Plan básico" />
                        <span>Básico</span>

                        <div className='price'>
                            <span>GRATUITO</span>
                        </div>
                    </div>
                    <div className='second'>
                        <span>Beneficios</span>

                        <ul>
                            <li>Diseños de nuestra galería inicial</li>
                            <li>Espacio para 4 servicios</li>
                            <li>Espacio para 4 imágenes</li>
                            <li>Todas las opciones de contacto</li>
                            <li>Rango de poder ser encontrado en directorio de hasta 5 kilometros a la redonda</li>
                        </ul>
                    </div>
                </div>

                <div className='plan premium'>
                    <div className='first'>
                        <img src={PlanPremium} alt="Plan básico" />
                        <span>Premium</span>

                        <div className='price'>

                            <div className='mensual'>
                                <p>costo mensual</p>
                                <span>$35.00 mxm.</span>
                            </div>

                            <p>costo anual</p>
                            <span>$420.00 mxn.</span>

                            <a href="https://shop.tarjet.mx/" target='_blank'>
                                Comprar
                            </a>
                        </div>
                    </div>
                    <div className='second'>
                        <span>Beneficios</span>

                        <ul>
                            <li>Diseño premium de tarjeta digital</li>
                            <li>Diseño premium de encabezado</li>
                            <li>Más espacio para imágenes (10)</li>
                            <li>Más espacio para servicios (10)</li>
                            <li>Espacio para 1 video</li>
                            <li>Amplio rango de búsqueda en directorio hasta nivel nacional</li>
                            <li>Mpetricas y estadísticas de uso</li>
                            <li>10% de descuento en la compra de productos tarjet duarante todo el plan</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='banner'>
                <img src={BannerEmpresarial} alt="Banner sé premium" className='bannerPDesk'/>
                <img src={BannerEmpresarialMobile} alt="Banner sé premium" className='bannerPMobile'/>
            </div>

            <div className='text-empresarial'>
                <h2>Planes Empresarial</h2>
            </div>

            <div className='planes'>
                <div className='plan empresarial1'>
                    <div className='first'>
                        <img src={PlanEmpresarial1} alt="Plan básico" />
                        <span>Empresarial 1</span>

                        <div className='price'>
                            <p>costo anual</p>
                            <span>$790.00 mxn.</span>

                            <a href="https://shop.tarjet.mx/" target='_blank'>
                                Comprar
                            </a>
                        </div>
                    </div>
                    <div className='second'>
                        <span>Beneficios</span>

                        <ul>
                            <li>Landing page de la empresa / institución</li>
                            <li>Diseño personalizado Tarjeta y Encabezado</li>
                            <li>Nosotros creamos tu Tarjet y entregamos los datos de acceso</li>
                            <li>Amplio rango de búsqueda en directorio hasta nivel nacional</li>
                            <li>Hasta 9 empleados</li>
                            <li>Alta y baja de usuarios sin límite</li>
                            <li>10% de descuento en la compra de productos tarjet</li>
                            <li>Métricas y estadísticas de uso</li>
                        </ul>
                    </div>
                </div>

                <div className='plan empresarial2'>
                    <div className='first'>
                        <img src={PlanEmpresarial2} alt="Plan básico" />
                        <span>Empresarial 2</span>

                        <div className='price'>

                            <p>costo anual</p>
                            <span>$990.00 mxn.</span>

                            <a href="https://shop.tarjet.mx/" target='_blank'>
                                Comprar
                            </a>
                        </div>
                    </div>
                    <div className='second'>
                        <span>Beneficios</span>

                        <ul>
                            <li>Landing page de la empresa / institución</li>
                            <li>Diseño personalizado Tarjeta y Encabezado</li>
                            <li>Nosotros creamos tu Tarjet y entregamos los datos de acceso</li>
                            <li>Amplio rango de búsqueda en directorio hasta nivel nacional</li>
                            <li>Hasta 19 empleados</li>
                            <li>Alta y baja de usuarios sin límite</li>
                            <li>10% de descuento en la compra de productos tarjet</li>
                            <li>Métricas y estadísticas de uso</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Premium;