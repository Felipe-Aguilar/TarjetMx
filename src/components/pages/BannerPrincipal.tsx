import VideoBanner from '../../assets/vdcabezaltarjet1080p.mp4';
import VideoBannerMobile from '../../assets/vdcabezaltarjetmovil1080p.mp4';
import { Link } from 'react-scroll';

const BannerPrincipal = () => {


    return ( 
        <>
            <div className="container-fluid bannerVideo">
                <div className='video'>
                    <video autoPlay muted loop>
                        <source src={VideoBanner}/>
                    </video>

                    <div className='contenido'>
                        {/* <h1>Tu tarjetero virtual en tu celular, conecta a personas con tus servicios y hagamos networking entre negocios.</h1> */}

                        <h1>Es un tarjetero virtual en tu celular. <br/>
                        Conectamos personas con tus servicios y fortalecemos el  networking entre negocios.</h1>

                        <div className='green'>
                            <h5>Por qué es un tarjetero.</h5>
                            <p>
                                Digitalizamos el concepto de ordenar en una sola herramienta todas las tarjetas de tus principales proveedores. Podrás consultar sus datos de forma fácil y accesible en tu celular. 
                                <br /><br />
                                Convertirse en digital implica mejorar la forma en que administras tus contactos de negocios.
                            </p>
                            <h6 className='mb-0'>
                                <span>Te invitamos a conocer:</span> <br/>
                                <Link
                                    activeClass="active"
                                    to="section1"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    La tarjeta digital.
                                </Link>
                                <Link
                                    activeClass="active"
                                    to="section2"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    La tarjeta física con NFC.
                                </Link>
                                <Link
                                    activeClass="active"
                                    to="section3"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className='mb-0'
                                >
                                    El tarjetero digital Tarjet.
                                </Link>
                            </h6>
                        </div>
                    </div>
                </div>

                <div className='videoMobile d-flex d-lg-none'>
                    <video autoPlay muted loop>
                        <source src={VideoBannerMobile}/>
                    </video>

                    <div className='contenido'>
                        {/* <h5>
                            Tu tarjetero virtual en tu celular, conecta a personas con tus servicios y hagamos networking entre negocios.
                        </h5> */}
                        <h5>
                            Es un tarjetero virtual en tu celular.Conectamos personas con tus servicios y fortalecemos el  networking entre negocios.
                        </h5>
                    </div>
                </div>
            </div>
            <div className='container-fluid bannerMobile d-block d-lg-none'>
                <div>
                    <h4>Por qué es un tarjetero.</h4>
                    <p>
                        Digitalizamos el concepto de ordenar en una sola herramienta todas las tarjetas de tus principales proveedores. Podrás consultar sus datos de forma fácil y accesible en tu celular. 

                        <br /><br />
                        Convertirse en digital implica mejorar la forma en que administras tus contactos de negocios.
                    </p>
                    <h5 className='mt-5'>
                        <span>Te invitamos a conocer:</span> <br/>
                        <Link
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            La tarjeta digital.
                        </Link>
                        <Link
                            activeClass="active"
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            La tarjeta física con NFC.
                        </Link>
                        <Link
                            activeClass="active"
                            to="section3"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='mb-0'
                        >
                            El tarjetero digital Tarjet.
                        </Link>
                    </h5>
                </div>
            </div>
        </>
    );
}

export default BannerPrincipal;