import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Logo from '../assets/logotarjet.svg';
import LogoMobile from '../assets/logotarjet-cabezal-tablet.svg';

const Header = () => {

    const [button, setButton] = useState<boolean>(false);

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
                                <a href="">Tienda</a>
                                <a href="">Empresas</a>
                                <a href="">Premium</a>
                                <a href="">Tarjeta Digital</a>
                                <a href="">Tarjeta física</a>
                                <a href="">Iniciar sesión</a>
                                <a href="">Directorio Tarjet</a>
                                <a href="">Contacto</a>
                            </div>

                            <div className='social'>
                                <a href="" target='_blank'>
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="" target='_blank'>
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Mobile */}
                    <div className="d-flex d-lg-none justify-content-between align-items-center">
                        <div className='logo w-75'>
                            <a href="https://tarjet.mx/">
                                <img src={ LogoMobile } alt="Tarjet | Tu tarjeta de presentación digital" className='img-fluid'/>
                            </a>
                        </div>

                        <div className='menu'>
                            <button className='mobileMenu' onClick={()=>setButton(!button)}>
                                { !button ?
                                    <i className="bi bi-list"></i>
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
                                <a href="">Tienda</a>
                                <a href="">Empresas</a>
                                <a href="">Premium</a>
                                <a href="">Tarjeta Digital</a>
                                <a href="">Tarjeta física</a>
                                <a href="">Iniciar sesión</a>
                                <a href="">Directorio Tarjet</a>
                                <a href="">Contacto</a>
                            </div>

                            <hr className='mt-5'/>

                            <div className='social'>
                                <a href="" target='_blank'>
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="" target='_blank'>
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