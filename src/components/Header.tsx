import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import Logo from '../assets/logo-tarjet.svg';
import LogoMobile from '../assets/logo-tarjet.svg';
import LogoBuscador from '../assets/entrada-buscador-persona.svg';
import LogoBolsa from '../assets/icono-bolsa-ventas-tarjet.svg';

const Header = () => {

    const [button, setButton] = useState<boolean>(false);

    const navigate = useNavigate();

    // const navigateEmpresas = () => {
    //     navigate('/empresas');
    //     setButton(false);
    // }

    const navigatePremium = () => {
        navigate('/hazte-premium');
        setButton(false);
    }

    return ( 
        <>
            <header>
                <div className="container-fluid">
                    {/* Desktop */}
                    <div className="d-none d-lg-flex justify-content-between align-items-center">
                        <div className='logo w-auto'>
                            <a onClick={()=>navigate('/acerca-tarjet')}>
                                <img src={ Logo } alt="Tarjet | Tu tarjeta de presentación digital" className='img-fluid'/>
                            </a>
                        </div>

                        <div className='menu'>

                            <div className='iconosMenu'>
                                <a href="https://tarjet.site/directorio-tarjet">
                                    <img src={LogoBuscador} alt="Lupa para búsqueda en directorio tarjet" />
                                </a>
                                <a href="https://tarjetshop.com/">
                                    <img src={LogoBolsa} alt="Lupa para búsqueda en directorio tarjet" />
                                </a>
                            </div>

                            <div className='links'>
                                <a href="https://tarjetshop.com/" target='_blank'>Tienda</a>
                                <a href='https://tarjet.site/empresas'>Empresas</a>
                                <a onClick={()=>navigate('/hazte-premium')}>Planes</a>
                                {/* <a href="https://tarjet.site/#/login">Mi sesión</a> */}
                                <a href="https://tarjet.site/login">Mi Tarjetero</a>
                                <a onClick={()=>navigate('/acerca-tarjet')}>Acerca de Tarjet</a>
                                <a href="https://tarjet.site/directorio-tarjet">Directorio Tarjet</a>
                            </div>

                            <div className='social'>
                                <a href="https://www.facebook.com/profile.php?id=100095193982785&mibextid=ZbWKwL" target='_blank'>
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/tarjetmx/" target='_blank'>
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Mobile */}
                    <div className="d-flex d-lg-none justify-content-between align-items-center">
                        <div className='logo'>
                            <a onClick={()=>navigate('/acerca-tarjet')}>
                                <img src={ LogoMobile } alt="Tarjet | Tu tarjeta de presentación digital" className='img-fluid'/>
                            </a>
                        </div>


                        <div className='menu'>
                            <div className='iconosMenu'>
                                <a href="https://tarjet.site/directorio-tarjet">
                                    <img src={LogoBuscador} alt="Lupa para búsqueda en directorio tarjet" />
                                </a>
                                <a href="https://tarjetshop.com/">
                                    <img src={LogoBolsa} alt="Lupa para búsqueda en directorio tarjet" />
                                </a>
                            </div>
                            <button className='mobileMenu' onClick={()=>setButton(!button)}>
                                { !button ?
                                    <>
                                        MENÚ
                                        {/* <i className="bi bi-dash-lg"></i> */}
                                    </>
                                :
                                    <i className="bi bi-x"></i>
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            
            { button &&
                <AnimatePresence>
                    { button &&
                        <motion.div 
                            className='bodyMenuMobile'
                            initial={{opacity: 0, scale:0}}
                            animate={{opacity: 1, scale: 1}}
                            exit={{scale:0, opacity:0}}
                        >
                            <div className='links'>
                                <a href="https://tarjetshop.com/" target='_blank'>Tienda</a>
                                <a href='https://tarjet.site/empresas'>Empresas</a>
                                <a onClick={navigatePremium}>Planes</a>
                                {/* <a href="https://tarjet.site/#/login">Mi sesión</a> */}
                                <a href="https://tarjet.site/login">Mi Tarjetero</a>
                                <a onClick={()=>navigate('/acerca-tarjet')}>Acerca de Tarjet</a>
                                <a href="https://tarjet.site/directorio-tarjet">Directorio Tarjet</a>
                                <a href="https://wa.me/5586763895">Contacto</a>
                            </div>

                            <hr className='mt-5'/>

                            <div className='social'>
                                <a href="https://www.facebook.com/profile.php?id=100095193982785&mibextid=ZbWKwL" target='_blank'>
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/tarjetmx/" target='_blank'>
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
            }
        </>

    );
}

export default Header;