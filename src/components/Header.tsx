import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import Logo from '../assets/logo-tarjet.svg';
import LogoMobile from '../assets/logo-tarjet.svg';

const Header = () => {

    const [button, setButton] = useState<boolean>(false);

    const navigate = useNavigate();

    const navigateEmpresas = () => {
        navigate('/empresas');
        setButton(false);
    }

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
                            <a href="https://tarjet.mx/">
                                <img src={ Logo } alt="Tarjet | Tu tarjeta de presentación digital" className='img-fluid'/>
                            </a>
                        </div>

                        <div className='menu'>
                            <div className='links'>
                                <a href="https://shop.tarjet.mx/" target='_blank'>Tienda</a>
                                <a onClick={()=>navigate('/empresas')}>Empresas</a>
                                <a onClick={()=>navigate('/hazte-premium')}>Premium</a>
                                {/* <a href="https://tarjet.site/#/login">Mi sesión</a> */}
                                <a href="https://tarjet.site/#/login">Mi Tarjetero</a>
                                <a href="https://tarjet.site/#/directorio-tarjet">Directorio Tarjet</a>
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
                            <a href="https://tarjet.mx/">
                                <img src={ LogoMobile } alt="Tarjet | Tu tarjeta de presentación digital" className='img-fluid'/>
                            </a>
                        </div>

                        <div className='menu'>
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
                                <a href="https://shop.tarjet.mx/" target='_blank'>Tienda</a>
                                <a onClick={navigateEmpresas}>Empresas</a>
                                <a onClick={navigatePremium}>Premium</a>
                                {/* <a href="https://tarjet.site/#/login">Mi sesión</a> */}
                                <a href="https://tarjet.site/#/login">Mi Tarjetero</a>
                                <a href="https://tarjet.site/#/directorio-tarjet">Directorio Tarjet</a>
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