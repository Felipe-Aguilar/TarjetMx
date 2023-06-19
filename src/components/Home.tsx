import VideoBanner from '../assets/vdcabezaltarjet1080p.mp4';
import VideoBannerMobile from '../assets/vdcabezaltarjetmovil1080p.mp4';

const Home = () => {
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

        </>
    );
}

export default Home;